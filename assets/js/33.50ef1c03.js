(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{459:function(t,e,_){t.exports=_.p+"assets/img/multi_1.1f681a2d.png"},460:function(t,e,_){t.exports=_.p+"assets/img/multi_2.c56cc78c.png"},461:function(t,e,_){t.exports=_.p+"assets/img/multi_3.6192c113.png"},462:function(t,e,_){t.exports=_.p+"assets/img/multi_4.325eb3c1.png"},463:function(t,e,_){t.exports=_.p+"assets/img/multi_5.350c11a9.png"},464:function(t,e,_){t.exports=_.p+"assets/img/multi_6.fb87765b.png"},465:function(t,e,_){t.exports=_.p+"assets/img/multi_7.05e17450.png"},466:function(t,e,_){t.exports=_.p+"assets/img/multi_8.8ee3ffd9.png"},467:function(t,e,_){t.exports=_.p+"assets/img/multi_9.6768f5be.png"},468:function(t,e,_){t.exports=_.p+"assets/img/multi_10.44ca74bc.png"},469:function(t,e,_){t.exports=_.p+"assets/img/multi_11.71af583d.png"},470:function(t,e,_){t.exports=_.p+"assets/img/multi_12.59d1fe7d.png"},706:function(t,e,_){"use strict";_.r(e);var i=_(25),a=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"多topic压测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多topic压测"}},[t._v("#")]),t._v(" 多Topic压测")]),t._v(" "),e("h3",{attrs:{id:"压测准备-使用emqtt-bench压测工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压测准备-使用emqtt-bench压测工具"}},[t._v("#")]),t._v(" 压测准备 - 使用emqtt-bench压测工具")]),t._v(" "),e("blockquote",[e("p",[t._v("https://github.com/emqx/emqtt-bench")])]),t._v(" "),e("p",[t._v("发布脚本")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./emqtt_bench pub -t %i  -h 172.17.6.75   -p 1887 -u fluxmq -P fluxmq -s 1024 -q 0 -c 1 -I 1000  -i 2 -L 1000000\n")])])]),e("p",[t._v("订阅脚本")]),t._v(" "),e("div",{staticClass:"language-订阅 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./emqtt_bench sub -t %i  -h 172.17.6.75   -p 1887 -u fluxmq -P fluxmq -c 5000  -i 4 -q 0\n")])])]),e("h3",{attrs:{id:"压测指标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压测指标"}},[t._v("#")]),t._v(" 压测指标")]),t._v(" "),e("div",{staticClass:"table-1"},[e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("压测目标(CPU使用率)")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("FluxMQ")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("BifrMQ")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("EMQX")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("HiveMQ")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("multi_5K_5K_0_1_1024_100000000")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("3%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("8%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("16%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("8%")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("multi_5W_5W_0_1_1024_100000000")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("20%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("47%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("50%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("45%（波动大）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("multi_5W_5W_0_2_1024_100000000")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("35%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("74%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("80%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("崩溃")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("multi_5W_5W_1_1_1024_100000000")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("30%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("66%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("81%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("崩溃")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("multi_5W_5W_1_2_1024_100000000")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("崩溃")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("崩溃")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("崩溃")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("崩溃")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("multi_3W_3W_2_1_1024_100000000")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("31%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("47%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("80%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("61%")])])])])]),t._v(" "),e("h3",{attrs:{id:"压测明细"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压测明细"}},[t._v("#")]),t._v(" 压测明细")]),t._v(" "),e("blockquote",[e("p",[t._v("连接数_订阅数_QOS_频率(每秒)_数据包大小_数据包总数")])]),t._v(" "),e("blockquote",[e("p",[t._v("multi_5K_5K_0_1_1024_100000000")])]),t._v(" "),e("p",[e("img",{attrs:{src:_(459),alt:"multi_1.png"}}),t._v(" "),e("img",{attrs:{src:_(460),alt:"multi_2.png"}})]),t._v(" "),e("blockquote",[e("p",[t._v("multi_5W_5W_0_1_1024_100000000")])]),t._v(" "),e("p",[e("img",{attrs:{src:_(461),alt:"multi_3.png"}}),t._v(" "),e("img",{attrs:{src:_(462),alt:"multi_4.png"}})]),t._v(" "),e("blockquote",[e("p",[t._v("multi_5W_5W_0_2_1024_100000000")])]),t._v(" "),e("p",[e("img",{attrs:{src:_(463),alt:"multi_5.png"}}),t._v(" "),e("img",{attrs:{src:_(464),alt:"multi_6.png"}})]),t._v(" "),e("blockquote",[e("p",[t._v("multi_5W_5W_1_1_1024_100000000")])]),t._v(" "),e("p",[e("img",{attrs:{src:_(465),alt:"multi_7.png"}}),t._v(" "),e("img",{attrs:{src:_(466),alt:"multi_8.png"}})]),t._v(" "),e("blockquote",[e("p",[t._v("multi_5W_5W_1_2_1024_100000000")])]),t._v(" "),e("p",[e("img",{attrs:{src:_(467),alt:"multi_9.png"}}),t._v(" "),e("img",{attrs:{src:_(468),alt:"multi_10.png"}})]),t._v(" "),e("blockquote",[e("p",[t._v("multi_3W_3W_2_1_1024_100000000")])]),t._v(" "),e("p",[e("img",{attrs:{src:_(469),alt:"multi_11.png"}}),t._v(" "),e("img",{attrs:{src:_(470),alt:"multi_12.png"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);