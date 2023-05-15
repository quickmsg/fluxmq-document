# 规则引擎语法
创建数据转发规则时，需要编写SQL来解析和处理设备上报的JSON数据。本文主要介绍如何编写数据转发规则的SQL表达式。
## SQL语法
SQL语句由SELECT子句和WHERE子句组成，每个子句不能大于500个字符。SELECT子句和WHERE子句里的内容大小写敏感，SELECT和WHERE，AS等关键字大小写不敏感。
以设备消息上报为SQL源数据示例:
```
{
    "msg": {
      "temperature" : 40,
      "humidity" : 24
    },
    "messageId": 1,
    "topic": "test",
    "qos": 1,
    "retain": false,
    "time": "2022 12-22 12:00:00",
    "clientId": "A1212313"
}
```
在源数据中，消息中的msg是设备消息上报的数据，设置当设备上报数据中temperature大于38时触发条件，并筛选出clientId、msg，不需要任何其他字段时，SQL语句示例如下：
```
SELECT clientId as client_id, msg from "test/fluxmq" Where msg.temperature>38
```
当设备上报消息中temperature大于38度时，会触发转发，转发后的数据格式如下：
```
{
    "msg": {
      "temperature" : 40,
      "humidity" : 24
    },
    "client_id": "A1212313"
}
```
### WHERE
在WHERE子句中，您可以用JSON变量进行布尔运算，进行一些非空判断，然后使用AND， OR关键字把结果组合起来。
- **为空判断 IS NULL， IS NOT NULL**
为空判断可以用在WHERE子句中，如果JSON变量抽取不到数据，或者抽取到的数组为空，那么IS NULL成立，反之IS NOT NULL成立。
```
WHERE data IS NULL
WHERE data IS NOT NULL
```
- **包含判断 LIKE， NOT LIKE**
LIKE运算符可以用于WHERE子句中，如果目标值包含指定字符，则匹配成功，那么LIKE成立，反之NOT LIKE成立，注意指定字符与源数据匹配区分大小写
```
WHERE client.product_id LIKE '%B2%'"
WHERE client.product_id LIKE '%A2%'"
```
- **大于小于运算符 > <**
大于小于运算符可以用于WHERE子句中，当且仅当JSON变量的值为常量整数时，可以进行两个JSON变量的比较或者JSON变量和常量的比较。大于小于运算符也可以用于常量和常量的比较。也可以通过AND或者OR来连接起来运算
比如
```
WHERE data.number > 5 可以抽取出json表达式大于5的信息 
WHERE data.tag < 4 可以抽取出json表达式中小于4的信息 
WHERE data.number > 5 AND data.tag < 4 可以抽取出json表达式data.number大于5的信息并且json表达式data.tag中小于4的信息
```
- **等于运算符 =**
=运算符可以用于WHERE子句中，用于JSON变量和JSON变量的比较、JSON变量整数和整数常量的比较、JSON变量字符串和字符串常量的比较。如果两个JSON变量IS NULL成立，那么=比较结果为false。也可以通过AND或者OR来连接起来运算
```
WHERE data.number = 5 可以抽取出json表达式等于5的信息 
WHERE data.tag = 4 可以抽取出json表达式中等于4的信息 
WHERE data.number = 5 OR data.tag = 4 可以抽取出json表达式data.number等于5的信息或者json表达式data.tag中等于4的信息
```
### 使用限制
**表1** SQL语句使用限制
| **对象** | **限制** |
| --- | --- |
| FROM 子句 | 1个目标源 |
### 调试SQL语句
详情见 【创建规则及调试】 文档说明
