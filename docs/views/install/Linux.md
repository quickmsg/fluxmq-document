## 下载安装包
```shell
wget https://fluxmq.obs.cn-east-3.myhuaweicloud.com/fluxmq-2.0.12-linux.zip
```
## License
FluxMQ默认提供100连接的免费接入，安装包下载后自带免费License，如需更多接入数请联系我们获取商业License！

## Jar启动
> JVM参数在fluxmq.sh中，默认10个G堆内存启动
1. 执行add-executable-permission.sh脚本
```shell
sh add-executable-permission.sh
```
2. 运行服务

```shell
./fluxmq.sh
```

## 管理页面
> 版本>2.0.8 FluxMQ会默认包含UI，无需单独安装，其他低版本需要参考`管理系统`安装
```shell
http://ip:8080/
```
## Systemd启动
创建Systemd Service

```shell
./fluxmq-systemd.sh
```

启动服务
```shell
systemctl start fluxmq
```



