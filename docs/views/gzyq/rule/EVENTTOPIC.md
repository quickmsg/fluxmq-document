# 事件主题
## 使用规则引擎 SQL 语句处理事件
规则引擎的 SQL 语句既可以处理消息(消息发布)，也可以处理事件(客户端上下线、客户端订阅等)。对于消息，FROM 子句后面直接跟主题名；对于事件，FROM 子句后面跟事件主题。
- 事件消息的主题以 "$EVENT." 开头，比如 "$EVENT.CONNECT","$EVENT.PING"
- PUBLISH消息的支持以通配符 "#" 匹配主题，如 "mq/#" 匹配 "mq" 层级下的所有主题
### FROM 子句可用的事件主题
| **事件主题名** | **释义**  |
| --- |---------|
| $EVENT.CONNECT | 连接完成    |
| $EVENT.DISCONNECT | 客户端断开连接 |
| $EVENT.CLOSE | 服务端关闭连接 |
| $EVENT.PING | 心跳      |
| $EVENT.PUBLISH | 消息发布    |
| $EVENT.PUBLISH_ACK | 消息发布确认  |
| $EVENT.SUBSCRIBE | 订阅      |
| $EVENT.UNSUBSCRIBE | 取消订阅    |
```SQL实例
SELECT
  clientid,
  username,
  keepalive
FROM
  "$EVENT.CONNECT"
```
```输出
{
  "username": "u_fluxmq",
  "keepalive": 60
  "clientid": "c_fluxmq"
}
```
## 使用规则引擎 SQL 语句处理消息发布
规则引擎的 SQL 语句可以处理消息发布。 在一个规则语句中，用户可以用 FROM 子句指定主题，当任何消息发布到指定的主题时都会触发该规则。当该FROM字句无法匹配到事件主题时，则默认是消息发布事件（PUBLISH）下的主题：
```SQL实例
SELECT
  msg.sendTime as time,
  clientId,
  topic,
  qos,
  msg,
  messageId
FROM
  "t/test"
```
```输出
{
  "time": "2023-01-01 00:00:00",
  "clientId": "fluxmq",
  "topic": "t/fluxmq",
  "qos": 1,
  "msg": "{\"sendTime\":\"2023-01-01 00:00:00\"}",
  "messageId": "fafd4a5f444a56f"
}
```