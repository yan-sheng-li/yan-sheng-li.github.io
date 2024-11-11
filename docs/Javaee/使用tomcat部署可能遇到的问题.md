# 使用tomcat部署可能遇到的问题

## 访问jsp页面显示的是源码

> 通常是因为 Tomcat 没有正确解析 JSP 文件，而是将其作为普通文本文件直接返回。造成这种情况的常见原因有以下几点：

1. 项目没有部署到正确的 Web 目录
确保 JSP 文件被放在正确的 WebContent（或 webapp）目录中，而不是 src 目录。

在 Tomcat 中，JSP 文件应位于 WEB-INF 目录之外的 WebContent 文件夹或 webapp 文件夹中。例如：

```arduino
MyProject
│
├── src
├── WebContent
│   ├── WEB-INF
│   ├── home.jsp
│   └── login.jsp
```
2. Tomcat 服务器配置问题
确认项目已部署到 Tomcat 的 webapps 目录中，并且 Tomcat 正确启动。以下是一些检查步骤：

确保 Tomcat 启动后没有错误日志。
确认 web.xml 配置文件中没有异常配置或错误。
3. 访问路径不正确
请确保访问 URL 是通过 http://localhost:8080/项目名/页面名.jsp，例如：

```plaintext
http://localhost:8080/MyProject/home.jsp
```
若未指定端口号、项目名称或路径，Tomcat 可能无法解析正确的路径。

4. 使用的 JDK 版本与 Tomcat 不兼容
某些 JDK 版本与 Tomcat 版本之间存在不兼容性，特别是 Tomcat 9 及其以上版本。确保 JDK 与 Tomcat 版本匹配。您可以在项目的构建路径中确认当前的 JDK 版本。

5. Tomcat 配置不当导致 JSP 无法解析
在某些情况下，Tomcat 的 web.xml 中可能缺少处理 JSP 的配置。检查 web.xml 文件，确保包含 JSP 的处理器配置。

检查 conf/web.xml，确保有如下配置：

```xml
<servlet>
    <servlet-name>jsp</servlet-name>
    <servlet-class>org.apache.jasper.servlet.JspServlet</servlet-class>
    <init-param>
        <param-name>fork</param-name>
        <param-value>false</param-value>
    </init-param>
    <load-on-startup>3</load-on-startup>
</servlet>

<servlet-mapping>
    <servlet-name>jsp</servlet-name>
    <url-pattern>*.jsp</url-pattern>
</servlet-mapping>
```
6. 清理和重启项目及 Tomcat 服务器
如果一切都配置正确，尝试以下步骤：

清理项目和 Tomcat 缓存。
重新部署项目到 Tomcat。
重启 Tomcat。
清理后重新部署能帮助排除缓存问题。


## 页面提交过来的表单数据是乱码
### 1. 设置请求的字符编码

在 `doPost` 方法中，确保在处理请求之前设置字符编码为 UTF-8。这可以确保在读取表单数据时，使用正确的字符编码。

```java
@WebServlet("/publishNews")
public class PublishNewsServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 设置请求的字符编码
        request.setCharacterEncoding("UTF-8");
        
        String title = request.getParameter("title");
        String categoryId = request.getParameter("categoryId");
        String content = request.getParameter("content");

        // 后续的逻辑，如保存新闻等
    }
}
```

### 2. 设置响应的字符编码

为了确保浏览器能够正确显示响应内容，也需要设置响应的字符编码为 UTF-8。

```java
@WebServlet("/publishNews")
public class PublishNewsServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 设置请求的字符编码
        request.setCharacterEncoding("UTF-8");
        
        // 设置响应的字符编码
        response.setContentType("text/html;charset=UTF-8");

        String title = request.getParameter("title");
        String categoryId = request.getParameter("categoryId");
        String content = request.getParameter("content");

        // 后续的逻辑，如保存新闻等
    }
}
```

### 3. 设置 JSP 页面编码

在 JSP 页面中，也需要确保使用 UTF-8 编码来正确处理表单内容和显示。

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
```

这个标签确保了 JSP 页面内容使用 UTF-8 编码，避免中文字符被乱码处理。

### 4. 检查表单的字符编码

确保 HTML 表单使用了正确的字符编码。在 `<form>` 标签中添加 `accept-charset` 属性，指定为 `UTF-8`，确保提交时使用该编码。

```html
<form action="publishNews" method="post" accept-charset="UTF-8">
    <input type="text" name="title" placeholder="新闻标题" required>
    <select name="categoryId">
        <c:forEach var="category" items="${categories}">
            <option value="${category.id}">${category.name}</option>
        </c:forEach>
    </select>
    <textarea name="content" placeholder="新闻内容" required></textarea>
    <button type="submit">发布</button>
</form>
```

### 总结

确保以下几点：

1. 请求的字符编码：`request.setCharacterEncoding("UTF-8")`。
2. 响应的字符编码：`response.setContentType("text/html;charset=UTF-8")`。
3. JSP 页面指定编码：`<%@ page contentType="text/html;charset=UTF-8" %>`。
4. 表单提交时指定编码：`<form accept-charset="UTF-8">`。

这样做可以确保表单数据不会乱码，并能正确显示中文字符。

## 参考
![](http://cdn.qiniu.liyansheng.top/img/20241112001654.png)

server.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Server port="8005" shutdown="SHUTDOWN">

    <Service name="Catalina">

        <Connector port="8080" protocol="HTTP/1.1"
                   connectionTimeout="20000" URIEncoding="UTF-8"
                   redirectPort="8443" />
<!--
        <Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol"
                   maxThreads="150" SSLEnabled="true" scheme="https" 
                   secure="true" clientAuth="false" 
                   sslProtocol="TLS" 
                   keystoreFile="conf/keystore.jks" 
                   keystorePass="your_keystore_password" />
-->
        <Engine name="Catalina" defaultHost="localhost">

            <Host name="localhost" appBase="webapps"
                  unpackWARs="true" autoDeploy="true">

                <Context path="" docBase="ROOT" />
                <Context path="/myapp" docBase="myapp" />

            </Host>

        </Engine>

    </Service>

</Server>
```
web.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                             http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">

    <!-- 定义默认的欢迎文件列表 -->
    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
        <welcome-file>index.htm</welcome-file>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>

    <!-- 定义一些默认的MIME类型映射 -->
    <mime-mapping>
        <extension>html</extension>
        <mime-type>text/html</mime-type>
    </mime-mapping>
    <mime-mapping>
        <extension>txt</extension>
        <mime-type>text/plain</mime-type>
    </mime-mapping>
    <mime-mapping>
        <extension>jpg</extension>
        <mime-type>image/jpeg</mime-type>
    </mime-mapping>
    <mime-mapping>
        <extension>png</extension>
        <mime-type>image/png</mime-type>
    </mime-mapping>

    <servlet>
        <servlet-name>jsp</servlet-name>
        <servlet-class>org.apache.jasper.servlet.JspServlet</servlet-class>
        <init-param>
            <param-name>fork</param-name>
            <param-value>false</param-value>
        </init-param>
        <load-on-startup>3</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>jsp</servlet-name>
        <url-pattern>*.jsp</url-pattern>
    </servlet-mapping>


</web-app>
```