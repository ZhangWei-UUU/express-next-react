## Github自动部署代码到生产服务器

在一般开发环境中，我们会在本地笔记本上开发编程，然后将代码push到远程github服务器上，之后再将代码拉到生产服务器上。当然更为先进的方式则是通过web-hook在push代码的时候触发hook,将代码自动部署到生产服务器上。

本文将介绍如何在一个生产服务器上创建一个“裸” git 仓库， 并通过git branch直接发布到生产服务器上。

* 在生产环境的服务器上添加 git repository和一个放置代码的文件夹
* 在git repository上新增post-receive hook脚本

进入生产服务器之后，在当前用户文件夹下创建`deploy-dir`文件夹;
同时创建project.git 文件夹

```bash
$ git init --bare ~/project.git
```

进入`project.git`文件夹后，进入hooks文件夹，创建空文件`post-receive`作为脚本文件，加入：

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
		echo "Ref $ref received. Deploying ${BRANCH} branch to production..."
		git --work-tree=$TRAGET --git-dir=$GIT_DIR checkout -f
	else
		echo "Ref $ref received. Doing nothing: only the ${BRANCH} branch may be deployed on this server."
	fi
done

```
#### 本地开发环境git仓库配置
进入本地开发文件夹

```bash
#新增远程仓库
git remote add production ubuntu@serverIP:project.git
```

在这里我们起的名字为production,根据需要可以设置为test,staging等等。

```bash
git push production master
```

这个时候代码就可以Push到生产环境了。

### 远程分支的处理

查询远程分支的各个版本

```bash
git remote -v
```

显示所有的origin 的远程分支

```bash
git remote show origin 
```

显示本地分支
```bash
git branch
```

显示本地分支+ 远程分支

```bash
git branch -a
```

删除本地分支
```bash
git branch -d <name>
```

删除远程仓库

```bash
# 查看远程各个仓库和各个分支
git remote -v
# 删除
 git remote rm <仓库名>
```

## 总结

> 需要熟练掌握hooks的机制。