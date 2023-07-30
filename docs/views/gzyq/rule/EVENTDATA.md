# 事件数据
> 系统内置的事件数据
## 发布数据
```发布
{
    "msg": {},
    "messageId": 1,
    "topic": "test",
    "qos": 1,
    "retain": false,
    "timestamp": 1690599987495,
    "clientId": "A1212313"
}
```
## 连接数据
```连接
{
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
```订阅
{
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
```关闭连接
{
    "messageId": 1,
    "reason": "",
    "timestamp": 1690599987495,
    "clientId": "A1212313"
}
```
## 扩展协议
```扩展协议
{
    "protocol": "I1",
    "cmd": "PUBLISH",
    "messageId": 0,
    "time": "2023-07-11 21:59:23",
    "clientId": "clientId",
    "nodeIp": "127.0.0.1",
    "clientIp": "127.0.0.1:19999",
    "body": "body"
}
```