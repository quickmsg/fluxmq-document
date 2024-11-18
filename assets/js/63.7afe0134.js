(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{483:function(t,e,a){t.exports=a.p+"assets/img/wildcard_1.1767a1ca.png"},484:function(t,e,a){t.exports=a.p+"assets/img/wildcard_2.753c429c.png"},485:function(t,e,a){t.exports=a.p+"assets/img/wildcard_3.6509ac75.png"},486:function(t,e,a){t.exports=a.p+"assets/img/wildcard_4.036e1682.png"},487:function(t,e,a){t.exports=a.p+"assets/img/wildcard_5.97a9a400.png"},488:function(t,e,a){t.exports=a.p+"assets/img/wildcard_6.ab81b600.png"},709:function(t,e,a){"use strict";a.r(e);var _=a(25),c=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"通配符压测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通配符压测"}},[t._v("#")]),t._v(" 通配符压测")]),t._v(" "),e("h3",{attrs:{id:"压测准备-使用emqtt-bench压测工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压测准备-使用emqtt-bench压测工具"}},[t._v("#")]),t._v(" 压测准备 - 使用emqtt-bench压测工具")]),t._v(" "),e("blockquote",[e("p",[t._v("https://github.com/emqx/emqtt-bench")])]),t._v(" "),e("p",[t._v("发布脚本")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./emqtt_bench pub -t %i/test  -h 172.17.6.75   -p 1887 -u fluxmq -P fluxmq -s 1024 -q 0 -c 1 -I 1000  -i 2 -L 1000000\n")])])]),e("p",[t._v("订阅脚本")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./emqtt_bench sub -t '%i/#'  -h 172.17.6.75   -p 1887 -u fluxmq -P fluxmq -c 50000  -i 2 -q 0\n")])])]),e("h3",{attrs:{id:"压测指标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压测指标"}},[t._v("#")]),t._v(" 压测指标")]),t._v(" "),e("div",{staticClass:"table-1"},[e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("压测目标(CPU使用率)")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("FluxMQ")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("BifrMQ")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("EMQX")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("HiveMQ")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("wildcard_5w_5w_0_1_1024_100000000")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("33%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("42%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("59%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("45%")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("wildcard_5w_5w_0_2_1024_100000000")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("52%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("73%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("84%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("崩溃")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("wildcard_5w_5w_1_1_1024_100000000")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("45%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("53%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("66%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("崩溃")])])])])])]),t._v(" "),e("h3",{attrs:{id:"压测明细"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压测明细"}},[t._v("#")]),t._v(" 压测明细")]),t._v(" "),e("blockquote",[e("p",[t._v("连接数_订阅数_QOS_频率(每秒)_数据包大小_数据包总数")])]),t._v(" "),e("blockquote",[e("p",[t._v("wildcard_5w_5w_0_1_1024_100000000")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(483),alt:"wildcard_1.png"}}),t._v(" "),e("img",{attrs:{src:a(484),alt:"wildcard_2.png"}})]),t._v(" "),e("blockquote",[e("p",[t._v("wildcard_5w_5w_0_2_1024_100000000")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(485),alt:"wildcard_3.png"}}),t._v(" "),e("img",{attrs:{src:a(486),alt:"wildcard_4.png"}})]),t._v(" "),e("blockquote",[e("p",[t._v("wildcard_5w_5w_1_1_1024_100000000")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(487),alt:"wildcard_5.png"}}),t._v(" "),e("img",{attrs:{src:a(488),alt:"wildcard_6.png"}})])])}),[],!1,null,null,null);e.default=c.exports}}]);