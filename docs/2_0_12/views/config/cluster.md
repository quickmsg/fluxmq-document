# CLUSTER
> 集群相关配置

```yaml
cluster: # 集群配置
  localAddress: "127.0.0.1"
  addresses: [ "127.0.0.1"]
```

| 参数名 | 描述                              | 默认值         |
| --- |---------------------------------|-------------|
| addresses | 启动的集群节点集合                       | 使用Tcp方式     |
| localAddress | 指定本地连接器使用的ip地址，多网卡的时候配置         | 可选          |
| multicastGroup | 组播地址                            | 使用UDP组播时候使用 |
| multicastPort | 组播端口                            | 使用UDP组播时候使用 |
| workDirectory | 持久化目录(采用本地LOCA存储时生效，请参考store配置) | 默认 ~/fluxmq |

