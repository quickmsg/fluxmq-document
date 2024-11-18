(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{822:function(t,e,n){"use strict";n.r(e);var s=n(25),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"源码安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码安装"}},[t._v("#")]),t._v(" 源码安装")]),t._v(" "),e("h2",{attrs:{id:"源码下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码下载"}},[t._v("#")]),t._v(" 源码下载")]),t._v(" "),e("p",[t._v("haproxy "),e("a",{attrs:{href:"https://www.haproxy.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码地址"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"源码编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码编译"}},[t._v("#")]),t._v(" 源码编译")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/haproxy/haproxy/blob/master/INSTALL",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档地址"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" clean\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-j")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("nproc"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TARGET")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("linux-glibc "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("USE_OPENSSL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("USE_QUIC")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("USE_QUIC_OPENSSL_COMPAT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("USE_LUA")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("USE_PCRE2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("h2",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),e("blockquote",[e("p",[t._v("创建/etc/haproxy/haproxy.cfg文件，根据需要对下面的配置文件进行修改并粘贴在该文件中。")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("global  \n  log "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 local3 info \n  daemon  \n  maxconn "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10240")]),t._v("\n\ndefaults  \n  log global \n  mode tcp \n  option tcplog \n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" connect 10s\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# timeout需要根据mqtt的keepalive时间来进行设置，设置为 keepalive * 1.2  ")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" client 240s  \n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" server 240s \n  maxconn "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mqtt tcp 协议代理配置")]),t._v("\nbackend mqtt_backend\n  mode tcp\n  stick-table "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" string len "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" size 100k expire 30m\n  stick on req.payload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0,0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", mqtt_field_value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connect,client_identifier"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增加 send-proxy 会把真实带IP透传给fluxmq，fluxmq配置中需要将proxy字段设置为true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# server fluxmq1 fluxmq1.com:1883 check send-proxy-v2")]),t._v("\n  server fluxmq1 fluxmq1.com:1883 check\n  server fluxmq2 fluxmq2.com:1883 check\n  server flmxmq3 fluxmq3.com:1883 check\nfrontend mqtt_servers\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("bind")]),t._v(" *:1883\n  mode tcp\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等待缓冲区填满，以便解析MQTT报文")]),t._v("\n  tcp-request inspect-delay 10s\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拒绝非MQTT协议的连接")]),t._v("\n  tcp-request content reject unless "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" req.payload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0,0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", mqtt_is_valid "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  default_backend mqtt_backend\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mqtt tls 协议代理配置")]),t._v("\nbackend mqtts_backend\n  mode tcp\n  balance roundrobin\n \n  server fluxmq1 fluxmq1.com:1883 check\n  server fluxmq2 fluxmq2.com:1883 check\n  server flmxmq3 fluxmq3.com:1883 check\n\nfrontend mqtts_frontend\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("bind")]),t._v(" *:1883 ssl crt /etc/haproxy/certs/server.pem \n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 双向认证")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bind *:8883 ssl ca-file /etc/haproxy/certs/cacert.pem crt /etc/haproxy/certs/server.pem verify required")]),t._v("\n  mode tcp\n  default_backend mqtts_backend\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#mqtt ws 代理配置")]),t._v("\nbackend mqtt_ws_backend\n  mode tcp\n  balance roundrobin\n  server fluxmq1 fluxmq1.com:8883 check\n  server fluxmq2 fluxmq2.com:8883 check\n  server flmxmq3 fluxmq3.com:8883 check\n\nfrontend mqtt_ws_frontend\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("bind")]),t._v(" *:8883 \n  mode tcp\n  default_backend mqtt_ws_backend\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mqtt wss 代理配置")]),t._v("\nbackend mqtt_wss_backend\n  mode tcp\n  balance roundrobin\n  server fluxmq1 fluxmq1.com:8883 check\n  server fluxmq2 fluxmq2.com:8883 check\n  server flmxmq3 fluxmq3.com:8883 check\n\nfrontend mqtt_wss_frontend\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("bind")]),t._v(" *:8883 ssl crt /etc/haproxy/certs/server.pem\n  mode tcp \n  default_backend mqtt_wss_backend\n")])])]),e("h2",{attrs:{id:"systemd-启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#systemd-启动"}},[t._v("#")]),t._v(" Systemd 启动")]),t._v(" "),e("blockquote",[e("p",[t._v("将下述文件按照对应操作系统的规范置于对应位置，根据haprxoy二进制文件的位置修改execStart和execReload中的路径，然后使用systemctl命令进行服务的启动。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Unit]\nDescription=HAProxy Load Balancer\nAfter=network-online.target rsyslog.service\nWants=network-online.target\n\n[Service]\nEnvironmentFile=-/etc/default/haproxy\nEnvironmentFile=-/etc/sysconfig/haproxy\nBindReadOnlyPaths=/dev/log:/var/lib/haproxy/dev/log\nEnvironment=\"CONFIG=/etc/haproxy/haproxy.cfg\" \"PIDFILE=/run/haproxy.pid\" \"EXTRAOPTS=-S /run/haproxy-master.sock\"\nExecStart=/usr/sbin/haproxy -Ws -f $CONFIG -p $PIDFILE $EXTRAOPTS\nExecReload=/usr/sbin/haproxy -Ws -f $CONFIG -c $EXTRAOPTS\nExecReload=/bin/kill -USR2 $MAINPID\nKillMode=mixed\nRestart=always\nSuccessExitStatus=143\nType=notify\n\n# The following lines leverage SystemD's sandboxing options to provide\n# defense in depth protection at the expense of restricting some flexibility\n# in your setup (e.g. placement of your configuration files) or possibly\n# reduced performance. See systemd.service(5) and systemd.exec(5) for further\n# information.\n\n# NoNewPrivileges=true\n# ProtectHome=true\n# If you want to use 'ProtectSystem=strict' you should whitelist the PIDFILE,\n# any state files and any other files written using 'ReadWritePaths' or\n# 'RuntimeDirectory'.\n# ProtectSystem=true\n# ProtectKernelTunables=true\n# ProtectKernelModules=true\n# ProtectControlGroups=true\n# If your SystemD version supports them, you can add: @reboot, @swap, @sync\n# SystemCallFilter=~@cpu-emulation @keyring @module @obsolete @raw-io\n\n[Install]\nWantedBy=multi-user.target\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);