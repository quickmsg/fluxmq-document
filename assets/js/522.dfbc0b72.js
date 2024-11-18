(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{963:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mqtt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt"}},[t._v("#")]),t._v(" MQTT")]),t._v(" "),s("blockquote",[s("p",[t._v("支持配置多个端口")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("mqtt启动的监听端口")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("wiretap")]),t._v(" "),s("td",[t._v("打印二进制日志，生产环境禁止使用")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("messageMaxSize")]),t._v(" "),s("td",[t._v("单个推送最大的负载字节数")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("proxy")]),t._v(" "),s("td",[t._v("proxy_protocol协议解析")]),t._v(" "),s("td",[t._v("默认不启用")])]),t._v(" "),s("tr",[s("td",[t._v("options")]),t._v(" "),s("td",[t._v("netty 的options配置")]),t._v(" "),s("td",[t._v("不推荐配置")])]),t._v(" "),s("tr",[s("td",[t._v("childOptions")]),t._v(" "),s("td",[t._v("netty 的child channel options配置")]),t._v(" "),s("td",[t._v("不推荐配置")])]),t._v(" "),s("tr",[s("td",[t._v("enableAuth")]),t._v(" "),s("td",[t._v("是否开启认证")]),t._v(" "),s("td",[t._v("默认开启")])]),t._v(" "),s("tr",[s("td",[t._v("enableAcl")]),t._v(" "),s("td",[t._v("是否开启ACL")]),t._v(" "),s("td",[t._v("默认开启")])]),t._v(" "),s("tr",[s("td",[t._v("enableBridge")]),t._v(" "),s("td",[t._v("是否开启数据桥接")]),t._v(" "),s("td",[t._v("默认开启")])]),t._v(" "),s("tr",[s("td",[t._v("maxSendWindowSize")]),t._v(" "),s("td",[t._v("单个连接发送确认消息窗口（qos1+qos2）")]),t._v(" "),s("td",[t._v("默认 100")])]),t._v(" "),s("tr",[s("td",[t._v("maxReceiveWindowSize")]),t._v(" "),s("td",[t._v("单个连接接收确认窗口（qos2）")]),t._v(" "),s("td",[t._v("默认 100")])]),t._v(" "),s("tr",[s("td",[t._v("maxConnectionPerSecond")]),t._v(" "),s("td",[t._v("连接速率")]),t._v(" "),s("td",[t._v("默认 1000/s")])]),t._v(" "),s("tr",[s("td",[t._v("sessionPersistence")]),t._v(" "),s("td",[t._v("开启session消息持久化，建议使用离线消息，")]),t._v(" "),s("td",[t._v("默认不开启")])]),t._v(" "),s("tr",[s("td",[t._v("maxSessionSize")]),t._v(" "),s("td",[t._v("前提开启sessionPersistence生效")]),t._v(" "),s("td",[t._v("默认100")])]),t._v(" "),s("tr",[s("td",[t._v("useWebsocket")]),t._v(" "),s("td",[t._v("开启mqtt over websocket")]),t._v(" "),s("td",[t._v("默认不开启")])]),t._v(" "),s("tr",[s("td",[t._v("path")]),t._v(" "),s("td",[t._v("开启mqtt over websocket前提下，设置websocket连接的path")]),t._v(" "),s("td",[t._v("默认 /mqtt")])]),t._v(" "),s("tr",[s("td",[t._v("ssl")]),t._v(" "),s("td",[t._v("证书配置")]),t._v(" "),s("td",[t._v("默认 空")])]),t._v(" "),s("tr",[s("td",[t._v("aclRefreshPeriod")]),t._v(" "),s("td",[t._v("acl加载ttl时间")]),t._v(" "),s("td",[t._v("默认 60(秒)")])])])]),t._v(" "),s("h2",{attrs:{id:"mqtt配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt配置"}},[t._v("#")]),t._v(" MQTT配置")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mqtt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1883")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mqtt端口号")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wiretap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 二进制日志")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("messageMaxSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4194304")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收消息的最大限制 默认4194304(4M)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否开启proxy协议")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启认证")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAcl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启ACL  ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启桥接（规则引擎） ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSendWindowSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  单个连接发送确认消息窗口（qos1+qos2）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxReceiveWindowSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个连接接收确认窗口（qos2）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxConnectionPerSecond")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接速率 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sessionPersistence")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启session消息持久化，建议使用离线消息")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSessionSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启session后 单个连接持久化最大消息数")]),t._v("\n")])])]),s("h2",{attrs:{id:"mqtts配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtts配置"}},[t._v("#")]),t._v(" MQTTS配置")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mqtt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1883")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mqtt端口号")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wiretap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 二进制日志")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("messageMaxSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4194304")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收消息的最大限制 默认4194304(4M)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否开启proxy协议")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启认证")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAcl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启ACL  ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启桥接（规则引擎） ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSendWindowSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  单个连接发送确认消息窗口（qos1+qos2）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxReceiveWindowSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个连接接收确认窗口（qos2）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxConnectionPerSecond")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接速率 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sessionPersistence")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启session消息持久化，建议使用离线消息")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSessionSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启session后 单个连接持久化最大消息数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ssl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("crt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq.pem "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#公钥")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq.key "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#私钥")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ca")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  fluxmq.ca "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ca证书")]),t._v("\n")])])]),s("h2",{attrs:{id:"mqtt-over-websocket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-over-websocket"}},[t._v("#")]),t._v(" MQTT over WEBSOCKET")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mqtt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1883")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mqtt端口号")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wiretap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 二进制日志")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("messageMaxSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4194304")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收消息的最大限制 默认4194304(4M)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否开启proxy协议")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启认证")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAcl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启ACL  ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启桥接（规则引擎）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSendWindowSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  单个连接发送确认消息窗口（qos1+qos2）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxReceiveWindowSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个连接接收确认窗口（qos2）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxConnectionPerSecond")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接速率")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sessionPersistence")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启session消息持久化，建议使用离线消息")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSessionSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启session后 单个连接持久化最大消息数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("useWebsocket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  \n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);