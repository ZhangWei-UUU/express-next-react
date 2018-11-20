# 持续化集成

在持续化集成方面，我们利用了Github 中的 Hook功能，在代码推送到Github上的时候，同时触发服务器[118.25.214.169]上的.git文件。

我们假设创建一个分支叫production，在目标服务器上创建一个文件xxx.git

```
git init --bare xxx.git
```

在其hook文件夹中，创建文件`post-receive`,在文件中确定上传代码的文件夹位置和该代码库Git配置文件的文件夹位置。在生产环境中默认设置为`master`。

```bash
#!/bin/bash
TRAGET="/home/ubuntu/deploy-dir"
GIT_DIR="/home/ubuntu/project.git"
BRANCH="master"

while read oldrev newrev ref
do
        # only checking out the master (or whatever branch you would like to deploy)
        if [[ $ref = refs/heads/$BRANCH ]];
        then
                echo "Ref $ref received. 部署 ${BRANCH} 分支到生产环境中"
                git --work-tree=$TRAGET --git-dir=$GIT_DIR checkout -f
                echo "停止嘉竹文库Docker容器运行"
                docker stop zhuzhi
                echo "删除嘉竹文库Docker容器"
                docker rm zhuzhi
                echo "嘉竹文库Docker旧镜像"
                docker rmi zhuzhi
                echo "构建嘉竹文库Docker新镜像"
                cd ~/deploy-dir
                docker build -t zhuzhi .
                echo "启动新嘉竹文库Docker容器"
                docker run --name zhuzhi -p 80:4003 zhuzhi
                echo "嘉竹文库容器运行成功"
        else
                echo "Ref $ref received. Doing nothing: only the ${BRANCH} branch may be deployed on this server."
        fi
done
```

在本地的仓库中添加生产服务器的Git仓库：

```
git remote add production ubuntu@118.25.214.169:~/xxx.git 
```

当然在此之前可以看到git的远程仓库：

```
git remote -v
```

如果需要回滚代码：

```
git reset HEAD~
```
删除

```
git remote rm 仓库名
```

推送代码
```
git push xxx master
```



