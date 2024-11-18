(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{286:function(t,a,s){t.exports=s.p+"assets/img/nacos_cmd_1.cfc1d37c.png"},287:function(t,a,s){t.exports=s.p+"assets/img/nacos_cmd_2.12fd93fe.png"},288:function(t,a,s){t.exports=s.p+"assets/img/nacos_cmd_3.844f53cc.png"},838:function(t,a,s){"use strict";s.r(a);var _=s(25),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nacos实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos实现"}},[t._v("#")]),t._v(" Nacos实现")]),t._v(" "),a("h2",{attrs:{id:"场景说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景说明"}},[t._v("#")]),t._v(" 场景说明")]),t._v(" "),a("p",[t._v('支持Nacos注册中心，通过HTTP请求，方便使用feign进行服务接口调用完成指令下发，默认POST请求 "/public/mqtt/publish"')]),t._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),a("ul",[a("li",[t._v("拥有可使用的Nacos实例")])]),t._v(" "),a("h2",{attrs:{id:"配置指令消费实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置指令消费实例"}},[t._v("#")]),t._v(" 配置指令消费实例")]),t._v(" "),a("h3",{attrs:{id:"_1-选择左侧导航栏的-指令消费-单击左上角的-来新建指令消费配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-选择左侧导航栏的-指令消费-单击左上角的-来新建指令消费配置。"}},[t._v("#")]),t._v(" 1. 选择左侧导航栏的“指令消费”，单击左上角的“+”来新建指令消费配置。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(286),alt:"nacos_cmd_1.png"}})]),t._v(" "),a("h3",{attrs:{id:"_2-配置界面参考下表参数说明-填写相关内容。以下参数取值仅为示例-填写完成后单击-提交-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置界面参考下表参数说明-填写相关内容。以下参数取值仅为示例-填写完成后单击-提交-。"}},[t._v("#")]),t._v(" 2. 配置界面参考下表参数说明，填写相关内容。以下参数取值仅为示例，填写完成后单击“提交”。")]),t._v(" "),a("h4",{attrs:{id:"编辑指令消费"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑指令消费"}},[t._v("#")]),t._v(" 编辑指令消费")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("参数名")])]),t._v(" "),a("th",[a("strong",[t._v("参数说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("指令消费类型")]),t._v(" "),a("td",[t._v("默认，如：Nacos")])]),t._v(" "),a("tr",[a("td",[t._v("指令消费名称")]),t._v(" "),a("td",[t._v("指令消费实例名，如：param_cmd")])]),t._v(" "),a("tr",[a("td",[t._v("注册地址")]),t._v(" "),a("td",[t._v("Nacos注册地址，如：127.0.0.1:8848")])]),t._v(" "),a("tr",[a("td",[t._v("namespace")]),t._v(" "),a("td",[t._v("Nacos配置namespace名，默认：DEFAULT")])]),t._v(" "),a("tr",[a("td",[t._v("服务名称")]),t._v(" "),a("td",[t._v("在Nacos注册的服务名，如：fluxmq")])]),t._v(" "),a("tr",[a("td",[t._v("分组")]),t._v(" "),a("td",[t._v("namespace下的分组，默认：DEFAULT_GROUP")])]),t._v(" "),a("tr",[a("td",[t._v("用户名")]),t._v(" "),a("td",[t._v("访问Nacos的用户名")])]),t._v(" "),a("tr",[a("td",[t._v("密码")]),t._v(" "),a("td",[t._v("访问Nacos的密码")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(287),alt:"nacos_cmd_2.png"}})]),t._v(" "),a("h3",{attrs:{id:"_3-管理指令消费实例-可以通过看板界面继续编辑、启停用、删除操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-管理指令消费实例-可以通过看板界面继续编辑、启停用、删除操作"}},[t._v("#")]),t._v(" 3. 管理指令消费实例，可以通过看板界面继续编辑、启停用、删除操作")]),t._v(" "),a("p",[a("img",{attrs:{src:s(288),alt:"nacos_cmd_3.png"}})]),t._v(" "),a("h3",{attrs:{id:"_4-服务调用代码demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-服务调用代码demo"}},[t._v("#")]),t._v(" 4. 服务调用代码Demo")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('@FeignClient("fluxmq")//服务名称\npublic interface MqttPulishService {\n    @PostMapping("/api/publish")\n    void send(@RequestBody PublishBody body);\n}\n\n@Data\npublic class PublishBody {\n    private String topic;\n    private int qos;\n    private boolean retain;\n    private String payload_encoding;\n    private String payload;\n}\n\n')])])]),a("p",[a("code",[t._v("payload_encoding")]),t._v("取值")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("参数名")])]),t._v(" "),a("th",[a("strong",[t._v("参数说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("plain")]),t._v(" "),a("td",[t._v("明文")])]),t._v(" "),a("tr",[a("td",[t._v("base64")]),t._v(" "),a("td",[t._v("base加密")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);