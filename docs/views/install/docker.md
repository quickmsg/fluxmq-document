# Docker部署

## 镜像拉取
```shell
docker pull fluxmq/enterprise:2.0.10
```

## 启动FluxMQ
> 默认会启动MQTT、MQTT over Websocket、HTTP端口
```shell
docker run -it -d  -v /app/logs:/logs  -p 8080:8080 -p 1883:1883 -p 8883:8883 fluxmq/enterprise:2.0.10
```

### 覆盖FluxMQ默认配置
> 配置文件目录：/app/config/config.yaml
#### FluxMQ配置文件，
```yaml
logLevel: INFO # 系统日志
logAll: true # 开启日志打印
pool:
  bossThreadSize: 1  # boss线程 默认=cpu核心数
  workThreadSize: 10  # work线程 默认=cpu核心数+2
  eventThreadSize: 16  # 业务线程数 默认=cpu核心数
  bufferSize: 512  #  ringBuffer大小
  eventMessageSize: 500000 # 最大缓冲消息数
mqtt: # tcp配置
  port: 1883 # mqtt端口号
  wiretap: false  # 二进制日志 前提是 logLevel = DEBUG
  messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)
  options:
    SO_BACKLOG: 2000
http: # http相关配置 端口固定60000
  port: 8080
  accessLog: false # http访问日志
  username: fluxmq # 访问用户名
  password: fluxmq # 访问密码
ws: # websocket配置
  port: 8883 # 端口
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
  password: fluxmq  
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
#### 启动FluxMQ
```shell
docker run -it -d  -v /app/logs:/app/logs /app/config/config.yaml:/app/config/config.yaml  -p 8080:8080 -p 1883:1883 -p 8883:8883 fluxmq/enterprise:2.0.10
```
## License配置

> 配置文件目录：/app/license.base64
```shell
docker run -it -d  -v /app/license.base64:/app/license.base64  -v /app/logs:/app/logs /app/config/config.yaml:/app/config/config.yaml  -p 8080:8080 -p 1883:1883 -p 8883:8883 fluxmq/enterprise:2.0.10
```


## 持久化
如果采用本地数据持久化模式：LOCAl,务必需要将容器目录~/fluxmq目录映射到宿主机

## 运行日志

运行位置在/logs下包含INFO、ERROR日志，启动容器可以将目录映射宿主机

## 管理页面
```shell
http://宿主机ip:8080/
```