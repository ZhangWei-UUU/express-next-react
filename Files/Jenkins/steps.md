### 什么是Jenkins

Jenkins是一个开源自动化服务器，其作用与将软件的构建、测试、部署、传输自动化。
它既可以通过原生系统的安装包进行安装，也可以安装在Docker中，或者任何一个带有JRE的机器上。

### 开始前的准备工作

* 机器： 
    1. 512M以上内存机器
    2. 10G磁盘
* 软件：
    1. JAVA8
    2. Docker

### 下载并运行Jenkins

在下载完成Jenkins的war包之后，通过终端到达文件夹位置执行：

```
java -jar jenkins.war --httpPort=7856
```
http://localhost:7856

> 端口号：请自便

成功出现界面后，安装成功。