# Thymeleaf和JavaScript在前后端交互中获取后端值

- 在后端（Java）中，将数据传递给前端：

```java
model.addAttribute("message", "Hello, Thymeleaf!");
```

## 方式1

> 通过将数据绑定到HTML元素的特定属性上，然后使用JavaScript获取该元素，并读取其属性值。在这个例子中，我们将数据绑定到`div`元素的`text`属性上，然后使用`getElementById`方法获取该元素并读取其`textContent`。

- 在HTML模板中，使用Thymeleaf属性绑定将数据绑定到HTML元素上：

```html
<div th:text="${message}" id="message"></div>
```

- 在JavaScript中，使用getElementById或querySelector等方法获取绑定了数据的HTML元素，并读取其值：javascript

```java
var messageElement = document.getElementById("message");
var message = messageElement.textContent;
console.log(message);  // 输出：Hello, Thymeleaf!
```

## 方式2

> 在内联的JavaScript代码中直接使用Thymeleaf表达式获取后端的值。在这个例子中，我们使用Thymeleaf的`th:inline`属性将JavaScript代码标记为内联模式，并使用`[[${message}]]`来获取后端传递的值。

```javascript
<script th:inline="javascript">
	var message = [[${message}]];
	console.log(message);  // 输出：Hello, Thymeleaf!
</script>
```

无论采用哪种方式，都可以在JavaScript中轻松地获取后端传递的值，并进行相应的处理和操作。

::: tip
个人比较推荐用第二种，简约易懂一些。
::: 
