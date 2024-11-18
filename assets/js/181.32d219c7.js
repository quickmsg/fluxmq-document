(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1173:function(t,_,v){"use strict";v.r(_);var r=v(25),a=Object(r.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"rabbitmq推送指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq推送指令"}},[t._v("#")]),t._v(" RabbitMQ推送指令")]),t._v(" "),_("h2",{attrs:{id:"场景说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#场景说明"}},[t._v("#")]),t._v(" 场景说明")]),t._v(" "),_("p",[t._v("业务触发的指令下发，会经由RabbitMQ消息队列统一接收，再依赖定制服务完成统一下发至网关，通过主题的映射配置可以极大的简化指令下发链路")]),t._v(" "),_("p",[t._v("本示例演示：通过RabbitMQ精准推送指令消息。")]),t._v(" "),_("h2",{attrs:{id:"前提条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),_("ul",[_("li",[t._v("拥有可使用的RabbitMQ实例")])]),t._v(" "),_("h2",{attrs:{id:"配置指令消费实例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置指令消费实例"}},[t._v("#")]),t._v(" 配置指令消费实例")]),t._v(" "),_("h3",{attrs:{id:"_1-选择左侧导航栏的-指令消费-单击左上角的-来新建指令消费配置。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-选择左侧导航栏的-指令消费-单击左上角的-来新建指令消费配置。"}},[t._v("#")]),t._v(" 1. 选择左侧导航栏的“指令消费”，单击左上角的“+”来新建指令消费配置。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(293),alt:"rabbitmq_cmd_1.png"}})]),t._v(" "),_("h3",{attrs:{id:"_2-配置界面参考下表参数说明-填写相关内容。以下参数取值仅为示例-填写完成后单击-提交-。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置界面参考下表参数说明-填写相关内容。以下参数取值仅为示例-填写完成后单击-提交-。"}},[t._v("#")]),t._v(" 2. 配置界面参考下表参数说明，填写相关内容。以下参数取值仅为示例，填写完成后单击“提交”。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(294),alt:"rabbitmq_cmd_2.png"}})]),t._v(" "),_("h4",{attrs:{id:"编辑指令消费"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编辑指令消费"}},[t._v("#")]),t._v(" 编辑指令消费")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("参数名")])]),t._v(" "),_("th",[_("strong",[t._v("参数说明")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("指令消费类型")]),t._v(" "),_("td",[t._v("默认，如：RABBITMQ")])]),t._v(" "),_("tr",[_("td",[t._v("指令消费名称")]),t._v(" "),_("td",[t._v("指令消费实例名，如：param_cmd")])]),t._v(" "),_("tr",[_("td",[t._v("是否启用")]),t._v(" "),_("td",[t._v("开启/关闭按钮")])])])]),t._v(" "),_("h4",{attrs:{id:"数据源配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据源配置"}},[t._v("#")]),t._v(" 数据源配置")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("参数名")])]),t._v(" "),_("th",[_("strong",[t._v("参数说明")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("host")]),t._v(" "),_("td",[t._v("指定rabbitmq集群地址ip，如：127.0.0.1")])]),t._v(" "),_("tr",[_("td",[t._v("port")]),t._v(" "),_("td",[t._v("rabbitmq通信连接端口，如：5672")])]),t._v(" "),_("tr",[_("td",[t._v("username")]),t._v(" "),_("td",[t._v("rabbitmq用户名，如：guest")])]),t._v(" "),_("tr",[_("td",[t._v("password")]),t._v(" "),_("td",[t._v("rabbitmqQ密码，如：guest")])]),t._v(" "),_("tr",[_("td",[t._v("vhost")]),t._v(" "),_("td",[t._v("指定虚拟主机，如：/")])]),t._v(" "),_("tr",[_("td",[t._v("更多属性")]),t._v(" "),_("td",[t._v("通过点击【添加属性字段】，设置更多自定义属性")])])])]),t._v(" "),_("h4",{attrs:{id:"主题映射"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主题映射"}},[t._v("#")]),t._v(" 主题映射")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("参数名")])]),t._v(" "),_("th",[_("strong",[t._v("参数说明")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("订阅源主题")]),t._v(" "),_("td",[t._v("自rabbitmq消费主题名")])]),t._v(" "),_("tr",[_("td",[t._v("MQTT主题")]),t._v(" "),_("td",[t._v("发送mqtt的主题名（如果下发的指令是JSON格式，可以通过${变量名}动态映射互踢）,参考下面参数集")])]),t._v(" "),_("tr",[_("td",[t._v("Qos")]),t._v(" "),_("td",[t._v("消息语义（至多一次，至少一次，精准一次）")])]),t._v(" "),_("tr",[_("td",[t._v("Retain")]),t._v(" "),_("td",[t._v("指定mqtt主题接收的数据是否保留")])])])]),t._v(" "),_("h4",{attrs:{id:"变量集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#变量集"}},[t._v("#")]),t._v(" 变量集")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("参数名")])]),t._v(" "),_("th",[_("strong",[t._v("参数说明")])]),t._v(" "),_("th",[_("strong",[t._v("参数结构")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("value")]),t._v(" "),_("td",[t._v("rabbitmq的报文体，如果是"),_("code",[t._v("json")]),t._v("格式，可以通过"),_("code",[t._v("value.{key}")]),t._v("获取变量")]),t._v(" "),_("td",[t._v("Object")])]),t._v(" "),_("tr",[_("td",[t._v("ts")]),t._v(" "),_("td",[t._v("rabbitmq消息的时间戳")]),t._v(" "),_("td",[t._v("Long")])]),t._v(" "),_("tr",[_("td",[t._v("message_id")]),t._v(" "),_("td",[t._v("rabbitmq消息的序列号id")]),t._v(" "),_("td",[t._v("Long")])]),t._v(" "),_("tr",[_("td",[t._v("topic")]),t._v(" "),_("td",[t._v("rabbitmq主题")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("exchange")]),t._v(" "),_("td",[t._v("rabbitmq交换机")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("routing_key")]),t._v(" "),_("td",[t._v("rabbitmq路由key")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("headers")]),t._v(" "),_("td",[t._v("消息header,可以通过 "),_("code",[t._v("headers.{key}")]),t._v("获取header")]),t._v(" "),_("td",[t._v("Map")])])])])])}),[],!1,null,null,null);_.default=a.exports},293:function(t,_,v){t.exports=v.p+"assets/img/rabbitmq_cmd_1.24dbb00e.png"},294:function(t,_,v){t.exports=v.p+"assets/img/rabbitmq_cmd_2.5f56f606.png"}}]);