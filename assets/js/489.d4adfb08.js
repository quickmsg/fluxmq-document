(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{878:function(t,s,a){"use strict";a.r(s);var r=a(25),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"建立连接事件-event-connect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立连接事件-event-connect"}},[t._v("#")]),t._v(' 建立连接事件 ("$EVENT.CONNECT")')]),t._v(" "),s("p",[t._v("当客户端连接成功时触发规则。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("字段")])]),t._v(" "),s("th",[s("strong",[t._v("解释")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("protocol")]),t._v(" "),s("td",[t._v("协议标识，用于区分是哪个协议上报的消息")])]),t._v(" "),s("tr",[s("td",[t._v("clientIp")]),t._v(" "),s("td",[t._v("客户端的 IPAddress")])]),t._v(" "),s("tr",[s("td",[t._v("nodeIp")]),t._v(" "),s("td",[t._v("事件触发所在节点 IPAddress")])]),t._v(" "),s("tr",[s("td",[t._v("version")]),t._v(" "),s("td",[t._v("使用的协议 版本")])]),t._v(" "),s("tr",[s("td",[t._v("keepalive")]),t._v(" "),s("td",[t._v("MQTT 保活间隔")])]),t._v(" "),s("tr",[s("td",[t._v("cleanSession")]),t._v(" "),s("td",[t._v("是否清空会话")])]),t._v(" "),s("tr",[s("td",[t._v("auth.username")]),t._v(" "),s("td",[t._v("客户端用户名")])]),t._v(" "),s("tr",[s("td",[t._v("auth.password")]),t._v(" "),s("td",[t._v("客户端密码")])]),t._v(" "),s("tr",[s("td",[t._v("will.isRetain")]),t._v(" "),s("td",[t._v("遗嘱消息是否保持")])]),t._v(" "),s("tr",[s("td",[t._v("will.willTopic")]),t._v(" "),s("td",[t._v("遗嘱消息主题")])]),t._v(" "),s("tr",[s("td",[t._v("will.willQos")]),t._v(" "),s("td",[t._v("遗嘱消息语义级别")])]),t._v(" "),s("tr",[s("td",[t._v("will.willMessage")]),t._v(" "),s("td",[t._v("遗嘱消息内容")])]),t._v(" "),s("tr",[s("td",[t._v("timestamp")]),t._v(" "),s("td",[t._v("事件触发时间 (单位：毫秒)")])]),t._v(" "),s("tr",[s("td",[t._v("clientId")]),t._v(" "),s("td",[t._v("客户端 ID")])])])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-plsql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plsql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$EVENT.CONNECT"')]),t._v("\n")])])]),s("p",[t._v("输出")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MQTT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientIp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.100"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nodeIp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MQTT_3_1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keepalive"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cleanSession"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"auth"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fluxmq"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fluxmq"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"will"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isRetain"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"willTopic"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"willTest"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"willQos"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"willMessage"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1690599987495"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A1212313"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);