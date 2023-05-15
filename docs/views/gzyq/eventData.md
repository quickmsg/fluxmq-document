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
    "time": "2022 12-22 12:00:00",
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
    "time": "2022 12-22 12:00:00",
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
    "time": "2022 12-22 12:00:00",
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
    "time": "2022 12-22 12:00:00",
    "clientId": "A1212313"
}
```
## PING数据
```心跳
{
    "clientId": "A1212313",
    "time": "2022 12-22 12:00:00"
}
```
## Disconnect数据
```断开连接
{
    "time": "2022 12-22 12:00:00",
    "clientId": "A1212313"
}
```
## Close数据
```关闭连接
{
    "messageId": 1,
    "reason": "",
    "time": "2022 12-22 12:00:00",
    "clientId": "A1212313"
}
```