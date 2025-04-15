(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{576:function(t,a,e){"use strict";e.r(a);var s=e(0),c=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"📚图书借阅管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#📚图书借阅管理"}},[t._v("#")]),t._v(" 📚图书借阅管理*")]),t._v(" "),a("MyGlobalComponent"),t._v(" "),a("h2",{attrs:{id:"概况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概况"}},[t._v("#")]),t._v(" 概况")]),t._v(" "),a("blockquote",[a("p",[t._v("实现简易版图书借阅管理系统，学生（读者）在系统里可以检索图书，借阅图书，归还图书，修改密码，查看个人借阅信息等功能；")]),t._v(" "),a("p",[t._v("管理员有书籍信息，学生（读者）信息，借阅信息维护等功能")])]),t._v(" "),a("h2",{attrs:{id:"开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[t._v("#")]),t._v(" 开发环境")]),t._v(" "),a("p",[a("code",[t._v("开发语言")]),t._v("：Java   (jdk版本12+)")]),t._v(" "),a("p",[a("code",[t._v("数据库")]),t._v("：MySQL  (版本8.0+)")]),t._v(" "),a("p",[a("code",[t._v("工具")]),t._v("：JDBC")]),t._v(" "),a("p",[a("code",[t._v("软件")]),t._v("：IDEA（推荐），Navicat")]),t._v(" "),a("p",[a("code",[t._v("项目构建")]),t._v("：maven")]),t._v(" "),a("h2",{attrs:{id:"程序效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序效果"}},[t._v("#")]),t._v(" 程序效果")]),t._v(" "),a("blockquote",[a("p",[t._v("1.登录验证：分读者与管理员两个身份，输入账号密码，校验通过即可进入系统，否则弹窗提示操作结果。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.qiniu.liyansheng.top/img/df79e8358955e6e7e65bcc17728d1e52.jpeg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("2.首页：读者进入系统后，首先看到的是首页，可在此处设置公告，书目推荐等信息。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.qiniu.liyansheng.top/img/eb10ac052648fc44e1259c69ad9520d2.jpeg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("3.检索：读者通过输入要查书本的ISBN或者书名即可查询")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.qiniu.liyansheng.top/img/67b19112ed7a3d7e7704fa4e6e5f4bd5.jpeg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("4.借还书籍：在表单输入要借图书的ISBN，点确认即可，会先确认该书是否还有库存，如果无，不能借阅成功，反之可以；表格显示的是当前登录用户的借阅信息，鼠标指针选中一行，点击右下角的还书，即可归还书籍。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.qiniu.liyansheng.top/img/7b0fa8e1c076d8a8b51495b2c28c1a90.jpeg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("5.个人信息：读者在此可以查看自己的个人信息，修改密码。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.qiniu.liyansheng.top/img/f402f2d2d1c78f2aeee97f5bd3be5415.jpeg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("6.学生管理：管理员可以对学生（读者）信息进行多条件查询，新增，修改，删除。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.qiniu.liyansheng.top/img/2308bde760e9896d4470f90c10c5d5ac.jpeg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("7.书籍管理：管理员可以对书籍信息进行多条件查询，新增，修改，删除。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.qiniu.liyansheng.top/img/8c4ba3fd3af2c2f39f05f109d6a64810.jpeg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("8.借阅一览：查看系统内部的借阅信息，可选中行删除记录。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.qiniu.liyansheng.top/img/9076b9a735a12df89f55226523495467.jpeg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("9.数据汇总：重要指标数据汇总，如读者数量，书籍种类数量，库存总数等，可根据实际来调整。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.qiniu.liyansheng.top/img/fd188a7a13c16dd9fe86dc91ee2cb1d1.jpeg",alt:""}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"源码获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码获取"}},[t._v("#")]),t._v(" 源码获取")]),t._v(" "),a("gzh"),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.qiniu.liyansheng.top/img/20240527005856.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"配套报告"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配套报告"}},[t._v("#")]),t._v(" 配套报告")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.qiniu.liyansheng.top/img/%E6%8A%A5%E5%91%8A%E9%A2%84%E8%A7%88.png",alt:""}})])]),t._v(" "),a("PaymentButton",{attrs:{productId:141,buttonText:"点我获取-报告"}})],1)}),[],!1,null,null,null);a.default=c.exports}}]);