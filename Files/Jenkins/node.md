如果你是一个Node.js和React开发者，但是对于CI/CD概念又不是很熟悉，也不知道如何使用Jenkins去构建项目，那么下面这篇文章就非常适合你。

### 准备工作

本机已安装Docker和Git

### 在Docker中运行Jenkins

运行docker Jenkins 容器：

```dockerfile
docker run \
  --rm \
  -u root \
  -p 9000:9000 \
  -v jenkins-data:/var/jenkins_home \ 
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \ 
  jenkinsci/blueocean
```

`/var/jenkins_home`表示 存储jenkins数据的位置，`$HOME`表示`/User/username`.

之后就和在本地启动Jenkins一样，在启动后，去打开界面进行权限解锁。

### 接入Jenkins 容器

```
docker exec -it jenkins-tutorials bash
```

在运行的主机上打开界面，和本机一样完成所有的配置。然后创建管理员用户后完成配置。
```
http://localhost:9000
```

### 在Github上Fork和clone相同的库

### 在Jenkins应用中创建Pipeline项目

1. 再次返回Jenkins 应用创建新项目
2. 新建项目名称
3. 下拉到页面的最低端，点击Pipeline
4. 写下简短的项目描述
5. 点击Pipeline Tab
6. 
7. 在SCM中，选择Git
8.  

### 使用Jenkinsfile创建initial Pipeline

Pipeline由Jenkinsfile所创建，它会被committed到你本机的Git仓库。
基于Pipeline as Code原则，视持续化集成管道为应用的组成部分之一。

第一步，创建一个初始化Pipeline用于下载Node Docker image. 

第二步，在Git 仓库的根目录中创建Jenkinsfile,导入以下样式代码：

```js
pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
```

第三步：`git add .`和`git commit -m "Add initial Jenkinsfile`;

第四部：返回Jenkins App, 打开Blue Occean;

### 添加最终Delivery步骤到Pipeline

打开Jenkinsfile,在Test步骤后面,添加如下代码：

```js
stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
```

所以最终的`Jenkinsfile`就成了这样：

```js
pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}
```

