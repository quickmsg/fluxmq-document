# SHARE
```yaml
shareSubscribe:
  strategy: RANDOM 
  maxShareSubscribeSize: 100  
```


| 参数名                   | 描述     | 默认值                                     |
|-----------------------|--------|-----------------------------------------|
| strategy              | 共享转发策略 | - RANDOM 随机  <br/>  - HASH 客户端ID哈希<br/> |
| maxShareSubscribeSize | 最大订阅数  | 默认不限制                                   |