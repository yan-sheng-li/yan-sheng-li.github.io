# 开启HTTPS访问

> 申请了正规厂商颁发的域名证书后，可以按照以下步骤将其下载并配置到 Spring Boot 服务中。

### 1. 下载证书文件

证书颁发机构（CA）通常提供以下文件：

- **证书文件**（一般为 `.crt` 或 `.cer` 格式）
- **私钥文件**（`.key` 格式）
- **证书链文件**（可能包含 CA 的中间证书，`.crt` 文件）

![image-20241107015852182](http://cdn.qiniu.liyansheng.top/img/image-20241107015852182.png)

下载后，将证书文件和私钥文件保存在本地的安全位置。

> 注意：Spring Boot，直接支持的证书格式是 `PKCS12`（即 `.p12` 或 `.pfx` 文件）和 `JKS` 格式。

### 2. 将证书转换为 `.p12` 或 `.jks` 格式

Spring Boot 使用 `PKCS12` (`.p12`) 或 `JKS` (`.jks`) 格式的密钥库文件，若证书是 `.crt` 和 `.key` 文件格式，可以使用 OpenSSL 将其转换为 `.p12` 文件。

```bash
openssl pkcs12 -export -in your_certificate.crt -inkey your_private.key -out keystore.p12 -name myalias -CAfile ca_bundle.crt -caname root
```

解释：

- `-in`：你的域名证书文件
- `-inkey`：私钥文件
- `-out`：生成的 `.p12` 文件名
- `-name`：证书的别名
- `-CAfile`：CA 提供的证书链文件
- `-caname`：根证书的名称

运行该命令后，系统会提示你输入一个密码。记住该密码，稍后需要用到。

### 3. 配置 Spring Boot

将生成的 `.p12` 文件放置到 Spring Boot 项目中（例如 `src/main/resources` 目录），然后在 `application.yml` 或 `application.properties` 中配置 HTTPS：

#### 在 `application.yml` 中配置

```yaml
server:
  ssl:
    key-store: classpath:keystore.p12  # 密钥库路径
    key-store-password: "your_password"  # 转换时设置的密码
    key-store-type: PKCS12  # 指定密钥库类型
    key-alias: "myalias"  # 转换时设置的别名
```

> 上面这个“别名”可以不写。

#### 在 `application.properties` 中配置

```properties
server.port=8443
server.ssl.key-store=classpath:keystore.p12
server.ssl.key-store-password=your_password
server.ssl.key-store-type=PKCS12
server.ssl.key-alias=myalias
```

### 4. 启动 Spring Boot 应用

配置完成后，启动 Spring Boot 应用。现在可以通过 `https://your-domain.com:端口号` 访问服务。

这样，你的 Spring Boot 服务就可以安全地通过 HTTPS 提供服务了！