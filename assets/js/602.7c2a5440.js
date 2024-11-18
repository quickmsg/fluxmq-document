(window.webpackJsonp=window.webpackJsonp||[]).push([[602],{1131:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes部署"}},[t._v("#")]),t._v(" Kubernetes部署")]),t._v(" "),a("p",[t._v("fluxmq原生支持k8s，部署完成后可通过k8s的api进行动态索扩容操作。")]),t._v(" "),a("h2",{attrs:{id:"rbac资源创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rbac资源创建"}},[t._v("#")]),t._v(" RBAC资源创建")]),t._v(" "),a("p",[t._v("fluxmq需要访问k8s apiserver以获取集群内其他节点的连接信息。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ServiceAccount\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rbac.authorization.k8s.io/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Role\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiGroups")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Here are the resources you can access")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" pods\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" endpoints\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("verbs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# That is what you can do with them")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" get\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" list\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" watch\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RoleBinding\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rbac.authorization.k8s.io/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("roleRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Role\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rbac.authorization.k8s.io\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subjects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ServiceAccount\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n")])])]),a("h2",{attrs:{id:"configmap资源创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configmap资源创建"}},[t._v("#")]),t._v(" ConfigMap资源创建")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ConfigMap\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config.yaml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    allowEmptyMessage: true # 是否允许空消息传递规则引擎\n    allowAnonymousAccess: true # 是否允许匿名访问\n    pool:\n      # bossThreadSize: 4  # 默认 4 不建议配置\n      # workThreadSize: 20 # 默认cpu核心数 不建议配置\n      # eventThreadSize: 24 # 默认cpu核心数+2 不建议配置\n      bufferSize: 4096\n      eventMessageSize: 500000 # 业务线程数 默认=cpu核心数*10\n      waitStrategy: BLOCKING # \n      # lowWaterMark:  低水位： 默认32768 不建议配置\n      # highWaterMark: 高水位: 默认65536 不建议配置\n      # channelReadSize: 单连接读字节数/s ，默认不限制，不建议配置\n      # channelWriteSize: 单连接写字节数/s，默认不限制， 不建议配置\n    mqtt: ## 支持多端口\n      - port: 1883 # mqtt端口号\n        wiretap: false  # 二进制日志\n        messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)\n        proxy: false # 是否开启proxy协议\n        enableAuth: true #  是否开启认证\n        enableAcl: true  #  是否开启ACL  \n        enableBridge: true #  是否开启桥接（规则引擎） \n        maxSendWindowSize: 100 #  单个连接发送确认消息窗口（qos1+qos2）\n        maxReceiveWindowSize: 100 # 单个连接接收确认窗口（qos2）\n        maxConnectionPerSecond: 1000  # 连接速率 \n        sessionPersistence: false  # 开启session消息持久化，建议使用离线消息\n        maxSessionSize: 100  # 开启session后 单个连接持久化最大消息数\n      - port: 8999 # 端口\n        useWebsocket: true # 是否使用websocket\n        messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)\n        path: /mqtt # ws 的访问path mqtt.js请设置此选项\n        enableAuth: true #  是否开启认证\n        enableAcl: true  #  是否开启ACL  \n        enableBridge: true #  是否开启桥接（规则引擎） \n        maxSendWindowSize: 100 #  单个连接发送确认消息窗口（qos1+qos2）\n        maxReceiveWindowSize: 100 # 单个连接接收确认窗口（qos2）\n        maxConnectionPerSecond: 1000  # 连接速率 \n        sessionPersistence: false  # 开启session消息持久化，建议使用离线消息\n        maxSessionSize: 100  # 开启session后 单个连接持久化最大消息数\n    http: # http相关配置 端口固定60000\n      host: 127.0.0.1\n      port: 8080\n      accessLog: false # http访问日志\n      username: fluxmq # 访问用户名\n      password: fluxmq # 访问密码\n    cluster: # 集群配置\n      kubernetes:\n        service: fluxmq\n        namespace: default\n        master: https://kubernetes.default.svc.cluster.local:443\n        accountToken: /var/run/secrets/kubernetes.io/serviceaccount/token\n    meter:\n      meterType: PROMETHEUS # INFLUXDB , PROMETHEUS\n    eventbus:\n      compressed: true\n      batch: true\n      batchSize: 2000\n      batchDuration: 50\n    shareSubscribe:\n      strategy: RANDOM\n      maxShareSubscribeSize: 100\n    store:\n      storeType: MEMORY # MYSQL,LOCAL,MEMORY,POSTGRESQL\n      datasource:\n        url: jdbc:mysql://127.0.0.1:3306/fluxmq?useSSL=false\n        username:  root\n        password:  root\n    application:\n      name: fluxmq")]),t._v("\n")])])]),a("h2",{attrs:{id:"证书secret创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#证书secret创建"}},[t._v("#")]),t._v(" 证书secret创建")]),t._v(" "),a("p",[t._v("该secret用于存放license信息，如果没有购买商业版授权，则跳过该步骤，fluxmq镜像内置一个用于测试的免费license。\n将购买的证书用base64编码后，复制到下面的注释处。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Secret\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("license\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("license.base64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5q2k5aSE5pS+572uYmFzZTY057yW56CB5ZCO55qEbGljZW5zZeOAgg== "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   license.base64: 5q2k5aSE5pS+572uYmFzZTY057yW56CB5ZCO55qEbGljZW5zZeOAgg== # 使用授权证书license.base64中的内容进行base64编码，然后替换掉5q2k.....Agg==")]),t._v("\n")])])]),a("h2",{attrs:{id:"deployment资源创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment资源创建"}},[t._v("#")]),t._v(" Deployment资源创建")]),t._v(" "),a("p",[t._v("如果购买了授权证书，且添加了上述的secret，需要将此文件末尾的证书挂载描述注释取消。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app.kubernetes.io/name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app.kubernetes.io/name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceAccountName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq/enterprise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2.0.17\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("47100")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("47500")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49112")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10800")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48880")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 协议对外暴露端口，可根据需要自行调整")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1883")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8999")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /app/config\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("readOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 证书挂载点，如有购买证书，且添加了授权证书secret，可取消下面的注释")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - name: license")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mountPath: /app/license.base64")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# subPath: license.base64")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("configMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 证书挂载信息，如有购买证书，且添加了授权证书secret，可取消下面的注释")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - name: license")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# secret:")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# secretName: fluxmq-license ")]),t._v("\n")])])]),a("h2",{attrs:{id:"service资源创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service资源创建"}},[t._v("#")]),t._v(" Service资源创建")]),t._v(" "),a("p",[t._v("可根据对应云厂商的服务自行调整service类型。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app.kubernetes.io/name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluxmq\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dashboard\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mqtt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("tcp\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1883")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1883")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mqtt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ws\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prototol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8999")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8999")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);