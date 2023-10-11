# Docker部署


## docker-compose.yml
```yaml
version: '3'
services:
  admin:
    image: docker.fluxmq.com/fluxmq/admin:2.0.7
    ports:
      - "8089:80"
    environment:
      - fluxmq_address=fluxmq:8080  # 使用服务名称引用fluxmq容器的主机名
    depends_on:
      - fluxmq  # 声明admin服务依赖于fluxmq服务
    networks:
      - fluxmq_network  # 将admin服务添加到自定义网络
  fluxmq:
    image: docker.fluxmq.com/fluxmq/fluxmq:2.0.7  # 请替换为您的fluxmq镜像名称和标签
    ports:
      - "1883:1883"
      - "8883:8883"
    expose:
      - 8080
    volumes:
      - /root/logs:/logs  # 挂载日志目录到容器内
    networks:
      - fluxmq_network  # 将fluxmq服务添加到自定义网络

networks:
  fluxmq_network:  # 定义自定义网络
```


## 启动
```shell
docker-compose up -d
```

启动完成后访问：http://host:8089 

