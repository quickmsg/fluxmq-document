# 编译安装
1. 源码下载
haproxy [源码地址(3.0版本)] (https://www.haproxy.org/download/3.0/src/)
2. 源码编译
    1. make clean
    2. make -j $(nproc) TARGET=linux-glibc USE_OPENSSL=1 USE_QUIC=1 USE_QUIC_OPENSSL_COMPAT=1 USE_LUA=1 USE_PCRE2=1 (USE_OPENSSL和之后的选项可根据需要自行删除)
    3. sudo make install
# 基础配置
```bash
defaults  
  timeout connect 10s
  # timeout需要根据mqtt的keepalive时间来进行设置，设置为 keepalive * 1.2
  timeout client 240s  
  timeout server 240s 
```
# 配置mqtt代理
```bash
backend mqtt_backend
  mode tcp
  stick-table type string len 32 size 100k expire 30m
  stick on req.payload(0,0), mqtt_field_value(connect,client_identifier)

  # 增加 send-proxy 会把真实带IP透传给fluxmq，fluxmq配置中需要将proxy字段设置为true
  # server fluxmq1 fluxmq1.com:1883 check send-proxy-v2

  server fluxmq1 fluxmq1.com:1883 check
  server fluxmq2 fluxmq2.com:1883 check
  server flmxmq3 fluxmq3.com:1883 check

frontend mqtt_servers
  bind *:1883
  mode tcp
  # 等待缓冲区填满，以便解析MQTT报文
  tcp-request inspect-delay 10s
  # 拒绝非MQTT协议的连接
  tcp-request content reject unless { req.payload(0,0), mqtt_is_valid }
  default_backend mqtt_backend
```
# 配置mqtts代理
```bash
backend mqtts_backend
  mode tcp
  balance roundrobin
 
  server fluxmq1 fluxmq1.com:1883 check
  server fluxmq2 fluxmq2.com:1883 check
  server flmxmq3 fluxmq3.com:1883 check

frontend mqtts_frontend
  bind *:1883 ssl crt /etc/haproxy/certs/server.pem 
  # 双向认证
  # bind *:8883 ssl ca-file /etc/haproxy/certs/cacert.pem crt /etc/haproxy/certs/server.pem verify required
  mode tcp
  default_backend mqtts_backend
```
# 配置mqtt ws代理
```bash
backend mqtt_ws_backend
  mode tcp
  balance roundrobin
  server fluxmq1 fluxmq1.com:8883 check
  server fluxmq2 fluxmq2.com:8883 check
  server flmxmq3 fluxmq3.com:8883 check

frontend mqtt_ws_frontend
  bind *:8883 
  mode tcp
  default_backend mqtt_ws_backend
```
# 配置mqtt wss代理
```bash
backend mqtt_wss_backend
  mode tcp
  balance roundrobin
  server fluxmq1 fluxmq1.com:8883 check
  server fluxmq2 fluxmq2.com:8883 check
  server flmxmq3 fluxmq3.com:8883 check

frontend mqtt_wss_frontend
  bind *:8883 ssl crt /etc/haproxy/certs/server.pem
  mode tcp 
  default_backend mqtt_wss_backend
```
# haproxy 启动命令
```bash
haproxy -f haproxy.cfg
```