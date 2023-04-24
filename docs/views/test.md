# 性能测试报告

## FluxMQ——高性能压测报告
前言
> 所有压测机器采用16c32配置，压测过程中关闭连接日志，避免日志IO影响程序吞吐量


![](https://files.mdnice.com/user/11463/98e06a5d-529e-4398-9e4d-07790b0ce5a2.png)

```shell
-Dname=$AppName  -Duser.timezone=Asia/Shanghai -Xmx28G -Xms28G -XX:MetaspaceSize=200M  -XX:+UseG1GC   -XX:MaxGCPauseMillis=200 -Xloggc:`$APP_HOME`/gc.log -XX:GCLogFileSize=10M -XX:NumberOfGCLogFiles=10 -XX:+UseGCLogFileRotation -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps -XX:+PrintGCDetails -XX:+DisableExplicitGC -verbose:gc
```
### 单机压测
> 仅仅部署一台MQTT节点进行压测

#### 连接数压测
| 连接数 | 推送 | 报文大小 | cpu | 内存内存(最大使用) |
| --- | --- | --- | --- | --- |
| 1000000 | 1000/s | --- | 25% | 9 G |

![](https://files.mdnice.com/user/11463/bdd97173-0b31-41cf-947c-a4c7f50a0518.png)

![](https://files.mdnice.com/user/11463/61214278-e953-4ae2-b1d2-ef8ff88357a0.png)


#### 广播压测
##### 10W TPS
| 订阅 | 推送 | 报文大小 | cpu | 内存内存(最大使用) |
| --- | --- | --- | --- | --- |
| 50000 | 2/s | 160B | 20% | 1.7G |
| 50000 | 2/s | 1024B | 22% | 1.9G |

**160B压测截图：**


![Dashboard](https://files.mdnice.com/user/11463/4f2f184c-15e3-4cfd-ba07-45f3f2fe9a65.png)

![MQTT](https://files.mdnice.com/user/11463/6f7b7d99-94eb-4a01-add3-e33dbdf34ff7.png)

![jvm](https://files.mdnice.com/user/11463/4ca519e7-d750-499a-bf18-b17da219c7b9.png)



**1024B压测截图：**

![Dashboard](https://files.mdnice.com/user/11463/97fa2801-24f3-4f2e-a0b7-84978ae0ff05.png)
![MQTT](https://files.mdnice.com/user/11463/5d4d7d8a-0bd5-4a59-913d-9715053f02fa.png)
![JVM](https://files.mdnice.com/user/11463/010d3241-3313-40bb-a294-1e6f0fc88501.png)




##### 20W TPS

| 订阅 | 推送 | 报文大小 | cpu | 内存(最大使用) |
| --- | --- | --- | --- | --- |
| 50000 | 4/s | 160B | 23% | 1.7G |
| 50000 | 4/s | 1024B | 24% | 1.9G |

**160B压测截图：**

![JVM](https://files.mdnice.com/user/11463/3b44f98f-5480-4c53-a8eb-ef8183a63ea7.png)
![MQTT](https://files.mdnice.com/user/11463/04c38c43-a0c4-4a6e-b0d8-fff9713a0434.png)
![MQTT](https://files.mdnice.com/user/11463/7b7c9f9f-6ff9-4df6-bf17-95cc19f72096.png)
![MQTT](https://files.mdnice.com/user/11463/e107ee00-0278-4158-86d1-b9f1a6419321.png)


**1024B压测截图：**

![Dashboard](https://files.mdnice.com/user/11463/b997bd45-2a34-4497-be2c-838152250461.png)
![MQTT](https://files.mdnice.com/user/11463/76600a1d-6371-4eb9-90be-45a5c6b662cd.png)
![MQTT](https://files.mdnice.com/user/11463/b0cfff34-9d6b-47d3-9511-b84c0971bdb5.png)
![JVM](https://files.mdnice.com/user/11463/5721edcd-b668-4fca-9852-59e071b6f3a1.png)



##### 40W TPS
| 订阅 | 推送 | 报文大小 | cpu | 内存(最大使用) |
| --- | --- | --- | --- | --- |
| 100000 | 4/s | 160B | 48% | 15G |
| 100000 | 4/s | 1024B | GC过长 已到瓶颈 |  |

**160B压测截图：**

![](https://files.mdnice.com/user/11463/a5234697-dc62-4ac6-9db8-0a6bf82ee066.png)

![](https://files.mdnice.com/user/11463/ea01cd06-3da5-4b59-a12b-158f868773a3.png)

![](https://files.mdnice.com/user/11463/f565b92c-7b7a-4687-ac63-2bb100081392.png)

![](https://files.mdnice.com/user/11463/56f70247-9dac-4d1a-8215-954c87fcea4e.png)

**1024B压测截图：**
> **如果追求极致性能 还是有很大优化空间**
![](https://files.mdnice.com/user/11463/1036dd53-d35b-49c3-95c6-fc8cdc6506c5.png)


#### 桥接压测（KAFKA）
##### 新建kafka数据源

![](https://files.mdnice.com/user/11463/28fe97a3-09dd-44c2-8843-546a5ba7e566.png)

##### 新建规则转发

![](https://files.mdnice.com/user/11463/768d46ae-62aa-40c2-bd42-bf97109339fd.png)

##### 启用规则

![](https://files.mdnice.com/user/11463/66be7564-ca49-4e70-9cd6-04975d3384c3.png)

##### 10W TPS
| 连接 | 推送 | 报文大小 | cpu | 内存(最大使用) |
| --- | --- | --- | --- | --- |
| 50000 | 2/s | 160B | 22% | 8G |
| 50000 | 2/s | 1024B | 31% | 10G |

**160B压测截图：**

![](https://files.mdnice.com/user/11463/26fb519c-59e8-4c4d-9721-f249392e86a5.png)

![](https://files.mdnice.com/user/11463/f02d6ae1-0589-41c0-bdba-a9786eb46d8d.png)

![](https://files.mdnice.com/user/11463/0a55f190-725c-4f17-ae53-ff0fbc61a4b4.png)

![](https://files.mdnice.com/user/11463/a568dc4f-8dfa-433a-94e5-d6cadbf41bec.png)


**1024B压测截图：**

![](https://files.mdnice.com/user/11463/3295af5a-055f-4c77-8e78-98d4ddea0066.png)

![](https://files.mdnice.com/user/11463/907c654b-59b5-4b09-a5dc-d066f7bbdad2.png)

![](https://files.mdnice.com/user/11463/e8df9050-4783-4864-bee1-f596e2fa4453.png)

![](https://files.mdnice.com/user/11463/cfcb2904-0e84-4b7b-b63d-d8042c434948.png)

##### 15W TPS
| 连接 | 推送 | 报文大小 | cpu | 内存(最大使用) |
| --- | --- | --- | --- | --- |
| 50000 | 3/s | 160B | 31% | 13G |
| 50000 | 3/s | 1024B | 37% | 15G |

**160B压测截图：**

![](https://files.mdnice.com/user/11463/deff7772-9995-4472-bf23-034ed7f7d274.png)


![](https://files.mdnice.com/user/11463/529d1bb2-ce1c-4a5a-b65e-e0dc47307ae1.png)

![](https://files.mdnice.com/user/11463/617b4035-222d-4019-8bf7-bdf75660483b.png)

![](https://files.mdnice.com/user/11463/32b7da0f-0fa6-4970-bdb0-dbcb69bd9dd6.png)

![](https://files.mdnice.com/user/11463/38bc6b11-5201-4d0f-a1c2-fe3a750e7970.png)

**1024B压测截图：**

![](https://files.mdnice.com/user/11463/e84e501a-3479-4ca0-baee-2546eb5ccd8a.png)


![](https://files.mdnice.com/user/11463/15f53720-1d76-4cfc-b742-7df80e722768.png)

![](https://files.mdnice.com/user/11463/a293c120-a220-4a3c-899a-a6f1e8ab0957.png)


![](https://files.mdnice.com/user/11463/ae67a584-0529-49e6-b892-6c977e584b7d.png)


![](https://files.mdnice.com/user/11463/57bd6345-6e57-40fe-acb8-2ff7b4feb6fe.png)

##### 20W TPS
| 连接 | 推送 | 报文大小 | cpu | 内存(最大使用) |
| --- | --- | --- | --- | --- |
| 50000 | 4/s | 160B | 35% | 14G |
| 50000 | 4/s | 1024B | 40% | 16G |

**160B压测截图：**

![](https://files.mdnice.com/user/11463/57a3c472-c1f0-4885-a763-15ba3dadda58.png)


![](https://files.mdnice.com/user/11463/ffc1b9fc-f1a9-43b7-8de1-9d95cc22da2c.png)


![](https://files.mdnice.com/user/11463/3bdb8eaf-6cfa-425f-8cd8-e1a493342e9e.png)

![](https://files.mdnice.com/user/11463/8870608d-22c3-404e-aec1-daec50cf682b.png)

**1024B压测截图：**

![](https://files.mdnice.com/user/11463/4d5ca0ae-1c17-4667-81b3-503b8b67e175.png)


![](https://files.mdnice.com/user/11463/9b57b3ba-97c1-435d-a205-6a64272cb931.png)

![](https://files.mdnice.com/user/11463/ffc389e6-1931-47e0-9d8d-5dc2e0acd305.png)

![](https://files.mdnice.com/user/11463/43b08cca-685e-4029-bb90-b30f30c34197.png)
## 对比EMQX


## FluxMQ——物联网数据传输解决方案的不二选择

当今世界，物联网技术已经成为了推动智能化生产、智慧城市和智能交通等众多领域发展的重要引擎。在这个过程中，高性能的数据传输解决方案至关重要。FluxMQ以其高性能、易于使用、高安全性和高可靠性等优势，成为了物联网数据传输解决方案的不二选择。

FluxMQ的广泛适用性使其可以应用于各种规模的物联网应用场景，从智能家居、工业自动化到智能交通、智慧城市等。它不仅能够提供高效、安全的数据传输，还具备强大的故障转移和负载均衡功能，可以保证数据传输的稳定性和可靠性。

FluxMQ还提供了简洁明了的API接口和丰富的文档资源，无论您是物联网初学者还是经验丰富的开发者，都能轻松上手并快速实现项目部署。因此，我们相信FluxMQ将成为物联网应用开发者的得力助手，为他们提供更加便捷、高效、可靠的物联网数据传输解决方案。

如果您正在寻找一款可靠且易于使用的MQTT网关产品，那么FluxMQ绝对是您不可错过的选择。需要体验产品的请添加`18510240791`微信。

## 最后
[系统演示地址](http://114.116.98.217:50000/#/dashboard )

[官网地址、点击查看（建设中）](http://114.115.243.242/#/)