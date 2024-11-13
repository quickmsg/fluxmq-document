# Kubernetes部署
fluxmq原生支持k8s，部署完成后可通过k8s的api进行动态索扩容操作。


## RBAC资源创建
fluxmq需要访问k8s apiserver以获取集群内其他节点的连接信息。
```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: fluxmq
  namespace: default
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: fluxmq
  namespace: default
rules:
- apiGroups:
  - ""
  resources: # Here are the resources you can access
  - pods
  - endpoints
  verbs: # That is what you can do with them
  - get
  - list
  - watch
---
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: fluxmq
  namespace: default
roleRef:
  kind: Role
  name: fluxmq
  apiGroup: rbac.authorization.k8s.io
subjects:
- kind: ServiceAccount
  name: fluxmq
  namespace: default
```

## ConfigMap资源创建
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: fluxmq
data:
  config.yaml: |
    allowEmptyMessage: true # 是否允许空消息传递规则引擎
    allowAnonymousAccess: true # 是否允许匿名访问
    pool:
      # bossThreadSize: 4  # 默认 4 不建议配置
      # workThreadSize: 20 # 默认cpu核心数 不建议配置
      # eventThreadSize: 24 # 默认cpu核心数+2 不建议配置
      bufferSize: 4096
      eventMessageSize: 500000 # 业务线程数 默认=cpu核心数*10
      waitStrategy: BLOCKING # 
      # lowWaterMark:  低水位： 默认32768 不建议配置
      # highWaterMark: 高水位: 默认65536 不建议配置
      # channelReadSize: 单连接读字节数/s ，默认不限制，不建议配置
      # channelWriteSize: 单连接写字节数/s，默认不限制， 不建议配置
    mqtt: ## 支持多端口
      - port: 1883 # mqtt端口号
        wiretap: false  # 二进制日志
        messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)
        proxy: false # 是否开启proxy协议
        enableAuth: true #  是否开启认证
        enableAcl: true  #  是否开启ACL  
        enableBridge: true #  是否开启桥接（规则引擎） 
        maxSendWindowSize: 100 #  单个连接发送确认消息窗口（qos1+qos2）
        maxReceiveWindowSize: 100 # 单个连接接收确认窗口（qos2）
        maxConnectionPerSecond: 1000  # 连接速率 
        sessionPersistence: false  # 开启session消息持久化，建议使用离线消息
        maxSessionSize: 100  # 开启session后 单个连接持久化最大消息数
      - port: 8999 # 端口
        useWebsocket: true # 是否使用websocket
        messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)
        path: /mqtt # ws 的访问path mqtt.js请设置此选项
        enableAuth: true #  是否开启认证
        enableAcl: true  #  是否开启ACL  
        enableBridge: true #  是否开启桥接（规则引擎） 
        maxSendWindowSize: 100 #  单个连接发送确认消息窗口（qos1+qos2）
        maxReceiveWindowSize: 100 # 单个连接接收确认窗口（qos2）
        maxConnectionPerSecond: 1000  # 连接速率 
        sessionPersistence: false  # 开启session消息持久化，建议使用离线消息
        maxSessionSize: 100  # 开启session后 单个连接持久化最大消息数
    http: # http相关配置 端口固定60000
      host: 127.0.0.1
      port: 8080
      accessLog: false # http访问日志
      username: fluxmq # 访问用户名
      password: fluxmq # 访问密码
    cluster: # 集群配置
      kubernetes:
        service: fluxmq
        namespace: default
        master: https://kubernetes.default.svc.cluster.local:443
        accountToken: /var/run/secrets/kubernetes.io/serviceaccount/token
    meter:
      meterType: PROMETHEUS # INFLUXDB , PROMETHEUS
    eventbus:
      compressed: true
      batch: true
      batchSize: 2000
      batchDuration: 50
    shareSubscribe:
      strategy: RANDOM
      maxShareSubscribeSize: 100
    store:
      storeType: MEMORY # MYSQL,LOCAL,MEMORY,POSTGRESQL
      datasource:
        url: jdbc:mysql://127.0.0.1:3306/fluxmq?useSSL=false
        username:  root
        password:  root
    application:
      name: fluxmq
```
## 证书secret创建
该secret用于存放license信息，如果没有购买商业版授权，则跳过该步骤，fluxmq镜像内置一个用于测试的免费license。
将购买的证书用base64编码后，复制到下面的注释处。
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: fluxmq-license
data:
  license.base64: 5q2k5aSE5pS+572uYmFzZTY057yW56CB5ZCO55qEbGljZW5zZeOAgg== # 将 5q2k5aSE5pS+572uYmFzZTY057yW56CB5ZCO55qEbGljZW5zZeOAgg== 替换为授权证书license.base64中的内容
```
## Deployment资源创建
如果购买了授权证书，且添加了上述的secret，需要将此文件末尾的证书挂载描述注释取消。
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fluxmq
  labels:
    app: fluxmq
    app.kubernetes.io/name: fluxmq
spec:
  replicas: 3
  selector:
    matchLabels:
      app: fluxmq
  template:
    metadata:
      labels:
        app: fluxmq
        app.kubernetes.io/name: fluxmq
    spec:
      serviceAccountName: fluxmq
      containers:
      - name: fluxmq
        image: fluxmq/enterprise:2.0.18
        ports:
        - containerPort: 47100
        - containerPort: 47500
        - containerPort: 49112
        - containerPort: 10800
        - containerPort: 48880
        - containerPort: 8080
        # 协议对外暴露端口，可根据需要自行调整
        - containerPort: 1883
        - containerPort: 8999
        volumeMounts:
        - name: config
          mountPath: /app/config
          readOnly: true  
        # 证书挂载点，如有购买证书，且添加了授权证书secret，可取消下面的注释
        # - name: license
          # mountPath: /app/license.base64
          # subPath: license.base64
      volumes:
      - name: config
        configMap:
          name: fluxmq
      # 证书挂载信息，如有购买证书，且添加了授权证书secret，可取消下面的注释
      # - name: license
        # secret:
          # secretName: fluxmq-license 
```

## Service资源创建
可根据对应云厂商的服务自行调整service类型。
```yaml
apiVersion: v1
kind: Service
metadata:
  name: fluxmq
spec:
  selector:
    app.kubernetes.io/name: fluxmq
  ports:
    - name: dashboard
      protocol: TCP
      port: 8080
      targetPort: 8080
    - name: mqtt-tcp
      protocol: TCP
      port: 1883
      targetPort: 1883
    - name: mqtt-ws
      prototol: TCP
      port: 8999
      targetPort: 8999
```