---
permalink: /springboot/2
---
# 整合knife4j

## SpringBoot2.x集成


> Knife4j 是一个为 Java 开发者提供的 Swagger 文档聚合工具，它是 Swagger-Bootstrap-UI 的升级版。它的主要功能是生成和展示 API 文档，让开发者能够更轻松地查看和测试接口。

整合 Knife4j（Swagger-Bootstrap-UI 的升级版）到 Spring Boot 项目中是相对简单的，主要通过引入相关的依赖和配置来实现。

### 步骤 1: 添加 Maven 依赖

在你的 Spring Boot 项目的 `pom.xml` 文件中添加 Knife4j 的依赖（<font color='red'>此时不用再次引入swagger的相关依赖，knife4j已经包含了他们</font>)：

```xml
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-spring-boot-starter</artifactId>
    <version>3.0.2</version> <!-- 替换为最新版本 -->
</dependency>
```

### 步骤 2: 配置 Swagger 相关信息

```java
package com.sims.config;

import io.swagger.annotations.ApiOperation;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig2 {
    // 创建Docket存入容器，Docket代表一个接口文档
    @Bean
    public Docket webApiConfig(){
        return new Docket(DocumentationType.SWAGGER_2)
                // 创建接口文档的具体信息
                .apiInfo(webApiInfo())
                // 创建选择器，控制哪些接口被加入文档
                .select()
                // 指定@ApiOperation标注的接口被加入文档
                .apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))
                .build();
    }

    // 创建接口文档的具体信息，会显示在接口文档页面中
    private ApiInfo webApiInfo(){
        return new ApiInfoBuilder()
                // 文档标题
                .title("xxxx系统接口文档")
                // 文档描述
                .description("本文档描述了xxxx信息管理系统的接口定义")
                // 版本
                .version("1.0")
                // 联系人信息
                .contact(new Contact("程序员小李", "http://xxxxx.gitee.io", "xxxx@163.com"))
                // 版权
                .license("")
                // 版权地址
                .build();
    }
}
```

### 步骤 3: 启动 Spring Boot 应用程序

一旦你添加了依赖并配置了相关的信息，启动 Spring Boot 应用程序。然后，访问 Knife4j 的 UI 界面，你应该能够看到自动生成的 API 文档。

Swagger Knife4j 默认的访问路径为 `/doc.html`，在你的本地服务器地址后面添加这个路径即可访问生成的 API 文档页面。例如：`http://localhost:8080/doc.html`

### 步骤4：测试

```java
@RestController
@RequestMapping("/api/sims")
@CrossOrigin //跨域
public class ProductController {
    @GetMapping("/test")
    @ApiOperation("测试接口")
    public String test(){
        return "hello";
    }
}
```

启动程序，访问：http://localhost:{your-port}/doc.htm

![image-20231128194303906](http://cdn.qiniu.liyansheng.top/typora/image-20231128194303906.png)

接口信息：

![image-20231128194410697](http://cdn.qiniu.liyansheng.top/typora/image-20231128194410697.png)

可以直接向接口发起请求：

![image-20231128194452290](http://cdn.qiniu.liyansheng.top/typora/image-20231128194452290.png)

其他类型的接口同理操作。

### 注意事项

确保你的控制器类和方法已经按照 Swagger 的注解规范进行了注解，以便 Knife4j 能够扫描并生成 API 文档。

一般来说，只需以上几步即可在 Spring Boot 项目中整合 Knife4j 来生成 API 文档，方便查看和测试接口。如果有额外的配置需求或者特定的定制需求，你可以查阅 Knife4j 官方文档或者 GitHub 仓库，了解更多详细的配置方法和定制选项。

<font color='red'>注意</font>

> Swagger各版本访问地址

2.9.x 访问地址:
http://ip:port/{context-path}/swagger-ui.html

3.0.x 访问地址:
http://ip:port/{context-path}/swagger-ui/index.html

3.0集成knife4j 访问地址:
http://ip:port/{context-path}/doc.html


## SpringBoot3.x集成
### 1.依赖

```xml
<!--        接口文档，访问地址：ip:port/doc.html-->
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-openapi3-jakarta-spring-boot-starter</artifactId>
    <version>4.4.0</version>
</dependency>
```

### 2.配置

```java
package com.base.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("接口文档标题")
                        .version("1.0.0")
                        .description("接口描述")
                        .contact(new Contact().name("开发者").email("dev@example.com"))
                        .license(new License().name("Apache 2.0").url("https://www.apache.org/licenses/LICENSE-2.0.html"))
                )
                .externalDocs(new ExternalDocumentation()
                        .description("项目主页")
                        .url("https://github.com/xxx/xxx"));
    }
}
```

![image-20250628121047365](http://cdn.qiniu.liyansheng.top/img/image-20250628121047365.png)

#### 3.用法细节

- 如果不想全部controller都扫描到，可以用`@Hidden`注解隐藏不显示
- 在controller类名上加`@Tag(name = "xxx")`，具体方法名加`@Operation(summary = "xxx")`
- 配置文档需登录后访问

在`application.yml`配置如下：

```yaml
knife4j:
  enable: true
  basic:
    enable: true
    username: xxx
    password: xxx
```

![image-20250628120355691](http://cdn.qiniu.liyansheng.top/img/image-20250628120355691.png)

- 原UI页面显示

在`application.yml`配置如下：

```
springdoc:
  swagger-ui:
#    访问原UI界面：ip:port/swagger-ui/index.html
    path: /swagger-ui.html
    tags-sorter: alpha
    operations-sorter: alpha
  api-docs:
    path: /v3/api-docs
  group-configs:
    - group: 'default'
      paths-to-match: '/**'
      packages-to-scan: com.base.controller
```

![image-20250628121019994](http://cdn.qiniu.liyansheng.top/img/image-20250628121019994.png)



### 附录：可能会遇到问题

#### 问题1

控制台提示`favicon.ico`未找到

```bash
org.springframework.web.servlet.resource.NoResourceFoundException: No static resource favicon.ico.
	at org.springframework.web.servlet.resource.ResourceHttpRequestHandler.handleRequest(ResourceHttpRequestHandler.java:585)
	at 
```

#### 解决1

加一个 `favicon.ico` 到 `static/` 目录。（如果你不关心这个 favicon，可以忽略这个异常）

![image-20250628110509058](http://cdn.qiniu.liyansheng.top/img/image-20250628110509058.png)

#### 问题2

控制台提示`.well-known/appspecific/com.chrome.devtools.json`未找到

```bash
2025-06-28T10:40:49.872+08:00  WARN 9924 --- [nio-8888-exec-4] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [org.springframework.web.servlet.resource.NoResourceFoundException: No static resource .well-known/appspecific/com.chrome.devtools.json.]
org.springframework.web.servlet.resource.NoResourceFoundException: No static resource .well-known/appspecific/com.chrome.devtools.json.
	at org.sprin
```

#### 解决2

拦截 `.well-known/` 路径，返回空响应或 404（推荐给控制台干净控）

```java
@RestController
public class WellKnownController {
    @RequestMapping("/.well-known/**")
    public ResponseEntity<Void> handleUnknownWellKnown() {
        return ResponseEntity.notFound().build(); // 返回 404，或改为返回 204 无内容
    }
}
```

