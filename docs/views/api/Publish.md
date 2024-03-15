## 消息发布接口授权

> 兼容EMQX消息发布接口

| **参数名**      | **参数说明**                         |
|--------------|----------------------------------|
| PATH         | POST  http://ip:8080/api/publish |
| Context-Type | application/json                 |

### Request Body

```json  
{                   
	"topic": "test/test",
	"payload": "测试一下",
	"payload_encoding": "plain",
	"qos": 1,
	"retain": false
}
 ```

### Response
> 返回HTTP状态码200

