# SQL-中可用字段

规则引擎字段说明

| **字段** | **描述** |
| --- | --- |
| id | MQTT消息ID |
| clientid | 消息来源ClientID |
| username | 消息来源用户名 |
| payload | MQTT消息体 |
| peerhost | 客户端IP地址 |
| topic | MQTT消息的主题 |
| qos | MQTT消息的Qos |
| flags | MQTT消息的Flags |
| headers | MQTT消息内部于流程处理的额外数据 |
| timestamp | 事件触发时间 |
| publish_received_at | PUBLISHI消息到达Boroker的时间 |
| node | 节点 |

