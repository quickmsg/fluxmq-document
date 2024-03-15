# FluxMQ配置文件
完整配置文件如下：

```YAML
logLevel: DEBUG # 系统日志
logAll: true
pool:
  bossThreadSize: 1
  workThreadSize: 20
  eventThreadSize: 24
  bufferSize: 4096
  eventMessageSize: 500000 # 业务线程数 默认=cpu核心数*10
  # lowWaterMark:  低水位： 默认32768
  # highWaterMark: 高水位: 默认65536
  # globalReadSize:  全局读字节数/s 默认不限制
  # globalWriteSize: 全局写字节数/s 默认不限制
  # channelReadSize: 单连接读字节数/s 默认不限制
  # channelWriteSize: 单连接写字节数/s 默认不限制
mqtt: # tcp配置
  port: 1887 # mqtt端口号
  wiretap: false  # 二进制日志 前提是 logLevel = DEBUG
  messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)
  options:
    SO_RCVBUF: 65536
    SO_BACKLOG: 2000
http: # http相关配置 端口固定60000
  host: 127.0.0.1
  port: 60000
  accessLog: false # http访问日志
  username: fluxmq # 访问用户名
  password: fluxmq # 访问密码
ws: # websocket配置
  port: 8999 # 端口
  messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)
  path: /mqtt # ws 的访问path mqtt.js请设置此选项
cluster: # 集群配置
  localAddress: 127.0.0.1
  addresses: ["127.0.0.1" ]
meter:
  meterType: PROMETHEUS # INFLUXDB , PROMETHEUS
elasticsearch:
  url: 127.0.0.1:9200
  userName: elastic
  password: fluxmq
eventbus:
  compressed: true
  batch: true
  batchSize: 2000
  batchDuration: 50
shareSubscribe:
  strategy: RANDOM
  maxShareSubscribeSize: 100
store:
  storeType: LOCAL # MYSQL,LOCAL
  datasource:
    url: jdbc:mysql://121.40.92.152:3306/ignite2?useSSL=false
    username:  root
    password:  lxr7293209
application:
  name: fluxmq
license: license.base64  

```