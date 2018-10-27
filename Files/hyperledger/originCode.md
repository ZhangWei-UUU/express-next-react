# 源码分析

## Basic-network

这一个启动基础区块链网络的项目文件夹。

### start.sh
```bash
# 如果发生错误，直接退出并打印
set -ev

export MSY_NO_PATHCONV = 1
# 将文件夹中跟docker-compose有关的容器镜像数据volumn全部删除
docker-compose -f docker-compose.yml down
# 执行docker-compose,-d表示容器分离模式，分离启动出来的容器名称分别为：ca.example.com orderer.example.com ....四个。
docker-compose -f docker-compose.yml up -d ca.example.com orderer.example.com peer0.org1.example.com couchdb

# 设置fabric的启动超时为10秒
export FABRIC_START_TIMEOUT = 10

# bash 执行暂停10秒
sleep ${FABRIC_START_TIMEOUT}

# docker设置两个环境变量，创建peer0.org1.example.com peer channel,
# 物理机上域名为orderer.examle.con，虚拟机为7050端口，
# channel名称为mychannel, 文件位置为容器中/etc/hyperledger/configtx/channel.tx
docker exec -e "CORE_PEER_LOCALMSPID=Org1MSP" 
/ -e "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/users/Admin@org1.example.com/msp"
/ peer0.org1.example.com peer channel create -o orderer.example.com:7050
/ -c mychannel -f /etc/hyperledger/configtx/channel.tx

# docker设置两个环境变量，peer0.org1.example.com peer加入channel,区块文件名称为mychannel.block
docker exec -e "CORE_PEER_LOCALMSPID=Org1MSP" 
/ -e "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/users/Admin@org1.example.com/msp"
/ peer0.org1.example.com peer channel join -b mychannel.block

```

### docker-compose.yml

这个里面定义了四个容器的启动文件，它们的镜像分别来自Hyperledger中的fabric-ca证书镜像、fabric-orderer背书镜像、fabric-peer普通节点镜像、以及fabric-tools工具镜像。启动后的数据存放于config和crypto-config文件夹中。


