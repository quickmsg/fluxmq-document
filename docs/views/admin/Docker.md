# Docker 安装

## 拉取镜像
```bash

docker pull fluxmq/fluxmq-admin:latest

```

## 启动
> 先启动FluxMQ集群,并且配置FluxMQ的HTTP的负载均衡代理端口(也可以直接使用FluxMQ节点的Http端口)为: 8080
fluxmq_address 设置为：负载均衡代理的地址:端口 || FluxMQ节点的地址:端口
```bash
docker run -e fluxmq_address="123.249.9.130:60000" -it -p 8089:80 fluxmq/admin
```
## 访问
> 浏览器访问：http://宿主机ip:8089
![img_1.png](../../assets/images/img_LOGIN.png)