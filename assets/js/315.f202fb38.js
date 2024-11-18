(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{1058:function(t,_,v){"use strict";v.r(_);var s=v(25),a=Object(s.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"固定密码认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#固定密码认证"}},[t._v("#")]),t._v(" 固定密码认证")]),t._v(" "),_("blockquote",[_("p",[t._v("固定密码认证是指所有客户端使用相同的密码进行认证，这种方式适用于客户端数量较少的场景，例如测试环境。\n这种方式配置无法检验具体的客户端ID，生产环境慎重使用。")])]),t._v(" "),_("p",[_("img",{attrs:{src:v(526),alt:"img_1.png"}})]),t._v(" "),_("p",[t._v("支持设置固定密码，以及盐用户对设备连接进行鉴权")]),t._v(" "),_("h2",{attrs:{id:"加密"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#加密"}},[t._v("#")]),t._v(" 加密")]),t._v(" "),_("h3",{attrs:{id:"加密算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#加密算法"}},[t._v("#")]),t._v(" 加密算法")]),t._v(" "),_("blockquote",[_("p",[t._v("加密后的"),_("code",[t._v("password")]),t._v("不区分大小写")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("加密方式")])]),t._v(" "),_("th",[_("strong",[t._v("释义")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("plain")]),t._v(" "),_("td",[t._v("明文")])]),t._v(" "),_("tr",[_("td",[t._v("md5")]),t._v(" "),_("td",[t._v("md5加密")])]),t._v(" "),_("tr",[_("td",[t._v("sha1")]),t._v(" "),_("td",[t._v("sha1加密")])]),t._v(" "),_("tr",[_("td",[t._v("sha256")]),t._v(" "),_("td",[t._v("sha256加密")])]),t._v(" "),_("tr",[_("td",[t._v("sha512")]),t._v(" "),_("td",[t._v("sha512加密")])])])]),t._v(" "),_("h3",{attrs:{id:"盐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#盐"}},[t._v("#")]),t._v(" 盐")]),t._v(" "),_("blockquote",[_("p",[t._v("目前支持三种加盐策略")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("加盐策略")])]),t._v(" "),_("th",[_("strong",[t._v("释义")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("disable")]),t._v(" "),_("td",[t._v("不加盐")])]),t._v(" "),_("tr",[_("td",[t._v("prefix")]),t._v(" "),_("td",[_("code",[t._v("salt")]),t._v("+"),_("code",[t._v("password")])])]),t._v(" "),_("tr",[_("td",[t._v("suffix")]),t._v(" "),_("td",[_("code",[t._v("password")]),t._v(" +"),_("code",[t._v("salt")])])])])]),t._v(" "),_("h2",{attrs:{id:"认证规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#认证规则"}},[t._v("#")]),t._v(" 认证规则")]),t._v(" "),_("p",[t._v("现在新增认证管理器支持正则匹配clientId,定向路由认证管理器,可以操作clientId、username,具体语法如下：")]),t._v(" "),_("ul",[_("li",[t._v("客户端ID匹配正则 "),_("code",[t._v("Client{regex}")])]),t._v(" "),_("li",[t._v("用户名匹配正则  "),_("code",[t._v("User{regex}")])])]),t._v(" "),_("p",[t._v("如果不配置正则表达式，表示匹配所有，所有请求都将会走该认证管理器。")])])}),[],!1,null,null,null);_.default=a.exports},526:function(t,_,v){t.exports=v.p+"assets/img/fixed.6afd4227.png"}}]);