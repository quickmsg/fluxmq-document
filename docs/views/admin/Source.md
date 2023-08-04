# 源码安装
> FluxMQ 管理平台是独立部署的应用，官网下载源码包,打包前需要安装nodejs环境，打包后需要安装nginx环境
## 安装依赖
项目根目录打包Console，执行以下命令
```shell
npm install --registry=https://registry.npm.taobao.org
```
## 打包
配置下生产环境的后台HTTP服务器地址
再`.env.production`文件中修改`VUE_APP_BASE_API`的值为后台HTTP服务器地址，如下：
```shell
ENV='production'
VUE_APP_BASE_API='http://114.116.8.76:60000'
```        

进入项目根目录，并直行打包命令，指令如下：
```
npm run build
```

生成的文件在`dist`文件夹下


## 安装nginx

### 启动Nginx并且映射nginx的静态文件目录
```shell
docker run -d -it --name=nginx-docs -p 80:80 -v /root/docs/:/usr/share/nginx/html nginx
```

### 上传打包文件

给前面打包的文件夹`dist`上传到服务器的`/root/docs/`目录下,即可访问`http://ip`查看管理平台是否启动成功
![img_1.png](../assets/images/img_LOGIN.png)
