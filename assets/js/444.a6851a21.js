(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{772:function(t,s,a){"use strict";a.r(s);var r=a(25),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"发布事件-event-publish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布事件-event-publish"}},[t._v("#")]),t._v(' 发布事件 ("$EVENT.PUBLISH")')]),t._v(" "),s("p",[t._v("当消息被放入底层socket时触发规则。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("字段")])]),t._v(" "),s("th",[s("strong",[t._v("解释")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("protocol")]),t._v(" "),s("td",[t._v("协议标识，用于区分是哪个协议上报的消息")])]),t._v(" "),s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("消息唯一标识,客户端publish会生成唯一Id,当qos>0时候，Ack消息会携带此id，代表一次完成应答操作")])]),t._v(" "),s("tr",[s("td",[t._v("payload")]),t._v(" "),s("td",[t._v("MQTT 消息体")])]),t._v(" "),s("tr",[s("td",[t._v("messageId")]),t._v(" "),s("td",[t._v("MQTT 消息 ID")])]),t._v(" "),s("tr",[s("td",[t._v("topic")]),t._v(" "),s("td",[t._v("MQTT 主题")])]),t._v(" "),s("tr",[s("td",[t._v("qos")]),t._v(" "),s("td",[t._v("MQTT 消息的 QoS")])]),t._v(" "),s("tr",[s("td",[t._v("retain")]),t._v(" "),s("td",[t._v("MQTT 消息是否保持")])]),t._v(" "),s("tr",[s("td",[t._v("timestamp")]),t._v(" "),s("td",[t._v("事件触发时间 (单位：毫秒)")])]),t._v(" "),s("tr",[s("td",[t._v("clientId")]),t._v(" "),s("td",[t._v("客户端 ID")])]),t._v(" "),s("tr",[s("td",[t._v("clientIp")]),t._v(" "),s("td",[t._v("客户端的 IPAddress")])]),t._v(" "),s("tr",[s("td",[t._v("nodeIp")]),t._v(" "),s("td",[t._v("事件触发所在节点 IPAddress")])])])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-plsql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plsql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$EVENT.PUBLISH"')]),t._v("\n")])])]),s("p",[t._v("输出")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MQTT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8ace2bbab65b4fb1a0afc7c77419e6b5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"payload"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"messageId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"topic"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"qos"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"retain"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1690599987495"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A1212313"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientIp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"183.136.225.31"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nodeIp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.12"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);