# FluxMQ配置文件
完整配置文件如下：

```YAML
logLevel: INFO # 系统日志
logAll: true # 开启日志打印
pool:
  bossThreadSize: 1  # boss线程 默认=cpu核心数
  workThreadSize: 10  # work线程 默认=cpu核心数+2
  eventThreadSize: 16  # 业务线程数 默认=cpu核心数
  bufferSize: 512  #  ringBuffer大小
  eventMessageSize: 500000 # 最大缓冲消息数
  # globalReadWriteSize: 10000000,100000000  全局读写大小限制
  # channelReadWriteSize: 10000000,100000000 单个channel读写大小限制
mqtt: # tcp配置
  port: 1887 # mqtt端口号
  wiretap: false  # 二进制日志 前提是 smqtt.logLevel = DEBUG
  messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)
  options:
    SO_BACKLOG: 2000
http: # http相关配置 端口固定60000
  port: 60000
  accessLog: false # http访问日志
  username: fluxmq # 访问用户名
  password: fluxmq # 访问密码
ws: # websocket配置
  port: 8999 # 端口
  path: /mqtt # ws 的访问path mqtt.js请设置此选项a
  messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)
cluster: # 集群配置
  localAddress: "192.168.0.92"
  addresses: [ "192.168.0.92","192.168.0.191" ,"192.168.0.73"]
meter:
  meterType: PROMETHEUS # INFLUXDB , PROMETHEUS
elasticsearch:
  url: 114.116.8.76:9200
  userName: elastic
  password: smqttx  
eventbus:
  compressed: true # 是否压缩
  batch: true # 是否批量
  batchSize: 2000 # 单次批量消息数
  batchDuration: 50 # 单次发送间隔
  async: true # 是否异步发送
  asyncThreadSize: 4 # 异步发送线程
  asyncMessageSize: 200000  # 异步发送队列大小
store:
  storeType: MYSQL # MYSQL,LOCAL
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/ignite2?useSSL=false
    username:  root
    password:  123456
shareSubscribe:
  strategy: RANDOM 
  maxShareSubscribeSize: 100  
application:
  name: fluxmq
```