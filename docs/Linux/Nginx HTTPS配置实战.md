# Nginx HTTPS 配置实战笔记（多域名 / 多证书）

## 一、核心结论

- ✅ **一个 IP + 一个 443 端口**
- ✅ **可以有多个 `server { listen 443 ssl; }`**
- ✅ **每个 server 可以用不同证书**
- 🔑 关键靠 **SNI + `server_name`**

------

## 二、证书能否共用？

### ✔ 可以共用的情况

证书里包含（SAN）：

- `liyansheng.top`
- `www.liyansheng.top`

👉 这两个域名 **可共用一个证书**

### ❌ 不能共用的情况

- `mini.liyansheng.top`
- `gitea.liyansheng.top`

👉 需要 **单独证书** 或 **通配符证书**

------

## 三、80 / 443 的正确职责划分（重点）

### ✅ 推荐做法（生产环境）

#### 1️⃣ 80 端口：只做跳转

```nginx
server {
    listen 80;
    server_name liyansheng.top www.liyansheng.top;
    return 301 https://liyansheng.top$request_uri;
}
```

#### 2️⃣ 443 端口：真正业务 + 证书

```nginx
server {
    listen 443 ssl http2;
    server_name liyansheng.top www.liyansheng.top;

    ssl_certificate     xxx.crt;
    ssl_certificate_key xxx.key;
}
```

🚫 **证书写在 80 端口是不会生效的**

------

## 四、多个 HTTPS server 是合法的吗？

✅ **完全合法 & 标准用法**

```nginx
server {
    listen 443 ssl;
    server_name liyansheng.top;
}

server {
    listen 443 ssl;
    server_name mini.liyansheng.top;
}
```

前提：

- `server_name` **不能重复**
- 浏览器支持 **SNI（现代浏览器都支持）**

------

## 五、常见致命错误（踩坑记录）

### ❌ 1️⃣ 同一个域名写多个 server

```nginx
server { listen 80; server_name liyansheng.top; }
server { listen 80; server_name liyansheng.top; }  # ❌
```

👉 只有**第一个生效**

------

### ❌ 2️⃣ 忘记给主域名配 443

- 只配了 `mini.xxx.com:443`
- `https://xxx.com` 一定访问失败

------

### ❌ 3️⃣ include 了不存在的文件

```nginx
include proxy_params;  # ❌ CentOS 默认没有
```

#### ✅ 正确做法

手动创建：

```bash
vi /etc/nginx/proxy_params
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
```

------

## 六、TLS 配置最佳实践（2025）

### 🚫 不推荐

```nginx
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
```

### ✅ 推荐

```nginx
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers HIGH:!aNULL:!MD5;
ssl_prefer_server_ciphers on;
```

------

## 七、HLS / 静态文件注意点

- `mime.types` **全局 include 一次即可**
- `location` 里再写 `types {}` 容易 **重复警告**
- 大多数情况下可直接删掉

------

## 八、推荐的配置组织方式（进阶）

```text
/etc/nginx/
├── nginx.conf
├── proxy_params
└── conf.d/
    ├── liyansheng.conf
    ├── mini.liyansheng.conf
    └── gitea.liyansheng.conf
```

优点：

- 清晰
- 好维护
- 不怕越写越乱

------

## 九、每次改配置必做的 3 步

```bash
nginx -t            # 语法检查（必须）
systemctl reload nginx
tail -f /var/log/nginx/error.log
```

------

## 十、一句话总结（给未来的自己）

> **HTTPS 不复杂，复杂的是配置习惯。
> 80 只跳转，443 才干活；
> 一个域名一个 server，一份证书只给该用的地方。**