# 数据管理

_更新时间：2018-09-28_

数据是整个应用的财富所在，也是整个应用的安全所在。面对黑客攻击、物理机宕机、软件迭代如何牢牢把控好数据的安全至关重要。

1. 启动mongoDB 容器：

```bash
docker run --name mongo-zhuzhi -v ~/物理机数据地址:/data/db -p 27017:27017 -d mongo
```

2. 在物理机上查看是否已经有暴露到本机27017端口的程序,并查看docker列表:

```bash
netstat -ntlp
docker ps
```

3. 进入mongoDB容器中,添加部分测试数据：

```bash
docker exec -it containerID /bin/bash
```

4. 进入物理机数据磁盘位置,如果没有写入任何数据会有以下五个文件：

* journal  
* mongod.lock  
* WiredTiger  
* WiredTiger.lock  
* WiredTiger.wt

如果写入数据会多出：

* collection-0-xx.wt 等集合文件
* index-1-xx.wt 等文件
* _mdb_catalog.wt
* sizeStorer.wt
* storage.bson
* WiredTigerLAS.wt
* WiredTiger.turtle
* diagnostic.data 文件夹

在MongoDB的容器中，假如我们希望导出test数据库下users collection的数据成JSON形式：

```bash
 mongoexport --db test --collection users --out users.json
```

在当前执行命令行的文件夹下就会出现user.json文件,将文件拷到容器中/data/db文件夹中，回到物理机中Volumn数据文件夹中就能看见user.json文件了。

假设我们将这些json数据存放后，通过手动修改，希望在宕机几天后通过导入恢复数据：

[未完待续](https://docs.mongodb.com/manual/reference/program/mongoimport/)