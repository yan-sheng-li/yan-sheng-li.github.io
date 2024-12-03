# C标签库语法

## 介绍

> JSTL C 标签库简化了 JSP 页面中的控制逻辑，使得开发者可以更加高效地编写和维护页面。通过使用条件判断、循环、数据设置与输出等功能，可以减少 Java 代码的嵌入，提高代码的可读性和可维护性。

## 引入

要使用 C 标签，首先需要在 JSP 页面中添加以下代码来引入 JSTL 的核心标签库：

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
```

- **uri**：是 JSTL 核心标签库的标准 URI，表示你引入的是 JSTL 的核心标签库。
- **prefix**：为标签库指定的前缀，在 JSP 页面中使用时需要使用这个前缀来引用标签。例如，`<c:if>` 中的 `c` 就是你在这里指定的前缀。

### 示例

假设你引入了 JSTL 核心标签库，你就可以在 JSP 页面中使用 `<c:if>`, `<c:forEach>`, `<c:set>` 等标签：

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<body>
    <c:if test="${user != null}">
        <p>欢迎, ${user.username}!</p>
    </c:if>
    
    <c:set var="message" value="Hello, JSP!" />
    <p>${message}</p>

    <c:forEach var="item" items="${items}">
        <li>${item}</li>
    </c:forEach>
</body>
</html>
```

### 解释

1. **`<%@ taglib uri="..." prefix="c" %>`**：引入 JSTL 核心库，并为其指定了 `c` 前缀。
2. 使用 **`<c:if>`** 标签来判断 `user` 是否为 `null`，并输出欢迎信息。
3. 使用 **`<c:set>`** 标签来设置一个变量 `message`。
4. 使用 **`<c:forEach>`** 标签来遍历 `items` 集合并输出其中的每个 `item`。

## 基础用法

### 1. **`<c:if>`**

用于条件判断，根据 `test` 属性的值决定是否执行标签内部的内容。

**语法**：

```jsp
<c:if test="${condition}">
    <!-- 如果条件成立，执行这里的内容 -->
</c:if>
```

**示例**：

```jsp
<c:if test="${user != null}">
    <p>欢迎, ${user.username}!</p>
</c:if>
```

### 2. **`<c:choose>` 和 `<c:when>` / `<c:otherwise>`**

用于多个条件判断，类似于 `switch-case` 语法。

**语法**：

```jsp
<c:choose>
    <c:when test="${condition1}">
        <!-- 条件1成立时执行 -->
    </c:when>
    <c:when test="${condition2}">
        <!-- 条件2成立时执行 -->
    </c:when>
    <c:otherwise>
        <!-- 所有条件都不成立时执行 -->
    </c:otherwise>
</c:choose>
```

**示例**：

```jsp
<c:choose>
    <c:when test="${user.role == 'admin'}">
        <p>欢迎管理员!</p>
    </c:when>
    <c:when test="${user.role == 'user'}">
        <p>欢迎用户!</p>
    </c:when>
    <c:otherwise>
        <p>请登录!</p>
    </c:otherwise>
</c:choose>
```

### 3. **`<c:forEach>`**

用于遍历集合、数组等。

**语法**：

```jsp
<c:forEach var="item" items="${collection}">
    <!-- 使用 item 访问每一个元素 -->
</c:forEach>
```

**示例**：

```jsp
<ul>
    <c:forEach var="product" items="${products}">
        <li>${product.name} - ${product.price}</li>
    </c:forEach>
</ul>
```

### 4. **`<c:set>`**

用于设置一个变量的值，可以存储在页面、请求、会话或应用作用域中。

**语法**：

```jsp
<c:set var="variableName" value="${value}" />
```

- **作用域**：可以通过 `scope` 属性指定作用域（`page`, `request`, `session`, `application`）。

**示例**：

```jsp
<c:set var="greeting" value="欢迎访问我的网站!" />
<p>${greeting}</p>
```

### 5. **`<c:out>`**

用于输出内容，并自动转义 HTML 中的特殊字符，防止 XSS 攻击。

**语法**：

```jsp
<c:out value="${value}" />
```

**示例**：

```jsp
<p>您的用户名是：<c:out value="${username}" /></p>
```

### 6. **`<c:import>`**

用于从其他 URL 或文件动态导入内容。

**语法**：

```jsp
<c:import url="url_or_path" />
```

**示例**：

```jsp
<c:import url="header.jsp" />
```

### 7. **`<c:remove>`**

用于移除作用域中的变量。

**语法**：

```jsp
<c:remove var="variableName" scope="scopeName" />
```

- `scope` 可选值：`page`, `request`, `session`, `application`。

**示例**：

```jsp
<c:remove var="user" scope="session" />
```

### 8. **`<c:redirect>`**

用于进行页面重定向。

**语法**：

```jsp
<c:redirect url="url" />
```

**示例**：

```jsp
<c:redirect url="login.jsp" />
```

### 9. **`<c:catch>`**

用于捕获和处理错误。通常用于防止程序出错时显示异常信息。

**语法**：

```jsp
<c:catch var="error">
    <!-- 可能引发异常的代码 -->
</c:catch>
```

**示例**：

```jsp
<c:catch var="error">
    <c:out value="${some.undefinedProperty}" />
</c:catch>

<c:if test="${error != null}">
    <p>发生错误: ${error}</p>
</c:if>
```

### 10. **`<c:forTokens>`**

用于对一个字符串进行分隔并遍历。该标签适合用于处理字符串，按分隔符拆分后进行循环。

**语法**：

```jsp
<c:forTokens items="${value}" delims="," var="token">
    <!-- 遍历后的单个分隔项 -->
</c:forTokens>
```

**示例**：

```jsp
<c:forTokens items="${tags}" delims="," var="tag">
    <span>${tag}</span>
</c:forTokens>
```

------

### 11. **`<c:if>` / `<c:when>` 的条件表达式**

- `test` 属性用于指定条件表达式，它支持常用的比较运算符、逻辑运算符以及三元运算符。

#### 比较运算符：

- `==`：等于
- `!=`：不等于
- `<`：小于
- `>`：大于
- `<=`：小于等于
- `>=`：大于等于

#### 逻辑运算符：

- `&&`：与
- `||`：或
- `!`：非