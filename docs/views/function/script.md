
# 脚本管理

FluxMQ支持脚本来处理数据流，可以讲MQTT传输的Payload转换成任意格式，再流转到后续的规则引擎中，但是脚本中的方法尽量保持搞笑，避免出现阻塞Pipeline的情况。导致系统性能下降

## JS脚本
![img.png](img.png)
```javascript
function convert(topic, payload){
    return payload;
}
```