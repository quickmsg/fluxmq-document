# 规则引擎语法

## SQL语法
### SELECT 查询
> SELECT <字段名> FROM <主题> [WHERE <条件>]

- SELECT 选择需要转发或操作的字段
- FROM 订阅某个主题
- WHERE 对SELECT选择出来的字段进行条件过滤

示例：
```
SELECT device_id as deviceid FROM "/*/report" WHERE product_id = 'lamp'
```
### 遍历语法
> FOREACH <字段名> [DO <条件>] [INCASE <条件>] FROM <主题> [WHERE <条件>]

- **FOREACH **选择数组类型数据中需要操作的字段；
- **DO** 对FOREACH选择出来的数组元素/字段进行变换，并选择需要内容；
- **INCASE **对DO选择出来的字段进行条件过滤

示例：
```
FROEACH
          paylaod. metrics  as m  ## 选择数组类型
DO                                ##转换数组元素
           deviceid,
            m,temp as temp,
            m.humi as humi
INCASE                            ##进行条件过滤
          m.bathtag =1
FROM "/*/report"                  ##选择某个主题
```
### 运算符号
| **函数名** | **描述** | **返回值** |
| --- | --- | --- |
| + | 加法/字符串拼接 | 和/或拼接后的字符串 |
| - | 减法 | 差值 |
| * | 乘法 | 乘积 |
| / | 除法 | 商值 |
| div | 除法取整 | 整数商值 |
| mod | 取模 | 模 |
| = | 比较两者是否完全相等 | true/false |

### 比较符号
| **函数名** | **描述** | **返回值** |
| --- | --- | --- |
| > | 大于 | true/false |
| < | 小于 | true/false |
| <= | 小于等于 | true/false |
| >= | 大于等于 | true/false |
| != | 不等于 | true/false |

