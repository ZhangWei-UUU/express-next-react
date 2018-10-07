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

## 在Github上配置Jenkins

进入代码库，在tab页面上选择`Settings`,点击左侧导航栏中`Webhooks`.点击`Add webhook`. 填写Payload URL.
