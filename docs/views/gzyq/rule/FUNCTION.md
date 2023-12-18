# 内置 SQL 函数
FluxMQ为了增强功能，提供了函数功能，可以通过函数来实现一些字符串处理,可以通过函数来转换想要的数据格式，注意基本类型转换，传入的字符串参数必须合法，并且在范围内

## 函数列表
| **函数名**             | **说明**                                                                         |
|---------------------|--------------------------------------------------------------------------------|
| json                | - 使用在SQL语句中，可以将嵌套的Json结构转换成字符串<br />- 使用在支持模板替换的想象中，比如数据库保存的SQL，KAFKA的TOPIC等地方 |
| bytes               | 将对象转成字节数组，会先将对象JSON化，再转成UTF8格式的字节数组                                            |
| int8                | 将对象转为Int8类型，相当于byte                                                            |
| int16               | 将对象转为Int16类型，相当于short                                                          |
| int32               | 将对象转为Int32类型，相当于int                                                            |
| int64               | 将对象转为Int64类型，相当于long                                                           |
| toDouble            | 将对象转为double类型                                                                  |
| hexStr              | 将对象转成HEX字符串， 会先将对象JSON化，再转成对象的16进制字符串                                          |
| date                | 格式化时间字符串：yyyy-MM-dd                                                            |
| datetime            | 格式化时间字符串：yyyy-MM-dd HH:mm:ss                                                   |
| dateToTimestamp     | yyyy-MM-dd 时间字符串转成时间戳                                                          |
| datetimeToTimestamp | yyyy-MM-dd HH:mm:ss 时间字符串转成时间戳                                                 |
| uuid                | 生成32位随机小写字符串                                                                   |
| uuidUpper           | 生成32位随机大写字符串                                                                   |

```java
json({"x":"1"}) = "{\"x\":\"1\"}"
bytes("abcd") = [97, 98, 99, 100]
int8("123") = 123
int16("123") = 123
int32("123") = 123
int64("123") = 123
toDouble("123") = 123.0
hexStr("test") = 74657374
date("1690599987495") = "2023-07-29"
datetime("1690599987495") = "2023-07-29 11:06:27"
dateToTimestamp("2023-07-29") = "1690599987495"
datetimeToTimestamp("2023-07-29 11:06:27") = "1690599987495"
uuid() = "56ea0797a6ed4d309bf71e0dd6ecd73c"
uuidUpper() = "09D27DE32DBF4AA19FD46339A31E184B"
```
<a name="OGC3L"></a>
## 函数使用
以发布消息为例，将消息保存到数据库中，发布的数据格式如下：
```json
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
```plsql
select * from "$EVENT.PUBLISH"
```
保存到数据库中的SQL语句如下:
```plsql
insert into 
	test(topic,qos,msg,clientId,timestamp) 
values
	('${test}',${qos},'${json(msg)}','${clientId}',${timestamp})
```
最终给 'msg' 字段处理成json字符串
```
"{\"temperature\": 40,\"humidity\": 24}"
```