# 集成Prometheus+Grafana

## 采集Metrics
FluxMQ为提供Prometheus指标接口直接获取Metrics信息,具体指标详情参考下面[Metrics](metrics.md)

```text
http://{节点IP}:{HTTP端口}/public/metrics
```

## 与Grafana集成
下载后导入Grafana 即可:

[MQTT监控](https://fluxmq.obs.cn-east-3.myhuaweicloud.com/mqtt-info.json)

[JVM监控](https://fluxmq.obs.cn-east-3.myhuaweicloud.com/mqtt-jvm.json)