# 持久化

> 持久化的数据包含如下：

- fluxmq集群中运行的数据：保留、延迟、会话消息、ACK未确认消息。
- fluxmq集群所有的web配置持久化。

## 配置

> 默认使用LOCAL方式进行存储，可以使用MYSQL进行存储，配置如下：

### LOCAL

```yaml
store:
  storeType: LOCAL # MYSQL,LOCAL
```

### MYSQL

下载SQL语句初始化FluxMQ持久化所需要的表结构：

[点击下载初始化表SQL](https://fluxmq.obs.cn-east-3.myhuaweicloud.com/fluxmq-2.0.7.sql)


```yaml
store:
  storeType: MYSQL # MYSQL,LOCAL
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/ignite2?useSSL=false
    username: root
    password: 123456
```

| 参数名        | 描述         | 默认值                                              |
|------------|------------|--------------------------------------------------|
| storeType  | 存儲类型       | 默认LOCAL                                          |
| datasource | 选择MYSQL存储时 | 选填                                               |
| url        | 地址         | jdbc:mysql://127.0.0.1:3306/ignite2?useSSL=false |
| username   | 用户名        | root                                             |
| password   | 密码         | 123456                                           |

