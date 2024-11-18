(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{1056:function(t,s,v){"use strict";v.r(s);var r=v(25),_=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据库认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库认证"}},[t._v("#")]),t._v(" 数据库认证")]),t._v(" "),s("blockquote",[s("p",[t._v("SQL认证是指客户端连接时，通过数据库进行认证，这种方式适用于客户端数量较多的场景，例如生产环境。")])]),t._v(" "),s("p",[s("img",{attrs:{src:v(525),alt:"img.png"}})]),t._v(" "),s("h2",{attrs:{id:"驱动选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#驱动选择"}},[t._v("#")]),t._v(" 驱动选择")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("驱动方式")])]),t._v(" "),s("th",[s("strong",[t._v("释义")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("com.mysql.cj.jdbc.Driver")]),t._v(" "),s("td",[t._v("mysql")])]),t._v(" "),s("tr",[s("td",[t._v("oracle.jdbc.OracleDriver")]),t._v(" "),s("td",[t._v("oracle")])]),t._v(" "),s("tr",[s("td",[t._v("com.microsoft.sqlserver.jdbc.SQLServerDriver")]),t._v(" "),s("td",[t._v("sqlserver")])]),t._v(" "),s("tr",[s("td",[t._v("org.postgresql.Driver")]),t._v(" "),s("td",[t._v("postgresql")])])])]),t._v(" "),s("h2",{attrs:{id:"sql查询语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql查询语句"}},[t._v("#")]),t._v(" sql查询语句")]),t._v(" "),s("blockquote",[s("p",[t._v("使用 ${认证实体变量名}去引用认证实体中的属性，例如：${username} 代表认证实体中的username属性。查询必须返回"),s("code",[t._v("password")]),t._v("字段、"),s("code",[t._v("salt")]),t._v("字段可选。如果没有返回"),s("code",[t._v("password")]),t._v("字段，则认证失败")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("salt "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" device "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${username}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("p",[t._v("查询支需要返回一条即可完成认证。")]),t._v(" "),s("h2",{attrs:{id:"加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密"}},[t._v("#")]),t._v(" 加密")]),t._v(" "),s("h3",{attrs:{id:"加密算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密算法"}},[t._v("#")]),t._v(" 加密算法")]),t._v(" "),s("blockquote",[s("p",[t._v("加密后的"),s("code",[t._v("password")]),t._v("不区分大小写")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("加密方式")])]),t._v(" "),s("th",[s("strong",[t._v("释义")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("plain")]),t._v(" "),s("td",[t._v("明文")])]),t._v(" "),s("tr",[s("td",[t._v("md5")]),t._v(" "),s("td",[t._v("md5加密")])]),t._v(" "),s("tr",[s("td",[t._v("sha1")]),t._v(" "),s("td",[t._v("sha1加密")])]),t._v(" "),s("tr",[s("td",[t._v("sha256")]),t._v(" "),s("td",[t._v("sha256加密")])]),t._v(" "),s("tr",[s("td",[t._v("sha512")]),t._v(" "),s("td",[t._v("sha512加密")])])])]),t._v(" "),s("h3",{attrs:{id:"盐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盐"}},[t._v("#")]),t._v(" 盐")]),t._v(" "),s("blockquote",[s("p",[t._v("目前支持三种加盐策略")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("加盐策略")])]),t._v(" "),s("th",[s("strong",[t._v("释义")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("disable")]),t._v(" "),s("td",[t._v("不加盐")])]),t._v(" "),s("tr",[s("td",[t._v("prefix")]),t._v(" "),s("td",[s("code",[t._v("salt")]),t._v("+"),s("code",[t._v("password")])])]),t._v(" "),s("tr",[s("td",[t._v("suffix")]),t._v(" "),s("td",[s("code",[t._v("password")]),t._v(" +"),s("code",[t._v("salt")])])])])]),t._v(" "),s("h2",{attrs:{id:"认证规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认证规则"}},[t._v("#")]),t._v(" 认证规则")]),t._v(" "),s("p",[t._v("现在新增认证管理器支持正则匹配clientId,定向路由认证管理器,可以操作clientId、username,具体语法如下：")]),t._v(" "),s("ul",[s("li",[t._v("客户端ID匹配正则 "),s("code",[t._v("Client{regex}")])]),t._v(" "),s("li",[t._v("用户名匹配正则  "),s("code",[t._v("User{regex}")])])]),t._v(" "),s("p",[t._v("如果不配置正则表达式，表示匹配所有，所有请求都将会走该认证管理器。")])])}),[],!1,null,null,null);s.default=_.exports},525:function(t,s,v){t.exports=v.p+"assets/img/img.bc1413a9.png"}}]);