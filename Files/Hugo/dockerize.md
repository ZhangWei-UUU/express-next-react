# Docker 项目

不同于很多其他项目Dockerfile在Hugo包中，Dockerfile应该与项目包保持平行。

```
- Dockerfile
- project 
```

在Dockerfile中简单写上`FROM publysher/hugo`即可，然后构建镜像。

```
docker build -t 镜像名称 .
```

在构建镜像成功后，就是运行容器。在Hugo容器的运行上分为两种：一种就是作为独立容器在服务器上进行运行，另一种是作为webserver（如:Nginx）下的一个`volume image`。

第一种比较简单，直接起一个容器即可：

```
docker run -p 1313:1313 my/image
```

第二种，首先创建一个`volume image`:
```
docker run -d -v /usr/share/nginx/html --name volume名称 镜像名称
```

然后将volume挂载到nginx下进行运行。

```
docker run -d --volumes-from volume名称 --name WEB服务器自定义名称 -p 80:80 nginx
```