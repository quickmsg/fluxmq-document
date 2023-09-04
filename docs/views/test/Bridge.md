


![image.png](../../assets/images/test/img.png)
```shell
-Dname=$AppName  -Duser.timezone=Asia/Shanghai -Xmx28G -Xms28G -XX:MetaspaceSize=200M  -XX:+UseG1GC   -XX:MaxGCPauseMillis=200 -Xloggc:`$APP_HOME`/gc.log -XX:GCLogFileSize=10M -XX:NumberOfGCLogFiles=10 -XX:+UseGCLogFileRotation -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps -XX:+PrintGCDetails -XX:+DisableExplicitGC -verbose:gc
```
> 仅仅部署一台MQTT节点进行压测

## 桥接压测（KAFKA）
### 新建kafka数据源

![](../../assets/images/test/img_24.png)

### 新建规则转发

![](../../assets/images/test/img_25.png)

### 启用规则

![](../../assets/images/test/img_26.png)

### 10W TPS
| 连接 | 推送 | 报文大小 | cpu | 内存(最大使用) |
| --- | --- | --- | --- | --- |
| 50000 | 2/s | 160B | 22% | 8G |
| 50000 | 2/s | 1024B | 31% | 10G |

**160B压测截图：**


![Dashboard](../../assets/images/test/img_27.png)
![MQTT](../../assets/images/test/img_28.png)
![MQTT](../../assets/images/test/img_29.png)
![JVM](../../assets/images/test/img_30.png)



**1024B压测截图：**

![Dashboard](../../assets/images/test/img_31.png)
![MQTT](../../assets/images/test/img_32.png)
![MQTT](../../assets/images/test/img_33.png)
![JVM](../../assets/images/test/img_34.png)


### 15W TPS
| 连接 | 推送 | 报文大小 | cpu | 内存(最大使用) |
| --- | --- | --- | --- | --- |
| 50000 | 3/s | 160B | 31% | 13G |
| 50000 | 3/s | 1024B | 37% | 15G |

**160B压测截图：**

![Dashboard](../../assets/images/test/img_35.png)
![MQTT](../../assets/images/test/img_36.png)
![MQTT](../../assets/images/test/img_37.png)
![JVM](../../assets/images/test/img_38.png)
![JVM](../../assets/images/test/img_39.png)

**1024B压测截图：**
![Dashboard](../../assets/images/test/img_40.png)
![MQTT](../../assets/images/test/img_41.png)
![MQTT](../../assets/images/test/img_42.png)
![JVM](../../assets/images/test/img_43.png)
![JVM](../../assets/images/test/img_44.png)

### 20W TPS
| 连接 | 推送 | 报文大小 | cpu | 内存(最大使用) |
| --- | --- | --- | --- | --- |
| 50000 | 4/s | 160B | 35% | 14G |
| 50000 | 4/s | 1024B | 40% | 16G |

**160B压测截图：**

![Dashboard](../../assets/images/test/img_45.png)
![MQTT](../../assets/images/test/img_46.png)
![MQTT](../../assets/images/test/img_47.png)
![JVM](../../assets/images/test/img_48.png)

**1024B压测截图：**


![Dashboard](../../assets/images/test/img_49.png)
![MQTT](../../assets/images/test/img_50.png)
![MQTT](../../assets/images/test/img_51.png)
![JVM](../../assets/images/test/img_52.png)

## 连接&&并发测试

### 95W连接 && 5W TPS
![Dashboard](../../assets/images/test/img_53.png)
![MQTT](../../assets/images/test/img_54.png)
![MQTT](../../assets/images/test/img_55.png)
![JVM](../../assets/images/test/img_56.png)
![JVM](../../assets/images/test/img_57.png)

### 97W连接 && 7W TPS
![Dashboard](../../assets/images/test/img_58.png)
![MQTT](../../assets/images/test/img_59.png)
![MQTT](../../assets/images/test/img_60.png)
![JVM](../../assets/images/test/img_61.png)
![JVM](../../assets/images/test/img_62.png)

### 100W连接 && 10W TPS
![Dashboard](../../assets/images/test/img_63.png)
![MQTT](../../assets/images/test/img_64.png)
![MQTT](../../assets/images/test/img_65.png)
![JVM](../../assets/images/test/img_66.png)
![JVM](../../assets/images/test/img_67.png)