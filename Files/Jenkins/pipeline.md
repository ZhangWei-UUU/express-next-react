### 什么是Pipeline

Pipeline是持续化继承项目到Jenkins的一系列插件。它能够像管道一样自动将软件从不同的版本控制中送到客户端。

第一步将样本代码放置到`Jenkinsfile`文件中：

```javascript
pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
```

第二步：在Jenkins app中，选择创建一个新项目，然后选择`Multibranch Pipeline`.
点击`Add Source`,选择一个github代码库。然后点击`save`观察pipeline的运行情况。

