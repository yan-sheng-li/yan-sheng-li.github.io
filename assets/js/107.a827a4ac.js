(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{510:function(s,t,a){"use strict";a.r(t);var r=a(0),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"连接数据库认证出错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接数据库认证出错"}},[s._v("#")]),s._v(" 连接数据库认证出错")]),s._v(" "),t("h2",{attrs:{id:"报错提示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#报错提示"}},[s._v("#")]),s._v(" 报错提示")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client\n")])])]),t("h2",{attrs:{id:"原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因")]),s._v(" "),t("p",[s._v("MySQL 客户端与服务器之间在认证协议方面出现了不兼容的情况")]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("blockquote",[t("p",[s._v("修改认证方式（常用方法）")])]),s._v(" "),t("p",[s._v("如果发现认证插件是较新的、可能与客户端不兼容的类型（比如 caching_sha2_password ，有些较老版本的客户端可能不支持），可以将其修改为兼容性更好的 mysql_native_password 认证方式。执行以下 SQL 语句来修改认证方式（同样假设用户名为 your_username）：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your_username'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" mysql_native_password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[你的用户密码]'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nFLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("第一条语句将指定用户的认证方式修改为 mysql_native_password 并设置对应的密码（确保 [你的用户密码] 填写正确），第二条语句是刷新权限，使修改生效。之后再尝试运行你的 node app.js 看看能否正常连接数据库。")])])}),[],!1,null,null,null);t.default=e.exports}}]);