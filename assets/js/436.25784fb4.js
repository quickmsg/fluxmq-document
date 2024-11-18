(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{755:function(t,s,a){"use strict";a.r(s);var e=a(25),_=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fluxmq-启动配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fluxmq-启动配置"}},[t._v("#")]),t._v(" FluxMQ 启动配置")]),t._v(" "),s("blockquote",[s("p",[t._v("配置文件支持Yaml、Properties形式，下面以Yaml形式为例，介绍各配置项的含义和配置方法")])]),t._v(" "),s("h2",{attrs:{id:"服务端配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端配置"}},[t._v("#")]),t._v(" 服务端配置")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" INFO "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 系统日志")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bossThreadSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# boss线程 默认=cpu核心数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workThreadSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# work线程 默认=cpu核心数+2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eventThreadSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 业务线程数 默认=cpu核心数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  ringBuffer大小")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eventMessageSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最大缓冲消息数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# globalReadWriteSize: 10000000,100000000  全局读写大小限制")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# channelReadWriteSize: 10000000,100000000 单个channel读写大小限制")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mqtt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tcp配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1887")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mqtt端口号")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wiretap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 二进制日志 前提是 logLevel = DEBUG")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("messageMaxSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4194304")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收消息的最大限制 默认4194304(4M)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SO_BACKLOG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http相关配置 端口固定60000")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 114.116.8.76\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessLog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http访问日志")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问用户名")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问密码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ws")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# websocket配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8999")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 端口")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /mqtt "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ws 的访问path mqtt.js请设置此选项a")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("messageMaxSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4194304")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收消息的最大限制 默认4194304(4M)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("localAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.92"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addresses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.92"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.191"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.73"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meterType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PROMETHEUS "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# INFLUXDB , PROMETHEUS")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("elasticsearch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 114.116.8.76"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("userName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" elastic\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq  \n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eventbus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("compressed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("batch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("batchSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("batchDuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("shareSubscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RANDOM \n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxShareSubscribeSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2.0.0\n")])])]),s("h2",{attrs:{id:"_1-pool配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-pool配置"}},[t._v("#")]),t._v(" 1. pool配置")]),t._v(" "),s("h2",{attrs:{id:"_2-mqtt配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-mqtt配置"}},[t._v("#")]),t._v(" 2. mqtt配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("mqtt启动的监听端口")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("wiretap")]),t._v(" "),s("td",[t._v("打印二进制日志，生产环境禁止使用")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("messageMaxSize")]),t._v(" "),s("td",[t._v("单个推送最大的负载字节数")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("options")]),t._v(" "),s("td",[t._v("netty 的options配置")]),t._v(" "),s("td",[t._v("不推荐配置")])]),t._v(" "),s("tr",[s("td",[t._v("childOptions")]),t._v(" "),s("td",[t._v("netty 的child channel options配置")]),t._v(" "),s("td",[t._v("不推荐配置")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-mqtts配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-mqtts配置"}},[t._v("#")]),t._v(" 3. mqtts配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("mqtt启动的监听端口")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("wiretap")]),t._v(" "),s("td",[t._v("打印二进制日志，生产环境禁止使用")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("messageMaxSize")]),t._v(" "),s("td",[t._v("单个推送最大的负载字节数")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("options")]),t._v(" "),s("td",[t._v("netty 的options配置")]),t._v(" "),s("td",[t._v("不推荐配置")])]),t._v(" "),s("tr",[s("td",[t._v("childOptions")]),t._v(" "),s("td",[t._v("netty 的child channel options配置")]),t._v(" "),s("td",[t._v("不推荐配置")])]),t._v(" "),s("tr",[s("td",[t._v("ssl参数")]),t._v(" "),s("td",[t._v("ssl启动参数")]),t._v(" "),s("td",[t._v("必填")])])])]),t._v(" "),s("h2",{attrs:{id:"_4-http配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-http配置"}},[t._v("#")]),t._v(" 4. http配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("mqtt启动的监听端口")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("host")]),t._v(" "),s("td",[t._v("启动的host")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("accessLog")]),t._v(" "),s("td",[t._v("开启http请求日志")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("username")]),t._v(" "),s("td",[t._v("管理后台登录用户名")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("password")]),t._v(" "),s("td",[t._v("管理后台登录密码")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("ssl")]),t._v(" "),s("td",[t._v("ssl参数配置")]),t._v(" "),s("td",[t._v("可选")])])])]),t._v(" "),s("h2",{attrs:{id:"_5-websocket配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-websocket配置"}},[t._v("#")]),t._v(" 5. websocket配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("mqtt启动的监听端口")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("path")]),t._v(" "),s("td",[t._v("ws请求的path")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("wiretap")]),t._v(" "),s("td",[t._v("打印二进制日志，生产环境禁止使用")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("messageMaxSize")]),t._v(" "),s("td",[t._v("单个推送最大的负载字节数")]),t._v(" "),s("td",[t._v("必填项")])]),t._v(" "),s("tr",[s("td",[t._v("options")]),t._v(" "),s("td",[t._v("netty 的options配置")]),t._v(" "),s("td",[t._v("不推荐配置")])]),t._v(" "),s("tr",[s("td",[t._v("childOptions")]),t._v(" "),s("td",[t._v("netty 的child channel options配置")]),t._v(" "),s("td",[t._v("不推荐配置")])]),t._v(" "),s("tr",[s("td",[t._v("ssl参数")]),t._v(" "),s("td",[t._v("ssl启动参数")]),t._v(" "),s("td",[t._v("必填")])])])]),t._v(" "),s("h2",{attrs:{id:"_6-cluster配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-cluster配置"}},[t._v("#")]),t._v(" 6. cluster配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("addresses")]),t._v(" "),s("td",[t._v("启动的集群节点集合")]),t._v(" "),s("td",[t._v("使用Tcp方式")])]),t._v(" "),s("tr",[s("td",[t._v("localAddress")]),t._v(" "),s("td",[t._v("指定本地连接器使用的ip地址，多网卡的时候配置")]),t._v(" "),s("td",[t._v("可选")])]),t._v(" "),s("tr",[s("td",[t._v("multicastGroup")]),t._v(" "),s("td",[t._v("组播地址")]),t._v(" "),s("td",[t._v("使用UDP组播时候使用，不推荐")])]),t._v(" "),s("tr",[s("td",[t._v("multicastPort")]),t._v(" "),s("td",[t._v("组播端口")]),t._v(" "),s("td")])])]),t._v(" "),s("h2",{attrs:{id:"_7-elasticsearch配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-elasticsearch配置"}},[t._v("#")]),t._v(" 7. ElasticSearch配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("url")]),t._v(" "),s("td",[t._v("es地址")]),t._v(" "),s("td",[t._v("127.0.0.1:9200")])]),t._v(" "),s("tr",[s("td",[t._v("username")]),t._v(" "),s("td",[t._v("用户名")]),t._v(" "),s("td",[t._v("elastic")])]),t._v(" "),s("tr",[s("td",[t._v("password")]),t._v(" "),s("td",[t._v("密码")]),t._v(" "),s("td",[t._v("elastic")])])])]),t._v(" "),s("h2",{attrs:{id:"_8-application配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-application配置"}},[t._v("#")]),t._v(" 8. Application配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("应用名称")]),t._v(" "),s("td",[t._v("修改后影响Metrics的Application，以及Dashboard里的节点名称")])]),t._v(" "),s("tr",[s("td",[t._v("version")]),t._v(" "),s("td",[t._v("FluxMQ版本")]),t._v(" "),s("td",[t._v("Dashboard显示的版本")])])])]),t._v(" "),s("h2",{attrs:{id:"_9-eventbus配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-eventbus配置"}},[t._v("#")]),t._v(" 9. EventBus配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("compressed")]),t._v(" "),s("td",[t._v("是否压缩")]),t._v(" "),s("td",[t._v("开启")])]),t._v(" "),s("tr",[s("td",[t._v("batch")]),t._v(" "),s("td",[t._v("是否批量")]),t._v(" "),s("td",[t._v("开启")])]),t._v(" "),s("tr",[s("td",[t._v("batchSize")]),t._v(" "),s("td",[t._v("单次批量传输size")]),t._v(" "),s("td",[t._v("1000")])]),t._v(" "),s("tr",[s("td",[t._v("batchDuration")]),t._v(" "),s("td",[t._v("批量窗口")]),t._v(" "),s("td",[t._v("50 ms")])])])]),t._v(" "),s("h2",{attrs:{id:"_10-sharesubscribe配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-sharesubscribe配置"}},[t._v("#")]),t._v(" 10. ShareSubscribe配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("strategy")]),t._v(" "),s("td",[t._v("策略")]),t._v(" "),s("td",[t._v("RANDOM")])]),t._v(" "),s("tr",[s("td",[t._v("maxShareSubscribeSize")]),t._v(" "),s("td",[t._v("最大订阅数")]),t._v(" "),s("td",[t._v("不限制")])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);