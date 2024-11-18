(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{801:function(a,s,t){"use strict";t.r(s);var e=t(25),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"安装包部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装包部署"}},[a._v("#")]),a._v(" 安装包部署")]),a._v(" "),s("blockquote",[s("p",[a._v("免费提供非商业化使用，商业化使用请联系管理员 18510240791")])]),a._v(" "),s("h2",{attrs:{id:"下载安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载安装包"}},[a._v("#")]),a._v(" 下载安装包")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.fluxmq.com/#/download",target:"_blank",rel:"noopener noreferrer"}},[a._v("Release"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),s("h3",{attrs:{id:"fluxmq启动配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fluxmq启动配置文件"}},[a._v("#")]),a._v(" FluxMQ启动配置文件")]),a._v(" "),s("p",[a._v("修改安装包下的:config.yaml,具体文件参考 "),s("code",[a._v("配置指南")])]),a._v(" "),s("h3",{attrs:{id:"jvm启动参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm启动参数"}},[a._v("#")]),a._v(" JVM启动参数")]),a._v(" "),s("p",[a._v("修改安装包下的:jvm_options.conf,启动时根据配置修改运行参数即可")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dname")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("FluxMQ  \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Duser.timezone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Asia/Shanghai\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:MetaspaceSize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("200M  \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:+UseG1GC")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Xmx16G")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Xms16G")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:MaxGCPauseMillis")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" \n-Xloggc:"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("$APP_HOME"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("/gc.log \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:GCLogFileSize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("10M \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:NumberOfGCLogFiles")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:+UseGCLogFileRotation")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:+PrintGCDateStamps")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:+PrintGCTimeStamps")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:+PrintGCDetails")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:+DisableExplicitGC")]),a._v(" \n\n")])])]),s("h2",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),s("p",[a._v("使用管理员权限运行"),s("code",[a._v("start.bat")]),a._v("即可运行FluxMQ。")]),a._v(" "),s("h2",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),s("h3",{attrs:{id:"添加执行权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加执行权限"}},[a._v("#")]),a._v(" 添加执行权限")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x fluxmq start.sh stop.sh\n")])])]),s("h3",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./start.sh\n")])])]),s("h3",{attrs:{id:"停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止"}},[a._v("#")]),a._v(" 停止")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./stop.sh\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);