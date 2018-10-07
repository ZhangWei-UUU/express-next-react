# 容器管理之应用Docker化

## Dockerfile的编写

```Dockerfile
FROM node:8.9.3
RUN mkdir /mainApp
WORKDIR /mainApp
COPY . /mainApp
RUN yarn
CMD [ "yarn", "start" ]
```

## 将代码包构建成Docker image

```bash
docker build -t imageName .
docker image ls
```

## 基于自定义镜像运行Docker Container
```bash
docker run -p 4003:4003 imageName
## 在端口设置方面 左物右虚 使用的是默认bridge网络，在连接数据库方面需要连接到MongoDB的IP地址。
```

