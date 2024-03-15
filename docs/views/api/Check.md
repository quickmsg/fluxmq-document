## 消息发布接口授权

> 兼容EMQX消息发布接口

| **参数名**      | **参数说明**                              |
|--------------|---------------------------------------|
| PATH         | POST  http://ip:8080/api/connection/check |
| Context-Type | application/json                      |

### Request Body

```json  
{                   
	"clientId": "A12312321313123"
}
 ```

### Response

> 不存在时返回空JSON

```json

[{
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
	"timestamp": "1690599987495",
	"clientId": "A1212313"
}]

```

