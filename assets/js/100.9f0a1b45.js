(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{510:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"外键约束行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外键约束行为"}},[t._v("#")]),t._v(" 外键约束行为")]),t._v(" "),a("h2",{attrs:{id:"cascade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cascade"}},[t._v("#")]),t._v(" CASCADE")]),t._v(" "),a("blockquote",[a("p",[t._v("当你希望在删除或更新主表记录时，自动删除或更新所有关联的子表记录。适用于主从关系非常紧密的场景，例如订单和订单项。")])]),t._v(" "),a("p",[t._v("示例：删除一个客户时，也删除该客户的所有订单。")]),t._v(" "),a("h2",{attrs:{id:"set-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-null"}},[t._v("#")]),t._v(" SET NULL")]),t._v(" "),a("blockquote",[a("p",[t._v("当你希望在删除或更新主表记录时，只将子表中的外键列设置为NULL，而不删除子表记录。适用于子表记录可以存在但没有关联的场景。")])]),t._v(" "),a("p",[t._v("示例：删除一个部门时，将该部门的所有员工的department_id设为NULL，但不删除员工记录。")]),t._v(" "),a("h2",{attrs:{id:"no-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-action"}},[t._v("#")]),t._v(" NO ACTION")]),t._v(" "),a("blockquote",[a("p",[t._v("当你希望严格维护数据的完整性，不允许删除或更新主表记录，除非所有相关的子表记录已经被处理。适用于需要手动管理数据的场景。")])]),t._v(" "),a("p",[t._v("示例：不允许删除有订单的客户，除非这些订单被转移或处理。")]),t._v(" "),a("h2",{attrs:{id:"restrict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restrict"}},[t._v("#")]),t._v(" RESTRICT")]),t._v(" "),a("p",[t._v("类似于NO ACTION，但会立即检查外键约束，而不是推迟到事务提交时。")])])}),[],!1,null,null,null);a.default=e.exports}}]);