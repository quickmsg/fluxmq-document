(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{1099:function(t,s,a){"use strict";a.r(s);var r=a(25),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"连接断开事件-event-close"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接断开事件-event-close"}},[t._v("#")]),t._v(' 连接断开事件 ("$EVENT.CLOSE")')]),t._v(" "),s("p",[t._v("当服务端关闭连接时触发规则。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("字段")])]),t._v(" "),s("th",[s("strong",[t._v("解释")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("protocol")]),t._v(" "),s("td",[t._v("协议标识，用于区分是哪个协议上报的消息")])]),t._v(" "),s("tr",[s("td",[t._v("messageId")]),t._v(" "),s("td",[t._v("MQTT 消息 ID")])]),t._v(" "),s("tr",[s("td",[t._v("reason")]),t._v(" "),s("td",[t._v("连接断开原因描述")])]),t._v(" "),s("tr",[s("td",[t._v("clientId")]),t._v(" "),s("td",[t._v("客户端 ID")])]),t._v(" "),s("tr",[s("td",[t._v("timestamp")]),t._v(" "),s("td",[t._v("事件触发时间")])]),t._v(" "),s("tr",[s("td",[t._v("clientIp")]),t._v(" "),s("td",[t._v("客户端的IP地址")])]),t._v(" "),s("tr",[s("td",[t._v("nodeIp")]),t._v(" "),s("td",[t._v("事件触发所在节点IP地址")])])])]),t._v(" "),s("p",[s("code",[t._v("reason")]),t._v("连接断开原因：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("字段")])]),t._v(" "),s("th",[s("strong",[t._v("解释")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("normal")]),t._v(" "),s("td",[t._v("客户端关闭")])]),t._v(" "),s("tr",[s("td",[t._v("kicked")]),t._v(" "),s("td",[t._v("服务端主动关闭")])]),t._v(" "),s("tr",[s("td",[t._v("timeout")]),t._v(" "),s("td",[t._v("客户端心跳超时关闭")])]),t._v(" "),s("tr",[s("td",[t._v("not_authorized")]),t._v(" "),s("td",[t._v("认证失败关闭")])]),t._v(" "),s("tr",[s("td",[t._v("other_kicked")]),t._v(" "),s("td",[t._v("集群互踢")])]),t._v(" "),s("tr",[s("td",[t._v("disconnect")]),t._v(" "),s("td",[t._v("客户端主动关闭")])]),t._v(" "),s("tr",[s("td",[t._v("receive_maximum_exceeded")]),t._v(" "),s("td",[t._v("qos2窗口满连接关闭")])])])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-plsql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plsql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$EVENT.CLOSE"')]),t._v("\n")])])]),s("p",[t._v("输出")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MQTT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"messageId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reason"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1690599987495"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A1212313"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientIp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"183.136.225.31"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nodeIp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);