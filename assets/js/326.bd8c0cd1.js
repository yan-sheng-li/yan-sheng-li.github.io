(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{736:function(s,t,e){"use strict";e.r(t);var a=e(0),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"自定义访问域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义访问域名"}},[s._v("#")]),s._v(" 自定义访问域名")]),s._v(" "),t("blockquote",[t("p",[s._v("将 CNAME 文件直接放到 .vuepress/public 目录下。VuePress 会将 .vuepress/public 目录中的文件直接复制到构建输出目录 docs/.vuepress/dist 中。")])]),s._v(" "),t("p",[s._v("以下是具体步骤：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("创建 CNAME 文件：在 .vuepress/public 目录下创建一个 CNAME 文件，并在其中写上你的自定义域名。")])]),s._v(" "),t("li",[t("p",[s._v("确保 CNAME 文件被添加到版本控制中：使用以下命令将 CNAME 文件添加到 Git 版本控制中：")])])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" .vuepress/public/CNAME\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Add CNAME file for custom domain"')]),s._v("\n")])])]),t("p",[s._v("更新你的 GitHub Actions 配置：你现有的 GitHub Actions 配置可以保持不变，因为 VuePress 会自动将 .vuepress/public 目录中的文件复制到构建输出目录。")])])}),[],!1,null,null,null);t.default=r.exports}}]);