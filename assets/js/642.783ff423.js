(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{1218:function(v,_,t){"use strict";t.r(_);var d=t(25),E=Object(d.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"sql-事件类型与字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sql-事件类型与字段"}},[v._v("#")]),v._v(" SQL 事件类型与字段")]),v._v(" "),_("p",[v._v("规则的 SQL 语句可以处理 MQTT事件 消息，或者是具有数据流入能力的数据桥接。"),_("br"),v._v("SQL 语句使用 FROM 来指定 MQTT事件，在 SELECT 和 WHERE 子句中可以引用相应的字段。 "),_("br"),v._v("数据源类型不同，可以使用的字段也不同。")]),v._v(" "),_("h2",{attrs:{id:"客户端事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#客户端事件"}},[v._v("#")]),v._v(" 客户端事件")]),v._v(" "),_("p",[v._v("规则的 SQL 语句可以处理事件(发布消息、客户端上下线、客户端订阅等)，FROM 子句后面跟事件主题。"),_("br"),v._v("事件主题以 $EVENT/ 开头，比如 $EVENT.PUBLISH,$EVENT.SUBSCRIBE 。")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[v._v("事件名称")])]),v._v(" "),_("th",[_("strong",[v._v("事件主题名")])]),v._v(" "),_("th",[_("strong",[v._v("释义")])])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("发布事件")]),v._v(" "),_("td",[v._v("$EVENT.PUBLISH")]),v._v(" "),_("td",[v._v("发布消息")])]),v._v(" "),_("tr",[_("td",[v._v("订阅事件")]),v._v(" "),_("td",[v._v("$EVENT.SUBSCRIBE")]),v._v(" "),_("td",[v._v("订阅成功消息")])]),v._v(" "),_("tr",[_("td",[v._v("取消订阅事件")]),v._v(" "),_("td",[v._v("$EVENT.UNSUBSCRIBE")]),v._v(" "),_("td",[v._v("取消订阅成功消息")])]),v._v(" "),_("tr",[_("td",[v._v("发布回复事件")]),v._v(" "),_("td",[v._v("$EVENT.ACK")]),v._v(" "),_("td",[v._v("消息接收成功并回复")])]),v._v(" "),_("tr",[_("td",[v._v("心跳事件")]),v._v(" "),_("td",[v._v("$EVENT.PING")]),v._v(" "),_("td",[v._v("连接保活心跳消息")])]),v._v(" "),_("tr",[_("td",[v._v("取消连接事件")]),v._v(" "),_("td",[v._v("$EVENT.DISCONNECT")]),v._v(" "),_("td",[v._v("客户端主动断开连接")])]),v._v(" "),_("tr",[_("td",[v._v("连接断开事件")]),v._v(" "),_("td",[v._v("$EVENT.CLOSE")]),v._v(" "),_("td",[v._v("服务端关闭连接")])]),v._v(" "),_("tr",[_("td",[v._v("建立连接事件")]),v._v(" "),_("td",[v._v("$EVENT.CONNECT")]),v._v(" "),_("td",[v._v("连接成功")])]),v._v(" "),_("tr",[_("td",[v._v("离线消息事件")]),v._v(" "),_("td",[v._v("$EVENT.OFFLINE")]),v._v(" "),_("td",[v._v("离线期间接收的消息")])]),v._v(" "),_("tr",[_("td",[v._v("丢弃消息事件")]),v._v(" "),_("td",[v._v("$EVENT.DROP")]),v._v(" "),_("td",[v._v("离线期间接收的消息")])]),v._v(" "),_("tr",[_("td",[v._v("投递消息事件")]),v._v(" "),_("td",[v._v("$EVENT.DELIVERED")]),v._v(" "),_("td",[v._v("离线期间接收的消息")])])])])])}),[],!1,null,null,null);_.default=E.exports}}]);