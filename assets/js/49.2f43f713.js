(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{461:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"全局过滤器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局过滤器"}},[t._v("#")]),t._v(" 全局过滤器")]),t._v(" "),s("blockquote",[s("p",[t._v("可配置过滤所有的路径，在此可作"),s("code",[t._v("鉴权")]),t._v(","),s("code",[t._v("异常处理")]),t._v("等")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Filter")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterChain")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterConfig")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRequest")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletResponse")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebFilter")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpSession")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@WebFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拦截所有请求路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoginFilter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Filter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterConfig")]),t._v(" filterConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化操作，可以在这里获取过滤器的初始化参数等")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRequest")]),t._v(" servletRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletResponse")]),t._v(" servletResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterChain")]),t._v(" filterChain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" servletRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" servletResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpSession")]),t._v(" session "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSession")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" requestURI "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequestURI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCharacterEncoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestURI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"login.jsp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" requestURI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"login"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" requestURI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                filterChain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("session"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户已登录，放行请求")]),t._v("\n                    filterChain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户未登录，重定向到登录页面")]),t._v("\n                    response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendRedirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"login.jsp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理异常，例如重定向到错误页面或者返回错误信息")]),t._v("\n            response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendRedirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/login"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 销毁资源，例如关闭数据库连接等（如果在过滤器中有相关资源的话）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);