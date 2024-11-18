(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1174:function(t,_,v){"use strict";v.r(_);var a=v(25),r=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"kafka推送指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kafka推送指令"}},[t._v("#")]),t._v(" Kafka推送指令")]),t._v(" "),_("h2",{attrs:{id:"场景说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#场景说明"}},[t._v("#")]),t._v(" 场景说明")]),t._v(" "),_("p",[t._v("业务触发的指令下发，会经由kafka消息队列统一接收，再依赖定制服务完成统一下发至网关，通过主题的映射配置可以极大的简化指令下发链路")]),t._v(" "),_("p",[t._v("本示例演示：通过kafka精准推送指令消息。")]),t._v(" "),_("h2",{attrs:{id:"前提条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),_("ul",[_("li",[t._v("拥有可使用的kafka实例")])]),t._v(" "),_("h2",{attrs:{id:"配置指令消费实例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置指令消费实例"}},[t._v("#")]),t._v(" 配置指令消费实例")]),t._v(" "),_("h3",{attrs:{id:"_1-选择左侧导航栏的-指令消费-单击左上角的-来新建指令消费配置。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-选择左侧导航栏的-指令消费-单击左上角的-来新建指令消费配置。"}},[t._v("#")]),t._v(" 1. 选择左侧导航栏的“指令消费”，单击左上角的“+”来新建指令消费配置。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(279),alt:"kafka_cmd_1.png"}})]),t._v(" "),_("h3",{attrs:{id:"_2-配置界面参考下表参数说明-填写相关内容。以下参数取值仅为示例-填写完成后单击-提交-。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置界面参考下表参数说明-填写相关内容。以下参数取值仅为示例-填写完成后单击-提交-。"}},[t._v("#")]),t._v(" 2. 配置界面参考下表参数说明，填写相关内容。以下参数取值仅为示例，填写完成后单击“提交”。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(280),alt:"kafka_cmd_2.png"}})]),t._v(" "),_("h4",{attrs:{id:"编辑指令消费"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编辑指令消费"}},[t._v("#")]),t._v(" 编辑指令消费")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("参数名")])]),t._v(" "),_("th",[_("strong",[t._v("参数说明")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("指令消费类型")]),t._v(" "),_("td",[t._v("默认，如：KAFKA")])]),t._v(" "),_("tr",[_("td",[t._v("指令消费名称")]),t._v(" "),_("td",[t._v("指令消费实例名，如：param_cmd")])]),t._v(" "),_("tr",[_("td",[t._v("线程")]),t._v(" "),_("td",[t._v("异步处理线程数")])]),t._v(" "),_("tr",[_("td",[t._v("编码")]),t._v(" "),_("td",[t._v("数据传输转换编码，如：ISO_8859_1")])]),t._v(" "),_("tr",[_("td",[t._v("是否启用")]),t._v(" "),_("td",[t._v("开启/关闭按钮")])])])]),t._v(" "),_("h4",{attrs:{id:"数据源配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据源配置"}},[t._v("#")]),t._v(" 数据源配置")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("参数名")])]),t._v(" "),_("th",[_("strong",[t._v("参数说明")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("bootstrap.servers")]),t._v(" "),_("td",[t._v("指定kafka集群地址，如：127.0.0.1:9092")])]),t._v(" "),_("tr",[_("td",[t._v("group.id")]),t._v(" "),_("td",[t._v("kafka消费组ID，如：fluxmq_consumer")])]),t._v(" "),_("tr",[_("td",[t._v("key.deserializer")]),t._v(" "),_("td",[t._v("指定键的反序列化方式")])]),t._v(" "),_("tr",[_("td",[t._v("value.deserializer")]),t._v(" "),_("td",[t._v("指定键的反序列化方式")])]),t._v(" "),_("tr",[_("td",[t._v("更多属性")]),t._v(" "),_("td",[t._v("通过点击【添加属性字段】，设置更多自定义属性")])])])]),t._v(" "),_("h4",{attrs:{id:"主题映射"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主题映射"}},[t._v("#")]),t._v(" 主题映射")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("参数名")])]),t._v(" "),_("th",[_("strong",[t._v("参数说明")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("订阅源主题")]),t._v(" "),_("td",[t._v("自kafka消费主题名")])]),t._v(" "),_("tr",[_("td",[t._v("MQTT主题")]),t._v(" "),_("td",[t._v("发送mqtt的主题名（如果下发的指令是JSON格式，可以通过${变量名}动态映射主题,参考下面参数集")])]),t._v(" "),_("tr",[_("td",[t._v("Qos")]),t._v(" "),_("td",[t._v("消息语义（至多一次，至少一次，精准一次）")])]),t._v(" "),_("tr",[_("td",[t._v("Retain")]),t._v(" "),_("td",[t._v("指定mqtt主题接收的数据是否保留")])])])]),t._v(" "),_("h4",{attrs:{id:"变量集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#变量集"}},[t._v("#")]),t._v(" 变量集")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("参数名")])]),t._v(" "),_("th",[_("strong",[t._v("参数说明")])]),t._v(" "),_("th",[_("strong",[t._v("参数结构")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("value")]),t._v(" "),_("td",[t._v("kafka的报文体，如果是"),_("code",[t._v("json")]),t._v("格式，可以通过"),_("code",[t._v("value.{key}")]),t._v("获取变量")]),t._v(" "),_("td",[t._v("Object")])]),t._v(" "),_("tr",[_("td",[t._v("ts")]),t._v(" "),_("td",[t._v("kafka消息的时间戳")]),t._v(" "),_("td",[t._v("Long")])]),t._v(" "),_("tr",[_("td",[t._v("ts_type")]),t._v(" "),_("td",[t._v("kafka消息的类型")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("topic")]),t._v(" "),_("td",[t._v("kafka主题")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("key")]),t._v(" "),_("td",[t._v("kafka分区key")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("offset")]),t._v(" "),_("td",[t._v("消息偏移量")]),t._v(" "),_("td",[t._v("Long")])]),t._v(" "),_("tr",[_("td",[t._v("headers")]),t._v(" "),_("td",[t._v("消息header,可以通过 "),_("code",[t._v("headers.{key}")]),t._v("获取header")]),t._v(" "),_("td",[t._v("Map")])])])])])}),[],!1,null,null,null);_.default=r.exports},279:function(t,_,v){t.exports=v.p+"assets/img/kafka_cmd_1.91cf7ed9.png"},280:function(t,_,v){t.exports=v.p+"assets/img/kafka_cmd_2.819f9061.png"}}]);