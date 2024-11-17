
# HTTP

```YAML
http: # http相关配置 端口固定60000
  port: 60000
  accessLog: false # http访问日志
  username: fluxmq # 访问用户名
  password: fluxmq # 访问密码
```
| 参数名 | 描述            | 默认值          |
| --- |---------------|--------------|
| host | 启动的host       | 可选，默认0.0.0.0 |
| accessLog | 开启http请求日志    | 可选，默认： false          |
| username | 管理后台登录用户名     | 必填项          |
| password | 管理后台登录密码      | 必填项          |
| ssl | ssl参数配置       | 可选           |
| idleTimeout | http连接的空间回收时间 | 可选，默认： -1    |
| bridge | 开启桥接          | 可选，默认： false |