(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1140:function(t,v,a){"use strict";a.r(v);var _=a(25),s=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"mqtt协议介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt协议介绍"}},[t._v("#")]),t._v(" MQTT协议介绍")]),t._v(" "),v("h2",{attrs:{id:"概览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),v("p",[t._v("MQTT是一个轻量的发布订阅模式消息传输协议，专门针对低带宽和不稳定网络环境的物联网应用设计。\nMQTT官网: "),v("a",{attrs:{href:"http://mqtt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mqtt.org(opens new window)"),v("OutboundLink")],1),t._v("\nMQTT V3.1.1协议规范: "),v("a",{attrs:{href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html(opens new window)"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),v("ol",[v("li",[t._v("开放消息协议，简单易实现")]),t._v(" "),v("li",[t._v("发布订阅模式，一对多消息发布")]),t._v(" "),v("li",[t._v("基于TCP/IP网络连接")]),t._v(" "),v("li",[t._v("1字节固定报头，2字节心跳报文，报文结构紧凑")]),t._v(" "),v("li",[t._v("消息QoS支持，可靠传输保证")])]),t._v(" "),v("h2",{attrs:{id:"应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),v("p",[t._v("MQTT协议广泛应用于物联网、移动互联网、智能硬件、车联网、电力能源等领域。")]),t._v(" "),v("ol",[v("li",[t._v("物联网M2M通信，物联网大数据采集")]),t._v(" "),v("li",[t._v("Android消息推送，WEB消息推送")]),t._v(" "),v("li",[t._v("移动即时消息，例如Facebook Messenger")]),t._v(" "),v("li",[t._v("智能硬件、智能家具、智能电器")]),t._v(" "),v("li",[t._v("车联网通信，电动车站桩采集")]),t._v(" "),v("li",[t._v("智慧城市、远程医疗、远程教育")]),t._v(" "),v("li",[t._v("电力、石油与能源等行业市场")])]),t._v(" "),v("h2",{attrs:{id:"mqtt基于主题-topic-消息路由"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt基于主题-topic-消息路由"}},[t._v("#")]),t._v(" MQTT基于主题(Topic)消息路由")]),t._v(" "),v("p",[t._v("MQTT协议基于主题(Topic)进行消息路由，主题(Topic)类似URL路径，例如:")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("chat/room/1 sensor/10/temperature sensor/+/temperature $SYS/broker/metrics/packets/received $SYS/broker/metrics/# \n")])])]),v("p",[t._v("主题(Topic)通过'/'分割层级，支持'+', '#'通配符:")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("'+': 表示通配一个层级，例如a/+，匹配a/x, a/y      '#': 表示通配多个层级，例如a/#，匹配a/x, a/b/c/d \n")])])]),v("p",[t._v("订阅者与发布者之间通过主题路由消息进行通信，例如采用mosquitto命令行发布订阅消息:")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("mosquitto_sub -t a/b/+ -q 1 mosquitto_pub -t a/b/c -m hello -q 1 \n")])])]),v("p",[t._v("订阅者可以订阅含通配符主题，但发布者不允许向含通配符主题发布消息。")]),t._v(" "),v("h2",{attrs:{id:"mqtt-v3-1-1协议报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-v3-1-1协议报文"}},[t._v("#")]),t._v(" MQTT V3.1.1协议报文")]),t._v(" "),v("h3",{attrs:{id:"报文结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#报文结构"}},[t._v("#")]),t._v(" 报文结构")]),t._v(" "),v("ul",[v("li",[t._v("固定报头(Fixed header)")]),t._v(" "),v("li",[t._v("可变报头(Variable header)")]),t._v(" "),v("li",[t._v("报文有效载荷(Payload)")])]),t._v(" "),v("h3",{attrs:{id:"固定报头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#固定报头"}},[t._v("#")]),t._v(" 固定报头")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("+----------+-----+-----+-----+-----+-----+-----+-----+-----+ | Bit      |  7  |  6  |  5  |  4  |  3  |  2  |  1  |  0  | +----------+-----+-----+-----+-----+-----+-----+-----+-----+ | byte1    |   MQTT Packet type    |         Flags         | +----------+-----------------------+-----------------------+ | byte2... |   Remaining Length                            | +----------+-----------------------------------------------+ \n")])])]),v("h3",{attrs:{id:"报文类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#报文类型"}},[t._v("#")]),t._v(" 报文类型")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("类型名称")]),t._v(" "),v("td",[t._v("类型值")]),t._v(" "),v("td",[t._v("报文说明")])]),t._v(" "),v("tr",[v("td",[t._v("CONNECT")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("发起连接")])]),t._v(" "),v("tr",[v("td",[t._v("CONNACK")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("连接回执")])]),t._v(" "),v("tr",[v("td",[t._v("PUBLISH")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("发布消息")])]),t._v(" "),v("tr",[v("td",[t._v("PUBACK")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("发布回执")])]),t._v(" "),v("tr",[v("td",[t._v("PUBREC")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",[t._v("QoS2消息回执")])]),t._v(" "),v("tr",[v("td",[t._v("PUBREL")]),t._v(" "),v("td",[t._v("6")]),t._v(" "),v("td",[t._v("QoS2消息释放")])]),t._v(" "),v("tr",[v("td",[t._v("PUBCOMP")]),t._v(" "),v("td",[t._v("7")]),t._v(" "),v("td",[t._v("QoS2消息完成")])]),t._v(" "),v("tr",[v("td",[t._v("SUBSCRIBE")]),t._v(" "),v("td",[t._v("8")]),t._v(" "),v("td",[t._v("订阅主题")])]),t._v(" "),v("tr",[v("td",[t._v("SUBACK")]),t._v(" "),v("td",[t._v("9")]),t._v(" "),v("td",[t._v("订阅回执")])]),t._v(" "),v("tr",[v("td",[t._v("UNSUBSCRIBE")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",[t._v("取消订阅")])]),t._v(" "),v("tr",[v("td",[t._v("UNSUBACK")]),t._v(" "),v("td",[t._v("11")]),t._v(" "),v("td",[t._v("取消订阅回执")])]),t._v(" "),v("tr",[v("td",[t._v("PINGREQ")]),t._v(" "),v("td",[t._v("12")]),t._v(" "),v("td",[t._v("PING请求")])]),t._v(" "),v("tr",[v("td",[t._v("PINGRESP")]),t._v(" "),v("td",[t._v("13")]),t._v(" "),v("td",[t._v("PING响应")])]),t._v(" "),v("tr",[v("td",[t._v("DISCONNECT")]),t._v(" "),v("td",[t._v("14")]),t._v(" "),v("td",[t._v("断开连接")])])])]),t._v(" "),v("h3",{attrs:{id:"publish发布消息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#publish发布消息"}},[t._v("#")]),t._v(" PUBLISH发布消息")]),t._v(" "),v("p",[t._v("PUBLISH报文承载客户端与服务器间双向的发布消息。 PUBACK报文用于接收端确认QoS1报文，PUBREC/PUBREL/PUBCOMP报文用于QoS2消息流程。")]),t._v(" "),v("h3",{attrs:{id:"pingreq-pingresp心跳"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pingreq-pingresp心跳"}},[t._v("#")]),t._v(" PINGREQ/PINGRESP心跳")]),t._v(" "),v("p",[t._v("客户端在无报文发送时，按保活周期(KeepAlive)定时向服务端发送PINGREQ心跳报文，服务端响应PINGRESP报文。PINGREQ/PINGRESP报文均2个字节。")]),t._v(" "),v("h2",{attrs:{id:"mqtt消息qos"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt消息qos"}},[t._v("#")]),t._v(" MQTT消息QoS")]),t._v(" "),v("p",[t._v("MQTT发布消息QoS保证不是端到端的，是客户端与服务器之间的。订阅者收到MQTT消息的QoS级别，最终取决于发布消息的QoS和主题订阅的QoS。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("发布消息的 QoS")]),t._v(" "),v("th",[t._v("主题订阅的 QoS")]),t._v(" "),v("th",[t._v("接收消息的 QoS")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("2")])])])]),t._v(" "),v("h3",{attrs:{id:"qos0消息发布订阅"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#qos0消息发布订阅"}},[t._v("#")]),t._v(" Qos0消息发布订阅")]),t._v(" "),v("p",[v("img",{attrs:{src:a(345),alt:"image.png"}})]),t._v(" "),v("h3",{attrs:{id:"qos1消息发布订阅"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#qos1消息发布订阅"}},[t._v("#")]),t._v(" Qos1消息发布订阅")]),t._v(" "),v("p",[v("img",{attrs:{src:a(346),alt:"image.png"}})]),t._v(" "),v("h3",{attrs:{id:"qos2消息发布订阅"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#qos2消息发布订阅"}},[t._v("#")]),t._v(" Qos2消息发布订阅")]),t._v(" "),v("p",[v("img",{attrs:{src:a(347),alt:"image.png"}})]),t._v(" "),v("h2",{attrs:{id:"mqtt会话-clean-session"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt会话-clean-session"}},[t._v("#")]),t._v(" MQTT会话(Clean Session)")]),t._v(" "),v("p",[t._v("MQTT客户端向服务器发起CONNECT请求时，可以通过'Clean Session'标志设置会话。\n'Clean Session'设置为0，表示创建一个持久会话，在客户端断开连接时，会话仍然保持并保存离线消息，直到会话超时注销。\n'Clean Session'设置为1，表示创建一个新的临时会话，在客户端断开时，会话自动销毁。")]),t._v(" "),v("h2",{attrs:{id:"mqtt连接保活心跳"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt连接保活心跳"}},[t._v("#")]),t._v(" MQTT连接保活心跳")]),t._v(" "),v("p",[t._v("MQTT客户端向服务器发起CONNECT请求时，通过KeepAlive参数设置保活周期。\n客户端在无报文发送时，按KeepAlive周期定时发送2字节的PINGREQ心跳报文，服务端收到PINGREQ报文后，回复2字节的PINGRESP报文。\n服务端在1.5个心跳周期内，既没有收到客户端发布订阅报文，也没有收到PINGREQ心跳报文时，主动心跳超时断开客户端TCP连接。\nemqx 消息服务器默认按最长 2.5 心跳周期超时设计。")]),t._v(" "),v("h2",{attrs:{id:"mqtt遗愿消息-last-will"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt遗愿消息-last-will"}},[t._v("#")]),t._v(" MQTT遗愿消息(Last Will)")]),t._v(" "),v("p",[t._v("MQTT客户端向服务器端CONNECT请求时，可以设置是否发送遗愿消息(Will Message)标志，和遗愿消息主题(Topic)与内容(Payload)。\nMQTT客户端异常下线时(客户端断开前未向服务器发送DISCONNECT消息)，MQTT消息服务器会发布遗愿消息。")]),t._v(" "),v("h2",{attrs:{id:"mqtt保留消息-retained-message"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt保留消息-retained-message"}},[t._v("#")]),t._v(" MQTT保留消息(Retained Message)")]),t._v(" "),v("p",[t._v("MQTT客户端向服务器发布(PUBLISH)消息时，可以设置保留消息(Retained Message)标志。保留消息(Retained Message)会驻留在消息服务器，后来的订阅者订阅主题时仍可以接收该消息。\n例如mosquitto命令行发布一条保留消息到主题'a/b/c':")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("mosquitto_pub -r -q 1 -t a/b/c -m 'hello' \n")])])]),v("p",[t._v("之后连接上来的MQTT客户端订阅主题'a/b/c'时候，仍可收到该消息:")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("$ mosquitto_sub -t a/b/c -q 1 hello \n")])])]),v("p",[t._v("保留消息(Retained Message)有两种清除方式:")]),t._v(" "),v("ol",[v("li",[t._v("客户端向有保留消息的主题发布一个空消息:")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("mosquitto_pub -r -q 1 -t a/b/c -m '' \n")])])]),v("ol",[v("li",[t._v("消息服务器设置保留消息的超期时间。")])]),t._v(" "),v("h2",{attrs:{id:"mqtt-websocket连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-websocket连接"}},[t._v("#")]),t._v(" MQTT WebSocket连接")]),t._v(" "),v("p",[t._v("MQTT协议除支持TCP传输层外，还支持WebSocket作为传输层。通过WebSocket浏览器可以直连MQTT消息服务器，发布订阅模式与其他MQTT客户端通信。\nMQTT协议的WebSocket连接，必须采用binary模式，并携带子协议Header:")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Sec-WebSocket-Protocol: mqttv3.1 或 mqttv3.1.1 \n")])])]),v("h2",{attrs:{id:"mqtt-与-xmpp-协议对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-与-xmpp-协议对比"}},[t._v("#")]),t._v(" MQTT 与 XMPP 协议对比")]),t._v(" "),v("p",[t._v("MQTT协议设计简单轻量、路由灵活，将在移动互联网物联网消息领域，全面取代PC时代的XMPP协议:")]),t._v(" "),v("ol",[v("li",[t._v("MQTT协议一个字节固定报头，两个字节心跳报文，报文体积小编解码容易。XMPP协议基于繁重的XML，报文体积大且交互繁琐。")]),t._v(" "),v("li",[t._v("MQTT协议基于主题(Topic)发布订阅模式消息路由，相比XMPP基于JID的点对点消息路由更为灵活。")]),t._v(" "),v("li",[t._v("MQTT协议未定义报文内容格式，可以承载JSON、二进制等不同类型报文。XMPP协议采用XML承载报文，二进制必须Base64编码等处理。")]),t._v(" "),v("li",[t._v("MQTT协议支持消息收发确认和QoS保证，XMPP主协议并未定义类似机制。MQTT协议有更好的消息可靠性保证。")])]),t._v(" "),v("h2",{attrs:{id:"mqtt-sn-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-sn-协议"}},[t._v("#")]),t._v(" MQTT-SN 协议")]),t._v(" "),v("p",[t._v("MQTT-SN 协议是 MQTT 的直系亲属，它使用 UDP 进行通信，标准的端口是1884。MQTT-SN 的主要目的是为了适应受限的设备和网络，比如一些传感器，只有很小的内存和 CPU，TCP 对于这些设备来说非常奢侈。还有一些网络，比如 ZIGBEE，报文的长度在300字节以下，无法承载太大的数据包。所以 MQTT-SN 的数据包更小巧。\nMQTT-SN 的官方标准下载地址: "),v("a",{attrs:{href:"http://mqtt.org/new/wp-content/uploads/2009/06/MQTT-SN_spec_v1.2.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mqtt.org/new/wp-content/uploads/2009/06/MQTT-SN_spec_v1.2.pdf(opens new window)"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"mqtt-sn-和-mqtt-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-sn-和-mqtt-的区别"}},[t._v("#")]),t._v(" MQTT-SN 和 MQTT 的区别")]),t._v(" "),v("p",[t._v("MQTT-SN 的信令和 MQTT 大部分都相同，比如都有 Will, 都有 Connect/Subscribe/Publish 命令.\nMQTT-SN 最大的不同是，Topic 使用 TopicId 来代替，而 TopicId 是一个16比特的数字。每一个数字对应一个 Topic, 设备和云端需要使用 REGISTER 命令映射 TopicId 和 Topic 的对应关系。\nMQTT-SN 可以随时更改 Will 的内容, 甚至可以取消. 而 MQTT 只允许在 CONNECT 时设定 Will 的内容, 而且不允许更改.\nMQTT-SN 的网络中有网关这种设备，它负责把 MQTT-SN 转换成 MQTT，和云端的 MQTT Broker 通信. MQTT-SN 的协议支持自动发现网关的功能。\nMQTT-SN 还支持设备的睡眠功能，如果设备进入睡眠状态，无法接收 UDP 数据，网关将把下行的 PUBLISH 消息缓存起来，直到设备苏醒后再传送。")])])}),[],!1,null,null,null);v.default=s.exports},345:function(t,v,a){t.exports=a.p+"assets/img/12.b0154ea9.png"},346:function(t,v,a){t.exports=a.p+"assets/img/13.d9b14b93.png"},347:function(t,v,a){t.exports=a.p+"assets/img/14.a909dd3f.png"}}]);