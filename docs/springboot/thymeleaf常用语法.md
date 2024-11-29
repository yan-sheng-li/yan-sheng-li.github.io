# thymeleaf常用语法


## 命名空间
```html
<html lang="en" xmlns:th="http://www.w3.org/1999/xhtml">
  ```
 ## 用法

###    变量表达式：
        ${...}：用于在模板中输出变量的值。
        *{...}：用于在表单中绑定对象属性。

###     选择性渲染：
        th:if：用于条件性地渲染 HTML 元素。
        th:unless：与 th:if 相反，用于条件性地不渲染 HTML 元素。
        th:switch、th:case、th:case-default：用于类似 switch-case 的条件渲染。

 ###    循环迭代：
        th:each：用于循环迭代集合中的元素，并渲染 HTML 元素。

  ###   属性操作：
        th:href：用于设置链接的 href 属性。
        th:src：用于设置图片等资源的 src 属性。
        th:value：用于设置表单元素的值。

###     事件处理：
        th:onclick、th:onchange 等：用于设置元素的点击、变化等事件处理函数。

###     模板布局：
        th:insert：用于将另一个页面片段插入当前页面。
        th:replace：用于用另一个页面片段替换当前元素。
        th:include：用于包含另一个页面片段到当前页面。

###     国际化和国际化消息：
        #{...}：用于获取国际化消息。

###     片段操作：
        th:fragment、th:include：用于定义和引用片段。

###     模板继承：
        th:replace、th:insert、th:include：用于模板布局中的不同部分的组合。

###     文本操作：
        |...|：用于字符串的字面量。

 ###    CSS 类操作：
        th:class、th:id 等：用于设置元素的 CSS 类和 ID。

###     条件属性：
        th:attr：根据条件设置元素的属性。

 ###    模板注释：
        <!-- /*...*/ -->：用于模板注释。
        
        
 ###            页面跳转：
        th:action：用于设置表单提交的目标地址。
        th:href：用于设置超链接的跳转地址。

###     日期和时间格式化：
        #dates：用于对日期和时间进行格式化和处理。

 ###    数学计算：
        #numbers：用于执行数学运算，如格式化数字、比较大小等。

###     集合操作：
        #lists、#sets、#arrays：用于对集合进行操作，如过滤、排序等。

 ###    条件判断：
        th:if, th:unless, th:switch, th:case, th:case-default 等：用于条件判断和渲染。

  ###   表达式工具：
        #ctx、#session、#request 等：用于获取上下文信息，如上下文路径、会话信息等。

 ###    表单处理：
        th:object：用于表单数据绑定到后端对象。
        th:field：用于表单字段绑定到后端对象属性。

###     重复块：
        th:block：用于定义重复使用的 HTML 块。

 ###    安全处理：
        #aggregates：用于执行安全相关的聚合操作，如求和、求平均值等。

 ###    国际化处理：
        th:text、#{...}：用于国际化消息的显示。

 ###    自定义标签库：
        th:*、th:each、th:if 等：Thymeleaf 还支持使用自定义标签库，可以通过这些标签来扩展 Thymeleaf 的功能。


###  拼接简化
原：

```
th:onclick="'getOrder('+${i.id}+')'"
```

可以这样写：

```
th:onclick="|del(${user.id})|"
```