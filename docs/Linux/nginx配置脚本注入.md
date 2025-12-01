# nginx配置脚本注入

```
https://www.liyansheng.top/cdn/watermark2.js
```

**原生 Nginx 就能实现、最简单、最稳定的方案** —— 使用 `sub_filter` 注入 `<script>`。

> ✔ 不需要修改任何 HTML 文件
>  ✔ 不需要 OpenResty
>  ✔ 浏览器访问任意 HTML 时都会自动加载水印

在你的 location 中加入以下内容：

```nginx
location /YunnanTourismWeb/ {
    alias /usr/share/nginx/html/YunnanTourismWeb/;
    try_files $uri $uri/ /YunnanTourismWeb/index.html;

    # ---------- 注入脚本 ----------
    sub_filter_once off;
    sub_filter_types text/html;
    proxy_set_header Accept-Encoding "";  # 禁用 gzip 才能替换内容

    sub_filter "</head>" "<script src='https://www.liyansheng.top/cdn/watermark2.js'></script></head>";
}
```

### ⚠️ 注意事项

为了让 `sub_filter` 工作，**必须禁用 gzip 压缩**，所以加了：

```
proxy_set_header Accept-Encoding "";
```

否则 HTML 是 gzip 的，无法做字符串替换。

### 注入效果

每个 HTML 的 `</head>` 前会自动多出：

```html
<script src="https://www.liyansheng.top/cdn/watermark2.js"></script>
```

任何文件：

- `index.html`
- `a.html`
- `user/detail.html`
- 任意 Vue、React 打包生成的 HTML

都会自动带水印，无需手动编辑。

------

## 🧪 如何验证？

重启 nginx 后浏览器访问：

```
/YunnanTourismWeb/xxx.html
```

然后按 F12 → Elements → head 部分，你会看到脚本已经自动注入。