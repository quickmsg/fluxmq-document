# 函数
> FluxMQ为了增强功能，提供了函数功能，可以通过函数来实现一些字符串处理,可以通过函数来转换想要的数据格式

## 函数列表
| 函数名称     | 说明                                                                         |
|----------|----------------------------------------------------------------------------|
| json     | - 使用在SQL语句中，可以将嵌套的Json结构转换成字符串 <br/> - 使用在支持模板替换的想象中，比如数据库保存的SQL，KAFKA的TOPIC等地方 |
| bytes    | 将对象转成字节数组，会先将对象JSON化，再转成UTF8格式的字节数组                                        |
| int8     | 将对象转为Int8类型，相当于byte                                                        |
| int16    | 将对象转为Int16类型，相当于short                                                      |
| int32    | 将对象转为Int32类型，相当于int                                                        |
| int64    | 将对象转为Int64类型，相当于long                                                       |
| toDouble | 将对象转为double类型                                                              |
| hexStr   | 将对象转成HEX字符串， 会先将对象JSON化，再转成对象的16进制字符串                                      |
| date   | 格式化时间字符串：yyyy-MM-dd                                                        |
| datetime   | 格式化时间字符串：yyyy-MM-dd HH:mm:ss                                               |
| dateToTimestamp   | yyyy-MM-dd 时间字符串转成时间戳                                                              |
| datetimeToTimestamp   | yyyy-MM-dd HH:mm:ss 时间字符串转成时间戳                                       |


## 函数使用
### SQL语句中使用函数
> 以发布消息为例，将消息转成JSON字符串，然后插入到数据库中，SQL如下：
```
select json(msg),qos,topic,clientId,timestamp from "test/#"
```
经过上面SQL处理后，数据格式如下：
```
{
    "msg": "{\"temperature\": 40,\"humidity\": 24}",
    "qos": 1,
    "topic": "test/fluxmq",
    "clientId": "A1212313",
    "timestamp": 1632931200000
}
```
### 模板中使用函数
下面是可以使用函数的地方：

| 使用地方      | 说明 |
|-----------|------|
| 数据库保存的SQL | 通过函数可以将消息转成JSON字符串，然后插入到数据库中 |
| KAFKA的TOPIC | 通过函数可以将消息转成JSON字符串，然后发送到KAFKA的TOPIC中 |
| MQTT的TOPIC | 通过函数可以将消息转成JSON字符串，然后发送到MQTT的TOPIC中 |
| ROCKETMQ的TOPIC | 通过函数可以将消息转成JSON字符串，然后发送到ROCKETMQ的TOPIC中 |
| ROCKETMQ的TAG | 通过函数可以将消息转成JSON字符串，然后发送到ROCKETMQ的TOPIC中 |
| RABBITMQ的QUEUE | 通过函数可以将消息转成JSON字符串，然后发送到RABBITMQ的QUEUE中 |
| REDIS的TOPIC | 通过函数可以将消息转成JSON字符串，然后发送到REDIS的TOPIC中 |
| PULSAR的TOPIC | 通过函数可以将消息转成JSON字符串，然后发送到PULSAR的TOPIC中 |

> 以发布消息为例，将消息保存到数据库中，模板如下：
发布的数据格式如下：
```
{
    "msg": "{
    　　"temperature": 40，
    　　"humidity": 24
    },
    "qos": 1,
    "topic": "test/fluxmq",
    "clientId": "A1212313",
    "timestamp": 1632931200000
}
```
SQL语句如下：
```
select *　from "test/#"
```
保存到数据库中的SQL语句如下:
```
insert into test(topic,qos,msg,clientId,timestamp) 
values('${test}',${qos},'${json(msg)}','${clientId}',${timestamp})
```
最终给msg字段处理成json字符串
```text
{\"temperature\": 40,\"humidity\": 24}
```