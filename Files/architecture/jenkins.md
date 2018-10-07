# 软件持续化集成管理

## 启动Jenkins

在下载完jenkins.war包后，在其文件夹中运行`java -jar jenkins.war --httpPort=端口号`，然后在本地浏览器中打开web端。

这时就会在浏览器中出现一个登录页面。


在需要建立`Jenkins Pipeline`的项目根目录下新建`Jenkinsfile`:

```js
pipeline {
    // 定义执行环境
    agent { docker { image 'node:10.4.1' } }
    // 定义环境变量
    environment{
        DB_ENGINE = "mongo"
    }
    // 定义步骤
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
    // post deleteDir()会清理workspace
    post {
        always {
            echo "Pipeline运行结束"
            deleteDir() 
        }
        success {
            echo "success"
        }
        failure {
            echo "failure"
        }
        changed {
            echo "changed"
        }
        unstable {
            echo "Pipeline不稳定"
        }
    }
}
```

## Jenkins账户管理


## 在Github上配置Jenkins

**第一步**： 在Github右上角选择`Settings`,进入个人设置页面，在左侧导航栏中选择`Developer settings`=>`Personal access tokens`=>`Generate new token`.

**第二步**： 编写token discription和勾选scope,生成密钥：

```
17ce0406ad16e6bf41b638b4267872a67657e1c7
```

**第三步**： 进入Jenkins，将Github与之关联。

进入代码库，在tab页面上选择`Settings`,点击左侧导航栏中`Webhooks`.点击`Add webhook`. 填写Payload URL.
