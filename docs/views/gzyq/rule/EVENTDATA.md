# 事件数据
> 系统内置的事件数据
## 发布数据
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
    "clientId": "A1212313"
}
```
## 连接数据
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
    "clientId": "A1212313"
}
```
## 订阅数据
> 支持多协议
```订阅
{
    "protocol":"MQTT",
    "messageId": 1,
    "subscribeTopics": [
        {
            "topicFilter": "test",
            "qos": 1
        }
    ],
    "timestamp": 1690599987495,
    "clientId": "A1212313"
}
```
## 取消订阅数据
```取消订阅
{
    "protocol":"MQTT",
    "messageId": 1,
    "topics": [
        "test"
    ],
    "timestamp": 1690599987495,
    "clientId": "A1212313"
}
```
## PING数据
```心跳
{
    "clientId": "A1212313",
    "timestamp": 1690599987495
}
```
## Disconnect数据
```断开连接
{
    "timestamp": 1690599987495,
    "clientId": "A1212313"
}
```
## Close数据
> 支持多协议
```关闭连接
{
    "protocol":"MQTT",
    "messageId": 1,
    "reason": "",
    "timestamp": 1690599987495,
    "clientId": "A1212313"
}
```