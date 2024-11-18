(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{847:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fluxmq配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fluxmq配置文件"}},[t._v("#")]),t._v(" FluxMQ配置文件")]),t._v(" "),s("p",[t._v("完整配置文件如下：")]),t._v(" "),s("div",{staticClass:"language-YAML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allowEmptyMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否允许空消息传递规则引擎")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allowAnonymousAccess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否允许匿名访问")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bossThreadSize: 4  # 默认 4 不建议配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# workThreadSize: 20 # 默认cpu核心数 不建议配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# eventThreadSize: 24 # 默认cpu核心数+2 不建议配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eventMessageSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 业务线程数 默认=cpu核心数*10")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("waitStrategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BLOCKING "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# lowWaterMark:  低水位： 默认32768 不建议配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# highWaterMark: 高水位: 默认65536 不建议配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# channelReadSize: 单连接读字节数/s ，默认不限制，不建议配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# channelWriteSize: 单连接写字节数/s，默认不限制， 不建议配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mqtt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 支持多端口")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1883")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mqtt端口号")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wiretap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 二进制日志")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("messageMaxSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4194304")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收消息的最大限制 默认4194304(4M)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否开启proxy协议")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启认证")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAcl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启ACL  ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启桥接（规则引擎） ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSendWindowSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  单个连接发送确认消息窗口（qos1+qos2）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxReceiveWindowSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个连接接收确认窗口（qos2）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxConnectionPerSecond")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接速率 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sessionPersistence")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启session消息持久化，建议使用离线消息")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSessionSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启session后 单个连接持久化最大消息数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8999")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 端口")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("useWebsocket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否使用websocket")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("messageMaxSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4194304")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收消息的最大限制 默认4194304(4M)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /mqtt "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ws 的访问path mqtt.js请设置此选项")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启认证")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAcl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启ACL  ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  是否开启桥接（规则引擎） ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSendWindowSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  单个连接发送确认消息窗口（qos1+qos2）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxReceiveWindowSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个连接接收确认窗口（qos2）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxConnectionPerSecond")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接速率 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sessionPersistence")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启session消息持久化，建议使用离线消息")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSessionSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启session后 单个连接持久化最大消息数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http相关配置 端口固定60000")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessLog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http访问日志")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问用户名")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问密码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("localAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addresses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meterType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PROMETHEUS "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# INFLUXDB , PROMETHEUS")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eventbus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("compressed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("batch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("batchSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("batchDuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("shareSubscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RANDOM\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxShareSubscribeSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storeType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MEMORY "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MYSQL,LOCAL,MEMORY,POSTGRESQL")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3306/fluxmq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("useSSL=false\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  root\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  root\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);