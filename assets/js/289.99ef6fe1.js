(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{532:function(t,s,a){t.exports=a.p+"assets/img/mysql-new.1d57b0b5.png"},984:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"保存至mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保存至mysql"}},[t._v("#")]),t._v(" 保存至mysql")]),t._v(" "),s("p",[s("img",{attrs:{src:a(532),alt:"img.png"}})]),t._v(" "),s("h2",{attrs:{id:"sql脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql脚本"}},[t._v("#")]),t._v(" Sql脚本")]),t._v(" "),s("p",[t._v("fluxmq新增mysql存储的时候默认提供插入的sql脚本,只需要根据对应的"),s("RouterLink",{attrs:{to:"/2_0_16/views/gzyq/rule/EVENT.html"}},[t._v("数据类型")]),t._v("数据格式，选择对应的占位符插入即可，")],1),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v("\n  fluxmq "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" qos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clientId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cretetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${id}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${topic}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${qos}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${json(payload)}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${clientId}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${timestamp}'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"批量设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批量设置"}},[t._v("#")]),t._v(" 批量设置")]),t._v(" "),s("p",[t._v("fluxmq提供批量插入数据库的操作，需要数据库开启批处理，默认提供2个参数设置")]),t._v(" "),s("h3",{attrs:{id:"批量大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批量大小"}},[t._v("#")]),t._v(" 批量大小")]),t._v(" "),s("p",[t._v("批量数据缓存到指定大小后，会批量保存到数据库中")]),t._v(" "),s("h3",{attrs:{id:"批量间隔"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批量间隔"}},[t._v("#")]),t._v(" 批量间隔")]),t._v(" "),s("p",[t._v("批量数据缓存到达指定间隔时间后，会批量缓存到数据库中，默认设置单位"),s("code",[t._v("毫秒")])])])}),[],!1,null,null,null);s.default=r.exports}}]);