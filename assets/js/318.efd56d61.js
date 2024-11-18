(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{1090:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"离线存储mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离线存储mysql"}},[s._v("#")]),s._v(" 离线存储MYSQL")]),s._v(" "),t("p",[t("img",{attrs:{src:a(529),alt:"img.png"}})]),s._v(" "),t("h2",{attrs:{id:"sql设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql设置"}},[s._v("#")]),s._v(" sql设置")]),s._v(" "),t("h3",{attrs:{id:"保存sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保存sql"}},[s._v("#")]),s._v(" 保存sql")]),s._v(" "),t("p",[s._v("可以动态选择要插入的数据库表，以及字段的映射")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v("\n  fluxmq "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" topic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" qos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" payload"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" clientId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cretetime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${id}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${topic}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${qos}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${json(payload)}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${clientId}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${timestamp}'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"查询sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询sql"}},[s._v("#")]),s._v(" 查询sql")]),s._v(" "),t("p",[s._v("查询必须返回 "),t("code",[s._v("id")]),s._v(", "),t("code",[s._v("topic")]),s._v(", "),t("code",[s._v("qos")]),s._v(","),t("code",[s._v("payload")]),s._v("字段，字段名称不一致请使用别名。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n  id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  topic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  qos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  payload\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n  fluxmq\n")])])]),t("h3",{attrs:{id:"删除sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除sql"}},[s._v("#")]),s._v(" 删除sql")]),s._v(" "),t("p",[s._v("根据message的uid进行删除")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n  fluxmq\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v("\n  id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${id}'")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports},529:function(s,t,a){s.exports=a.p+"assets/img/offline-mysql.35a41cea.png"}}]);