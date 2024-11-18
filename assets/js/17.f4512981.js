(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1143:function(t,s,a){"use strict";a.r(s);var r=a(25),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"桥接压测-kafka"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#桥接压测-kafka"}},[t._v("#")]),t._v(" 桥接压测（KAFKA）")]),t._v(" "),s("p",[s("img",{attrs:{src:a(276),alt:"image.png"}})]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dname")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$AppName")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Duser.timezone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Asia/Shanghai "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Xmx28G")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Xms28G")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-XX:MetaspaceSize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("200M  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-XX:+UseG1GC")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-XX:MaxGCPauseMillis")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" -Xloggc:"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("$APP_HOME"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("/gc.log "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-XX:GCLogFileSize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("10M "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-XX:NumberOfGCLogFiles")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-XX:+UseGCLogFileRotation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-XX:+PrintGCDateStamps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-XX:+PrintGCTimeStamps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-XX:+PrintGCDetails")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-XX:+DisableExplicitGC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-verbose:gc")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("仅仅部署一台MQTT节点进行压测")])]),t._v(" "),s("h3",{attrs:{id:"新建kafka数据源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建kafka数据源"}},[t._v("#")]),t._v(" 新建kafka数据源")]),t._v(" "),s("p",[s("img",{attrs:{src:a(381),alt:""}})]),t._v(" "),s("h3",{attrs:{id:"新建规则转发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建规则转发"}},[t._v("#")]),t._v(" 新建规则转发")]),t._v(" "),s("p",[s("img",{attrs:{src:a(382),alt:""}})]),t._v(" "),s("h3",{attrs:{id:"启用规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用规则"}},[t._v("#")]),t._v(" 启用规则")]),t._v(" "),s("p",[s("img",{attrs:{src:a(383),alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_10w-tps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10w-tps"}},[t._v("#")]),t._v(" 10W TPS")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("连接")]),t._v(" "),s("th",[t._v("推送")]),t._v(" "),s("th",[t._v("报文大小")]),t._v(" "),s("th",[t._v("cpu")]),t._v(" "),s("th",[t._v("内存(最大使用)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("50000")]),t._v(" "),s("td",[t._v("2/s")]),t._v(" "),s("td",[t._v("160B")]),t._v(" "),s("td",[t._v("22%")]),t._v(" "),s("td",[t._v("8G")])]),t._v(" "),s("tr",[s("td",[t._v("50000")]),t._v(" "),s("td",[t._v("2/s")]),t._v(" "),s("td",[t._v("1024B")]),t._v(" "),s("td",[t._v("31%")]),t._v(" "),s("td",[t._v("10G")])])])]),t._v(" "),s("p",[s("strong",[t._v("160B压测截图：")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(384),alt:"Dashboard"}}),t._v(" "),s("img",{attrs:{src:a(385),alt:"MQTT"}}),t._v(" "),s("img",{attrs:{src:a(386),alt:"MQTT"}}),t._v(" "),s("img",{attrs:{src:a(387),alt:"JVM"}})]),t._v(" "),s("p",[s("strong",[t._v("1024B压测截图：")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(388),alt:"Dashboard"}}),t._v(" "),s("img",{attrs:{src:a(389),alt:"MQTT"}}),t._v(" "),s("img",{attrs:{src:a(390),alt:"MQTT"}}),t._v(" "),s("img",{attrs:{src:a(391),alt:"JVM"}})]),t._v(" "),s("h3",{attrs:{id:"_15w-tps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15w-tps"}},[t._v("#")]),t._v(" 15W TPS")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("连接")]),t._v(" "),s("th",[t._v("推送")]),t._v(" "),s("th",[t._v("报文大小")]),t._v(" "),s("th",[t._v("cpu")]),t._v(" "),s("th",[t._v("内存(最大使用)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("50000")]),t._v(" "),s("td",[t._v("3/s")]),t._v(" "),s("td",[t._v("160B")]),t._v(" "),s("td",[t._v("31%")]),t._v(" "),s("td",[t._v("13G")])]),t._v(" "),s("tr",[s("td",[t._v("50000")]),t._v(" "),s("td",[t._v("3/s")]),t._v(" "),s("td",[t._v("1024B")]),t._v(" "),s("td",[t._v("37%")]),t._v(" "),s("td",[t._v("15G")])])])]),t._v(" "),s("p",[s("strong",[t._v("160B压测截图：")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(392),alt:"Dashboard"}}),t._v(" "),s("img",{attrs:{src:a(393),alt:"MQTT"}}),t._v(" "),s("img",{attrs:{src:a(394),alt:"MQTT"}}),t._v(" "),s("img",{attrs:{src:a(395),alt:"JVM"}}),t._v(" "),s("img",{attrs:{src:a(396),alt:"JVM"}})]),t._v(" "),s("p",[s("strong",[t._v("1024B压测截图：")]),t._v(" "),s("img",{attrs:{src:a(397),alt:"Dashboard"}}),t._v(" "),s("img",{attrs:{src:a(398),alt:"MQTT"}}),t._v(" "),s("img",{attrs:{src:a(399),alt:"MQTT"}}),t._v(" "),s("img",{attrs:{src:a(400),alt:"JVM"}}),t._v(" "),s("img",{attrs:{src:a(401),alt:"JVM"}})]),t._v(" "),s("h3",{attrs:{id:"_20w-tps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20w-tps"}},[t._v("#")]),t._v(" 20W TPS")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("连接")]),t._v(" "),s("th",[t._v("推送")]),t._v(" "),s("th",[t._v("报文大小")]),t._v(" "),s("th",[t._v("cpu")]),t._v(" "),s("th",[t._v("内存(最大使用)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("50000")]),t._v(" "),s("td",[t._v("4/s")]),t._v(" "),s("td",[t._v("160B")]),t._v(" "),s("td",[t._v("35%")]),t._v(" "),s("td",[t._v("14G")])]),t._v(" "),s("tr",[s("td",[t._v("50000")]),t._v(" "),s("td",[t._v("4/s")]),t._v(" "),s("td",[t._v("1024B")]),t._v(" "),s("td",[t._v("40%")]),t._v(" "),s("td",[t._v("16G")])])])]),t._v(" "),s("p",[s("strong",[t._v("160B压测截图：")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(402),alt:"Dashboard"}}),t._v(" "),s("img",{attrs:{src:a(403),alt:"MQTT"}}),t._v(" "),s("img",{attrs:{src:a(404),alt:"MQTT"}}),t._v(" "),s("img",{attrs:{src:a(405),alt:"JVM"}})]),t._v(" "),s("p",[s("strong",[t._v("1024B压测截图：")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(406),alt:"Dashboard"}}),t._v(" "),s("img",{attrs:{src:a(407),alt:"MQTT"}}),t._v(" "),s("img",{attrs:{src:a(408),alt:"MQTT"}}),t._v(" "),s("img",{attrs:{src:a(409),alt:"JVM"}})])])}),[],!1,null,null,null);s.default=e.exports},276:function(t,s,a){t.exports=a.p+"assets/img/img.b670d772.png"},381:function(t,s,a){t.exports=a.p+"assets/img/img_24.c1bc8659.png"},382:function(t,s,a){t.exports=a.p+"assets/img/img_25.6e2302cd.png"},383:function(t,s,a){t.exports=a.p+"assets/img/img_26.f6cf4e2d.png"},384:function(t,s,a){t.exports=a.p+"assets/img/img_27.f6666e1b.png"},385:function(t,s,a){t.exports=a.p+"assets/img/img_28.8f450d66.png"},386:function(t,s,a){t.exports=a.p+"assets/img/img_29.7ea03b1f.png"},387:function(t,s,a){t.exports=a.p+"assets/img/img_30.271675a3.png"},388:function(t,s,a){t.exports=a.p+"assets/img/img_31.a7541214.png"},389:function(t,s,a){t.exports=a.p+"assets/img/img_32.1fb63bb7.png"},390:function(t,s,a){t.exports=a.p+"assets/img/img_33.73da2b52.png"},391:function(t,s,a){t.exports=a.p+"assets/img/img_34.b7e08878.png"},392:function(t,s,a){t.exports=a.p+"assets/img/img_35.a9c32b92.png"},393:function(t,s,a){t.exports=a.p+"assets/img/img_36.2d6acf89.png"},394:function(t,s,a){t.exports=a.p+"assets/img/img_37.be62d12a.png"},395:function(t,s,a){t.exports=a.p+"assets/img/img_38.8334b117.png"},396:function(t,s,a){t.exports=a.p+"assets/img/img_39.d581db5e.png"},397:function(t,s,a){t.exports=a.p+"assets/img/img_40.5a5dbbc9.png"},398:function(t,s,a){t.exports=a.p+"assets/img/img_41.f2d55130.png"},399:function(t,s,a){t.exports=a.p+"assets/img/img_42.efd91bc6.png"},400:function(t,s,a){t.exports=a.p+"assets/img/img_43.33c1ac51.png"},401:function(t,s,a){t.exports=a.p+"assets/img/img_44.281ee637.png"},402:function(t,s,a){t.exports=a.p+"assets/img/img_45.bc20a4a3.png"},403:function(t,s,a){t.exports=a.p+"assets/img/img_46.e8b8c3bd.png"},404:function(t,s,a){t.exports=a.p+"assets/img/img_47.6dfd7f94.png"},405:function(t,s,a){t.exports=a.p+"assets/img/img_48.66a17dd3.png"},406:function(t,s,a){t.exports=a.p+"assets/img/img_49.70f3ae5a.png"},407:function(t,s,a){t.exports=a.p+"assets/img/img_50.ee34dd71.png"},408:function(t,s,a){t.exports=a.p+"assets/img/img_51.a47f0b35.png"},409:function(t,s,a){t.exports=a.p+"assets/img/img_52.c386fdd1.png"}}]);