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

使用node启动网络

```
./byfn.sh up -l node
```

这个时候Fabric的工作顺序如下：

1. 使用/fabric-samples/bin/cryptogen文件创建证书
2. 生成Orderer 创世区块
3. 生成Channel配置文件，该文件位于/fabric-samples/first-network/channel.tx
4. 生成anchor peer 2个，分别为两个网络组织。文件分别为： /first-network/channel-artifacts/Org1（2）MSPanchors.tx 
关闭Fabric 网络并删除Docker容器

5. 创建网络`net-byfn`
6. 创建各个节点的数据volumn
7. 创建6个节点并赋予域名：分别是4个普通节点、1一个创世节点、CLI节点。

## 网络工作步骤

1. Channel的创建：初始化Endorser和orderer的连接；
2. 组织1名下节点加入Channel：初始化Endorser和orderer的连接,提交加入Proposal成功；
3. 组织2名下节点加入Channel：初始化Endorser和orderer的连接,提交加入Proposal成功；
4. 执行交易脚本，完成

```
./byfn.sh down
```

## 分析项目目录

在根目录中`crypto-config.yaml`是一个核心文件。

```yaml
OrdererOrgs:    
  - Name: Orderer
    Domain: example.com
    Specs:
      - Hostname: orderer
PeerOrgs:
  - Name: Org1
    Domain: org1.example.com
    EnableNodeOUs: true
    Template:
      Count: 2
    Users:
      Count: 1
  - Name: Org2
    Domain: org2.example.com
    EnableNodeOUs: true
    Template:
      Count: 2
    Users:
      Count: 1
```

这里面定义了整个网络的拓扑结构，并给这些组织生成证书。在Fabric网络中，所有的交易都是通过keystore私钥签名，signcerts公钥进行解密。`Count`表示一个组织中Peer的数量。