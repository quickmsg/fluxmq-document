(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1153:function(t,a,s){"use strict";s.r(a);var r=s(25),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"集成prometheus-grafana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成prometheus-grafana"}},[t._v("#")]),t._v(" 集成Prometheus+Grafana")]),t._v(" "),a("h2",{attrs:{id:"下载安装脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装脚本"}},[t._v("#")]),t._v(" 下载安装脚本")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("https://fluxmq.obs.cn-east-3.myhuaweicloud.com/install_monitor.zip\n")])])]),a("p",[t._v("上传安装包install_monitor.zip 到服务器上，解压后包含以下文件\n"),a("img",{attrs:{src:s(520),alt:"img_1.png"}})]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n```shell\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" install_monitor.zip\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#进入解压目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/install_monitor\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#执行部署脚本 后面的ip端口修改成具体的网关节点ip端口，如果有多个请用逗号隔开")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" install_monitor.sh  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.12:60000,192.168.2.14:60000\n")])])]),a("h2",{attrs:{id:"_2-验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-验证"}},[t._v("#")]),t._v(" 2. 验证")]),t._v(" "),a("p",[t._v("prometheus ui界面 ：http://ip:9090\n"),a("img",{attrs:{src:s(521),alt:"img_2.png"}}),t._v("\ngrafana ui界面：http://ip:3000/login\n"),a("img",{attrs:{src:s(522),alt:"img_3.png"}})]),t._v(" "),a("h2",{attrs:{id:"_3-grafana-图表导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-grafana-图表导入"}},[t._v("#")]),t._v(" 3. grafana 图表导入")]),t._v(" "),a("p",[t._v("浏览器打开http://ip:3000/login,输入用户名、密码(admin/admin)\n"),a("img",{attrs:{src:s(523),alt:"img_4.png"}})]),t._v(" "),a("h2",{attrs:{id:"_4-导入json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-导入json"}},[t._v("#")]),t._v(" 4. 导入json")]),t._v(" "),a("blockquote",[a("p",[t._v("下载下面2个json文件，分别是mqtt-info.json、mqtt-jvm.json，导入即可监控fluxmq系统")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://fluxmq.obs.cn-east-3.myhuaweicloud.com/mqtt-info-2.0.13.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT监控"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://fluxmq.obs.cn-east-3.myhuaweicloud.com/mqtt-jvm.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM监控"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"采集metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#采集metrics"}},[t._v("#")]),t._v(" 采集Metrics")]),t._v(" "),a("p",[t._v("FluxMQ为提供Prometheus指标接口直接获取Metrics信息,具体指标详情参考下面"),a("RouterLink",{attrs:{to:"/2_0_17/views/view/metrics.html"}},[t._v("Metrics")])],1),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://{节点IP}:{HTTP端口}/public/metrics\n")])])]),a("h2",{attrs:{id:"与grafana集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与grafana集成"}},[t._v("#")]),t._v(" 与Grafana集成")]),t._v(" "),a("p",[t._v("下载后导入Grafana 即可:")])])}),[],!1,null,null,null);a.default=n.exports},520:function(t,a,s){t.exports=s.p+"assets/img/img_1.b0bf1740.png"},521:function(t,a,s){t.exports=s.p+"assets/img/img_2.f1a3d309.png"},522:function(t,a,s){t.exports=s.p+"assets/img/img_3.34905b62.png"},523:function(t,a,s){t.exports=s.p+"assets/img/img_4.b38fce8f.png"}}]);