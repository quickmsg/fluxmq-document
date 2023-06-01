# 管理页面部署



## 安装nginx

```shell
docker run -d -it --name=nginx-docs -p 80:80 -v /root/docs/:/usr/share/nginx/html nginx
```
