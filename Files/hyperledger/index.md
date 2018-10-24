# 简易版的Fabric

## 准备工作

下载[Fabric Samples](https://github.com/hyperledger/fabric-samples);

进入文件夹运行启动脚本,下载二进制文件和Docker images,如果没有指定版本号就会下载最新版，本教程为1.3.0
```
./scripts/bootstrap.sh
```

安装
```
curl -sSL http://bit.ly/2ysbOFE | bash -s 1.3.0
```

整个Fabric Samples 文件夹中大约有8个场景案例，本案例选择其中的fabric-network进行讲解，其中`byfn.sh`是启动脚本。

```
./byfn.sh generate
```

生成Artifacts