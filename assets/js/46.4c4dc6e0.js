(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{458:function(e,s,a){"use strict";a.r(s);var t=a(0),c=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"c标签库语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c标签库语法"}},[e._v("#")]),e._v(" C标签库语法")]),e._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),s("blockquote",[s("p",[e._v("JSTL C 标签库简化了 JSP 页面中的控制逻辑，使得开发者可以更加高效地编写和维护页面。通过使用条件判断、循环、数据设置与输出等功能，可以减少 Java 代码的嵌入，提高代码的可读性和可维护性。")])]),e._v(" "),s("h2",{attrs:{id:"引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入"}},[e._v("#")]),e._v(" 引入")]),e._v(" "),s("p",[e._v("要使用 C 标签，首先需要在 JSP 页面中添加以下代码来引入 JSTL 的核心标签库：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>\n')])])]),s("ul",[s("li",[s("strong",[e._v("uri")]),e._v("：是 JSTL 核心标签库的标准 URI，表示你引入的是 JSTL 的核心标签库。")]),e._v(" "),s("li",[s("strong",[e._v("prefix")]),e._v("：为标签库指定的前缀，在 JSP 页面中使用时需要使用这个前缀来引用标签。例如，"),s("code",[e._v("<c:if>")]),e._v(" 中的 "),s("code",[e._v("c")]),e._v(" 就是你在这里指定的前缀。")])]),e._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),s("p",[e._v("假设你引入了 JSTL 核心标签库，你就可以在 JSP 页面中使用 "),s("code",[e._v("<c:if>")]),e._v(", "),s("code",[e._v("<c:forEach>")]),e._v(", "),s("code",[e._v("<c:set>")]),e._v(" 等标签：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>\n<html>\n<body>\n    <c:if test="${user != null}">\n        <p>欢迎, ${user.username}!</p>\n    </c:if>\n    \n    <c:set var="message" value="Hello, JSP!" />\n    <p>${message}</p>\n\n    <c:forEach var="item" items="${items}">\n        <li>${item}</li>\n    </c:forEach>\n</body>\n</html>\n')])])]),s("h3",{attrs:{id:"解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解释"}},[e._v("#")]),e._v(" 解释")]),e._v(" "),s("ol",[s("li",[s("strong",[s("code",[e._v('<%@ taglib uri="..." prefix="c" %>')])]),e._v("：引入 JSTL 核心库，并为其指定了 "),s("code",[e._v("c")]),e._v(" 前缀。")]),e._v(" "),s("li",[e._v("使用 "),s("strong",[s("code",[e._v("<c:if>")])]),e._v(" 标签来判断 "),s("code",[e._v("user")]),e._v(" 是否为 "),s("code",[e._v("null")]),e._v("，并输出欢迎信息。")]),e._v(" "),s("li",[e._v("使用 "),s("strong",[s("code",[e._v("<c:set>")])]),e._v(" 标签来设置一个变量 "),s("code",[e._v("message")]),e._v("。")]),e._v(" "),s("li",[e._v("使用 "),s("strong",[s("code",[e._v("<c:forEach>")])]),e._v(" 标签来遍历 "),s("code",[e._v("items")]),e._v(" 集合并输出其中的每个 "),s("code",[e._v("item")]),e._v("。")])]),e._v(" "),s("h2",{attrs:{id:"基础用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[e._v("#")]),e._v(" 基础用法")]),e._v(" "),s("h3",{attrs:{id:"_1-c-if"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-c-if"}},[e._v("#")]),e._v(" 1. "),s("strong",[s("code",[e._v("<c:if>")])])]),e._v(" "),s("p",[e._v("用于条件判断，根据 "),s("code",[e._v("test")]),e._v(" 属性的值决定是否执行标签内部的内容。")]),e._v(" "),s("p",[s("strong",[e._v("语法")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:if test="${condition}">\n    \x3c!-- 如果条件成立，执行这里的内容 --\x3e\n</c:if>\n')])])]),s("p",[s("strong",[e._v("示例")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:if test="${user != null}">\n    <p>欢迎, ${user.username}!</p>\n</c:if>\n')])])]),s("h3",{attrs:{id:"_2-c-choose-和-c-when-c-otherwise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-c-choose-和-c-when-c-otherwise"}},[e._v("#")]),e._v(" 2. "),s("strong",[s("code",[e._v("<c:choose>")]),e._v(" 和 "),s("code",[e._v("<c:when>")]),e._v(" / "),s("code",[e._v("<c:otherwise>")])])]),e._v(" "),s("p",[e._v("用于多个条件判断，类似于 "),s("code",[e._v("switch-case")]),e._v(" 语法。")]),e._v(" "),s("p",[s("strong",[e._v("语法")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:choose>\n    <c:when test="${condition1}">\n        \x3c!-- 条件1成立时执行 --\x3e\n    </c:when>\n    <c:when test="${condition2}">\n        \x3c!-- 条件2成立时执行 --\x3e\n    </c:when>\n    <c:otherwise>\n        \x3c!-- 所有条件都不成立时执行 --\x3e\n    </c:otherwise>\n</c:choose>\n')])])]),s("p",[s("strong",[e._v("示例")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<c:choose>\n    <c:when test=\"${user.role == 'admin'}\">\n        <p>欢迎管理员!</p>\n    </c:when>\n    <c:when test=\"${user.role == 'user'}\">\n        <p>欢迎用户!</p>\n    </c:when>\n    <c:otherwise>\n        <p>请登录!</p>\n    </c:otherwise>\n</c:choose>\n")])])]),s("h3",{attrs:{id:"_3-c-foreach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-c-foreach"}},[e._v("#")]),e._v(" 3. "),s("strong",[s("code",[e._v("<c:forEach>")])])]),e._v(" "),s("p",[e._v("用于遍历集合、数组等。")]),e._v(" "),s("p",[s("strong",[e._v("语法")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:forEach var="item" items="${collection}">\n    \x3c!-- 使用 item 访问每一个元素 --\x3e\n</c:forEach>\n')])])]),s("p",[s("strong",[e._v("示例")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<ul>\n    <c:forEach var="product" items="${products}">\n        <li>${product.name} - ${product.price}</li>\n    </c:forEach>\n</ul>\n')])])]),s("h3",{attrs:{id:"_4-c-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-c-set"}},[e._v("#")]),e._v(" 4. "),s("strong",[s("code",[e._v("<c:set>")])])]),e._v(" "),s("p",[e._v("用于设置一个变量的值，可以存储在页面、请求、会话或应用作用域中。")]),e._v(" "),s("p",[s("strong",[e._v("语法")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:set var="variableName" value="${value}" />\n')])])]),s("ul",[s("li",[s("strong",[e._v("作用域")]),e._v("：可以通过 "),s("code",[e._v("scope")]),e._v(" 属性指定作用域（"),s("code",[e._v("page")]),e._v(", "),s("code",[e._v("request")]),e._v(", "),s("code",[e._v("session")]),e._v(", "),s("code",[e._v("application")]),e._v("）。")])]),e._v(" "),s("p",[s("strong",[e._v("示例")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:set var="greeting" value="欢迎访问我的网站!" />\n<p>${greeting}</p>\n')])])]),s("h3",{attrs:{id:"_5-c-out"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-c-out"}},[e._v("#")]),e._v(" 5. "),s("strong",[s("code",[e._v("<c:out>")])])]),e._v(" "),s("p",[e._v("用于输出内容，并自动转义 HTML 中的特殊字符，防止 XSS 攻击。")]),e._v(" "),s("p",[s("strong",[e._v("语法")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:out value="${value}" />\n')])])]),s("p",[s("strong",[e._v("示例")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<p>您的用户名是：<c:out value="${username}" /></p>\n')])])]),s("h3",{attrs:{id:"_6-c-import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-c-import"}},[e._v("#")]),e._v(" 6. "),s("strong",[s("code",[e._v("<c:import>")])])]),e._v(" "),s("p",[e._v("用于从其他 URL 或文件动态导入内容。")]),e._v(" "),s("p",[s("strong",[e._v("语法")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:import url="url_or_path" />\n')])])]),s("p",[s("strong",[e._v("示例")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:import url="header.jsp" />\n')])])]),s("h3",{attrs:{id:"_7-c-remove"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-c-remove"}},[e._v("#")]),e._v(" 7. "),s("strong",[s("code",[e._v("<c:remove>")])])]),e._v(" "),s("p",[e._v("用于移除作用域中的变量。")]),e._v(" "),s("p",[s("strong",[e._v("语法")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:remove var="variableName" scope="scopeName" />\n')])])]),s("ul",[s("li",[s("code",[e._v("scope")]),e._v(" 可选值："),s("code",[e._v("page")]),e._v(", "),s("code",[e._v("request")]),e._v(", "),s("code",[e._v("session")]),e._v(", "),s("code",[e._v("application")]),e._v("。")])]),e._v(" "),s("p",[s("strong",[e._v("示例")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:remove var="user" scope="session" />\n')])])]),s("h3",{attrs:{id:"_8-c-redirect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-c-redirect"}},[e._v("#")]),e._v(" 8. "),s("strong",[s("code",[e._v("<c:redirect>")])])]),e._v(" "),s("p",[e._v("用于进行页面重定向。")]),e._v(" "),s("p",[s("strong",[e._v("语法")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:redirect url="url" />\n')])])]),s("p",[s("strong",[e._v("示例")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:redirect url="login.jsp" />\n')])])]),s("h3",{attrs:{id:"_9-c-catch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-c-catch"}},[e._v("#")]),e._v(" 9. "),s("strong",[s("code",[e._v("<c:catch>")])])]),e._v(" "),s("p",[e._v("用于捕获和处理错误。通常用于防止程序出错时显示异常信息。")]),e._v(" "),s("p",[s("strong",[e._v("语法")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:catch var="error">\n    \x3c!-- 可能引发异常的代码 --\x3e\n</c:catch>\n')])])]),s("p",[s("strong",[e._v("示例")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:catch var="error">\n    <c:out value="${some.undefinedProperty}" />\n</c:catch>\n\n<c:if test="${error != null}">\n    <p>发生错误: ${error}</p>\n</c:if>\n')])])]),s("h3",{attrs:{id:"_10-c-fortokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-c-fortokens"}},[e._v("#")]),e._v(" 10. "),s("strong",[s("code",[e._v("<c:forTokens>")])])]),e._v(" "),s("p",[e._v("用于对一个字符串进行分隔并遍历。该标签适合用于处理字符串，按分隔符拆分后进行循环。")]),e._v(" "),s("p",[s("strong",[e._v("语法")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:forTokens items="${value}" delims="," var="token">\n    \x3c!-- 遍历后的单个分隔项 --\x3e\n</c:forTokens>\n')])])]),s("p",[s("strong",[e._v("示例")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<c:forTokens items="${tags}" delims="," var="tag">\n    <span>${tag}</span>\n</c:forTokens>\n')])])]),s("hr"),e._v(" "),s("h3",{attrs:{id:"_11-c-if-c-when-的条件表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-c-if-c-when-的条件表达式"}},[e._v("#")]),e._v(" 11. "),s("strong",[s("code",[e._v("<c:if>")]),e._v(" / "),s("code",[e._v("<c:when>")]),e._v(" 的条件表达式")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("test")]),e._v(" 属性用于指定条件表达式，它支持常用的比较运算符、逻辑运算符以及三元运算符。")])]),e._v(" "),s("h4",{attrs:{id:"比较运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符"}},[e._v("#")]),e._v(" 比较运算符：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("==")]),e._v("：等于")]),e._v(" "),s("li",[s("code",[e._v("!=")]),e._v("：不等于")]),e._v(" "),s("li",[s("code",[e._v("<")]),e._v("：小于")]),e._v(" "),s("li",[s("code",[e._v(">")]),e._v("：大于")]),e._v(" "),s("li",[s("code",[e._v("<=")]),e._v("：小于等于")]),e._v(" "),s("li",[s("code",[e._v(">=")]),e._v("：大于等于")])]),e._v(" "),s("h4",{attrs:{id:"逻辑运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[e._v("#")]),e._v(" 逻辑运算符：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("&&")]),e._v("：与")]),e._v(" "),s("li",[s("code",[e._v("||")]),e._v("：或")]),e._v(" "),s("li",[s("code",[e._v("!")]),e._v("：非")])])])}),[],!1,null,null,null);s.default=c.exports}}]);