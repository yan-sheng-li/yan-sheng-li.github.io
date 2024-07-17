# 兼容JSP页面

## 依赖
```xml
<!-- 使用JSP引擎，SpringBoot内置Tomcat没有此依赖 -->
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
    <scope>provided</scope>
</dependency>
        <!-- 添加JSTL标签库依赖模块 -->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
 </dependency>
```

## 配置
```yaml
spring:
  mvc:
    view:
      prefix: /WEB-INF/page/
      suffix: .jsp
    index:
      view-name: login
```