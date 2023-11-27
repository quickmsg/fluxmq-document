# 事件数据
> 系统内置的事件数据
## 发布数据 <$EVENT.PUBLISH>
> 支持多协议
```发布
{
    "protocol":"MQTT",
    "payload": {},
    "messageId": 1,
    "topic": "test",
    "qos": 1,
    "retain": false,
    "timestamp": 1690599987495,
    "clientIp": "183.136.225.31",
    "nodeIp": "192.168.0.1",
    "clientId": "dev1212313"
}
```
## 连接数据 <$EVENT.CONNECT>
> 支持多协议
```连接
{
    "protocol":"MQTT",
    "clientIp": "192.168.0.100",
    "nodeIp": "127.0.0.1",
    "version": "MQTT_3_1",
    "keepalive": 120,
    "cleanSession": false,
    "auth": {
        "username": "fluxmq",
        "password": "fluxmq"
    },
    "will": {
        "isRetain": false,
        "willTopic": "willTest",
        "willQos": 1,
        "willMessage": ""
    },
    "timestamp": 1690599987495,
    "clientId": "dev1212313"
}
```
## 订阅数据 <$EVENT.SUBSCRIBE>
> 支持多协议
```订阅
{
    "protocol":"MQTT",
    "messageId": 1,
    "topic": "test",
    "qos": 1,
    "timestamp": 1690599987495,
    "clientId": "dev1212313",
     "clientIp": "183.136.225.31",
    "nodeIp": "192.168.0.1"
}
```
## 取消订阅数据 <$EVENT.UNSUBSCRIBE>
```取消订阅
{
    "protocol":"MQTT",
    "messageId": 1,
    "topic": "test" ,
    "timestamp": 1690599987495,
    "clientId": "dev1212313",
     "clientIp": "183.136.225.31",
    "nodeIp": "192.168.0.1"
}
```
## PING数据 <$EVENT.PING>
```心跳
{
    "clientId": "dev1212313",
    "timestamp": 1690599987495,
    "clientIp": "183.136.225.31",
    "nodeIp": "192.168.0.1"
}
```
## Disconnect数据 <$EVENT.DISCONNECT>
```断开连接
{
    "timestamp": 1690599987495,
    "clientId": "dev1212313",
    "clientIp": "183.136.225.31",
    "nodeIp": "192.168.0.1"
}
```
## Close数据 <$EVENT.CLOSE>
> 支持多协议
```关闭连接
{
    "protocol":"MQTT",
    "messageId": 1,
    "reason": "枚举值",
    "timestamp": 1690599987495,
    "clientId": "dev1212313",
    "clientIp": "183.136.225.31",
    "nodeIp": "192.168.0.1"
}
```



| **原因类型**       | **说明**                 |
|----------------|------------------------|
| normal         | 客户端主动关闭  |
| kicked         | 服务端主动关闭              |
| timeout        | 客户端心跳超时关闭            |
| not_authorized | 认证失败关闭             |
| disconnect     | 客户端主动关闭     |
| other_kicked   | 集群互踢               |

## ACK回复 <$EVENT.ACK>

```ACK回复
{
    "messageId":10001,
    "clientId": "A1212313",
    "payload": {},
    "topic": "test",
    "qos": 1,
    "timestamp": "1690599987495",
    "clientIp": "183.136.225.31",
    "nodeIp": "192.168.0.1"
}
```

## 离线消息数据 <$EVENT.OFFLINE>
```离线消息数据
{
    "protocol":"MQTT",
    "payload": {},
    "messageId": 1,
    "topic": "test",
    "qos": 1,
    "retain": false,
    "timestamp": 1690599987495,
    "clientIp": "183.136.225.31",
    "nodeIp": "192.168.0.1",
    "clientId": "dev1212313"
}
```