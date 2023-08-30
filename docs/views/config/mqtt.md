# MQTT

## MQTT over TCP

```YAML
mqtt: # tcp配置
  port: 1887 # mqtt端口号
  wiretap: false  # 二进制日志 前提是 smqtt.logLevel = DEBUG
  messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)
  options:
    SO_BACKLOG: 2000
```

| 参数名 | 描述 | 默认值 |
| --- | --- | --- |
| port | mqtt启动的监听端口 | 必填项 |
| wiretap | 打印二进制日志，生产环境禁止使用 | 必填项 |
| messageMaxSize | 单个推送最大的负载字节数 | 必填项 |
| options | netty 的options配置 | 不推荐配置 |
| childOptions | netty 的child channel options配置 | 不推荐配置 |

## MQTTS

```YAML
mqtts: # tcp配置
  port: 1883 # mqtt端口号
  wiretap: false  # 二进制日志 前提是 smqtt.logLevel = DEBUG
  messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)
  options:
    SO_BACKLOG: 2000
  ssl:
    crt: fluxmq.pem #公钥
    key: fluxmq.key #私钥
    ca:  fluxmq.ca # ca证书
     
```

| 参数名 | 描述 | 默认值 |
| --- | --- | --- |
| port | mqtt启动的监听端口 | 必填项 |
| wiretap | 打印二进制日志，生产环境禁止使用 | 必填项 |
| messageMaxSize | 单个推送最大的负载字节数 | 必填项 |
| options | netty 的options配置 | 不推荐配置 |
| childOptions | netty 的child channel options配置 | 不推荐配置 |
| ssl参数 | ssl启动参数 | 必填 |

## MQTT over WEBSOCKET

```YAML
ws: # tcp配置
  port: 8883 # mqtt端口号
  wiretap: false  # 二进制日志 前提是 smqtt.logLevel = DEBUG
  messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)
  options:
    SO_BACKLOG: 2000
     
```

| 参数名 | 描述 | 默认值  |
| --- | --- |------|
| port | mqtt启动的监听端口 | 必填项  |
| path | ws请求的path | 必填项  |
| wiretap | 打印二进制日志，生产环境禁止使用 | 必填项  |
| messageMaxSize | 单个推送最大的负载字节数 | 必填项  |
| options | netty 的options配置 | 不推荐配置 |
| childOptions | netty 的child channel options配置 | 不推荐配置 |
| ssl参数 | ssl启动参数 | 选填   |