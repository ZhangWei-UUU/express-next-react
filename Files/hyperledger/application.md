## [应用](https://hyperledger-fabric.readthedocs.io/en/latest/developapps/application.html)

## 节点网关

第二个核心class就是Fabric的网关：


```js
var { gateway } = require('fabric-net');
var connectionProfile = yaml.safeLoad(file.readFileSync('./gateway/connectionProfile.yaml', 'utf8'));
let connectionOptions = {
  identity: 'isabella.the.issuer@magnetocorp.com',
  wallet: wallet
}
await geteway.connect(connectionProfile,connectionOptions);
```

在这里connectionProfile用于定义一系列的节点网络给到我们的区块链网络。