(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{514:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"数据库授权指定用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库授权指定用户"}},[s._v("#")]),s._v(" 数据库授权指定用户")]),s._v(" "),a("p",[s._v("在 MySQL 中，创建数据库并指定某个用户可以访问该数据库的过程包括两部分：创建数据库和授权给指定用户。下面是详细的步骤：")]),s._v(" "),a("h3",{attrs:{id:"_1-创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建数据库"}},[s._v("#")]),s._v(" 1. 创建数据库")]),s._v(" "),a("p",[s._v("首先，你需要创建一个数据库。可以使用 "),a("code",[s._v("CREATE DATABASE")]),s._v(" 语句来创建数据库：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" my_database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-创建用户-如果还没有创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建用户-如果还没有创建"}},[s._v("#")]),s._v(" 2. 创建用户（如果还没有创建）")]),s._v(" "),a("p",[s._v("如果该用户尚未创建，可以使用 "),a("code",[s._v("CREATE USER")]),s._v(" 语句创建一个新用户：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'hostname'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v("'username'")]),s._v(" 是你要创建的用户名。")]),s._v(" "),a("li",[a("code",[s._v("'hostname'")]),s._v(" 是该用户连接数据库的主机，可以使用 "),a("code",[s._v("localhost")]),s._v("（表示只能从本地连接），也可以使用 "),a("code",[s._v("%")]),s._v("（表示可以从任意主机连接）。")]),s._v(" "),a("li",[a("code",[s._v("'password'")]),s._v(" 是该用户的密码。")])]),s._v(" "),a("p",[s._v("例如，创建一个名为 "),a("code",[s._v("myuser")]),s._v(" 的用户，并设置密码为 "),a("code",[s._v("mypassword")]),s._v("，且可以从任意主机连接：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myuser'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mypassword'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_3-授权给用户访问数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-授权给用户访问数据库"}},[s._v("#")]),s._v(" 3. 授权给用户访问数据库")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("GRANT")]),s._v(" 语句将权限授予指定的用户。要授权用户访问某个数据库并允许他们执行各种操作（例如查询、插入、更新等），可以使用以下语法：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" my_database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'hostname'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v("ALL PRIVILEGES")]),s._v(" 表示授予所有权限。你也可以指定某些权限，比如 "),a("code",[s._v("SELECT")]),s._v(", "),a("code",[s._v("INSERT")]),s._v(", "),a("code",[s._v("UPDATE")]),s._v(" 等。")]),s._v(" "),a("li",[a("code",[s._v("my_database.*")]),s._v(" 表示对数据库 "),a("code",[s._v("my_database")]),s._v(" 中的所有表授予权限。如果你只想授予某些表的权限，可以使用 "),a("code",[s._v("my_database.table_name")]),s._v("。")])]),s._v(" "),a("p",[s._v("例如，授权用户 "),a("code",[s._v("myuser")]),s._v(" 对数据库 "),a("code",[s._v("my_database")]),s._v(" 的所有权限：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" my_database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myuser'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_4-刷新权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-刷新权限"}},[s._v("#")]),s._v(" 4. 刷新权限")]),s._v(" "),a("p",[s._v("执行完 "),a("code",[s._v("GRANT")]),s._v(" 后，需要使用 "),a("code",[s._v("FLUSH PRIVILEGES")]),s._v(" 刷新权限，以确保权限生效：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("FLUSH "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_5-确认用户权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-确认用户权限"}},[s._v("#")]),s._v(" 5. 确认用户权限")]),s._v(" "),a("p",[s._v("你可以使用 "),a("code",[s._v("SHOW GRANTS")]),s._v(" 查看某个用户的权限：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" GRANTS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myuser'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_6-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-测试"}},[s._v("#")]),s._v(" 6. 测试")]),s._v(" "),a("p",[s._v("为了确保用户能够成功连接并访问数据库，可以使用新用户的账户进行连接：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" myuser "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" localhost my_database\n")])])]),a("p",[s._v("系统会提示你输入密码，如果输入正确，你应该能够连接并访问该数据库。")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"示例-完整操作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-完整操作流程"}},[s._v("#")]),s._v(" 示例：完整操作流程")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 1. 创建数据库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" my_database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 2. 创建用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myuser'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mypassword'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 3. 授予权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" my_database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myuser'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 4. 刷新权限")]),s._v("\nFLUSH "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("这样，用户 "),a("code",[s._v("myuser")]),s._v(" 就可以从任意主机连接到 MySQL 数据库，并访问 "),a("code",[s._v("my_database")]),s._v(" 数据库了。")])])}),[],!1,null,null,null);a.default=r.exports}}]);