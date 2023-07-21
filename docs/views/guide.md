# FluxMQ 启动配置
> 配置文件支持Yaml、Properties形式，下面以Yaml形式为例，介绍各配置项的含义和配置方法
## 服务端配置

```yaml
logLevel: INFO # 系统日志
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
  host: 114.116.8.76
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
  compressed: true
  batch: true
  batchSize: 2000
  batchDuration: 50
shareSubscribe:
  strategy: RANDOM 
  maxShareSubscribeSize: 100  
application:
  name: fluxmq
  version: 2.0.0
```

## 1. pool配置
| 参数名 | 描述                                  | 默认值     |
| --- |-------------------------------------|---------|
| **bossThreadSize** | netty的bossThreadSize，一般配置1~4 cpu即可  | 必填项     |
| **workThreadSize** | netty的workThreadSize，处理io事件         |  默认cpu     |
| **eventThreadSize** | MQTT事件消费线程，主要处理规则引擎等耗时操作，           | 默认cpu+2 |
| **bufferSize** | MQTT事件消费RIngBufer大小                 | 默认1024  |
| **eventMessageSize** | 全局读写限制：每秒字节数                        | 默认50000 |
| **globalReadWriteSize** | 全局读写限制：每秒字节数读,写10000000,100000000   | 不推荐配置   |
| **channelReadWriteSize** | 单个连接读写限制：每秒字节数读,写10000000,100000000 | 不推荐配置   |
| **lowWaterMark** | 默认 32768                            | 不推荐配置   |
| **highWaterMark** | 当写入缓存字节数达到此值，默认 65536               | 不推荐配置   |

## 2. mqtt配置
| 参数名 | 描述 | 默认值 |
| --- | --- | --- |
| port | mqtt启动的监听端口 | 必填项 |
| wiretap | 打印二进制日志，生产环境禁止使用 | 必填项 |
| messageMaxSize | 单个推送最大的负载字节数 | 必填项 |
| options | netty 的options配置 | 不推荐配置 |
| childOptions | netty 的child channel options配置 | 不推荐配置 |

## 3. mqtts配置
| 参数名 | 描述 | 默认值 |
| --- | --- | --- |
| port | mqtt启动的监听端口 | 必填项 |
| wiretap | 打印二进制日志，生产环境禁止使用 | 必填项 |
| messageMaxSize | 单个推送最大的负载字节数 | 必填项 |
| options | netty 的options配置 | 不推荐配置 |
| childOptions | netty 的child channel options配置 | 不推荐配置 |
| ssl参数 | ssl启动参数 | 必填 |

## 4. http配置
| 参数名 | 描述 | 默认值 |
| --- | --- | --- |
| port | mqtt启动的监听端口 | 必填项 |
| host | 启动的host | 必填项 |
| accessLog | 开启http请求日志 | 必填项 |
| username | 管理后台登录用户名 | 必填项 |
| password | 管理后台登录密码 | 必填项 |
| ssl | ssl参数配置 | 可选 |

## 5. websocket配置
| 参数名 | 描述 | 默认值 |
| --- | --- | --- |
| port | mqtt启动的监听端口 | 必填项 |
| path | ws请求的path | 必填项 |
| wiretap | 打印二进制日志，生产环境禁止使用 | 必填项 |
| messageMaxSize | 单个推送最大的负载字节数 | 必填项 |
| options | netty 的options配置 | 不推荐配置 |
| childOptions | netty 的child channel options配置 | 不推荐配置 |
| ssl参数 | ssl启动参数 | 必填 |

## 6. cluster配置
| 参数名 | 描述 | 默认值 |
| --- | --- | --- |
| addresses | 启动的集群节点集合 | 使用Tcp方式 |
| localAddress | 指定本地连接器使用的ip地址，多网卡的时候配置 | 可选 |
| multicastGroup | 组播地址 |使用UDP组播时候使用，不推荐 |
| multicastPort | 组播端口 |  |

## 7. ElasticSearch配置
| 参数名      | 描述   | 默认值            |
|----------|------|----------------|
| url      | es地址 | 127.0.0.1:9200 |
| username | 用户名  | elastic        |
| password | 密码   | elastic        |


## 8. Application配置
| 参数名  | 描述       | 默认值                                        |
|------|----------|--------------------------------------------|
| name | 应用名称     | 修改后影响Metrics的Application，以及Dashboard里的节点名称 |
| version | FluxMQ版本 | Dashboard显示的版本                             |

## 9. EventBus配置

| 参数名  | 描述         | 默认值   |
|------|------------|-------|
| compressed | 是否压缩       | 开启    |
| batch | 是否批量       | 开启    |
| batchSize | 单次批量传输size | 1000  |
| batchDuration | 批量窗口       | 50 ms |

## 10. ShareSubscribe配置

| 参数名  | 描述        | 默认值    |
|------|-----------|--------|
| strategy | 策略        | RANDOM |
| maxShareSubscribeSize | 最大订阅数     | 不限制    |