# STORE
```yaml
store:
  storeType: MYSQL # MYSQL,LOCAL,MEMORY,POSTGRESQL
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/ignite2?useSSL=false
    username:  root
    password:  123456
```
<div class="table-2">

| 参数名      | 描述         | 默认值                                             |
|----------|------------|-------------------------------------------------|
| storeType    | 存儲类型       | 默认MEMORY                                         |
| datasource | 选择MYSQL存储时 | 选填                                              |
| url | 地址         | jdbc:mysql://127.0.0.1:3306/fluxmq?useSSL=false |
| username | 用户名        | root                                            |
| password | 密码         | 123456                                          |

</div>