# [编写智能合约](https://hyperledger-fabric.readthedocs.io/en/latest/developapps/smartcontract.html)

在我们的这个商票网络中，它有一个核心文件`papercontract.js`。 表示商票系统的智能合约。

代码如下：

```javascript
const { Contract, Context } = require('fabric-contract-api');
class CommercialPaperContract extends Contract{
    constructor(){
        //定义其自带属性商票列表
        this.cpList = new StateList(this,'org.papernet.commercialpaperlist' )
    }
 // 定义商票发行方法
 async issue(ctx,issuer,paperNumber, issueDataTime, maturityDateTime, faceValue){

 }
}
```


### 商票代码
`paper.js`

```javascript
class StateList{

}
```
### 接入账本

`ledgerutils.js`是这个功能的核心文件。

```javascript
/**
 * StateList用于管理整个网络中所有的商票的一个状态数据库。
*/
class StateList{
    async addState(state) {
       let key = this.api.createCompositeKey(this.name, [state.getKey()]);
       let data = Utils.serialize(state);
       await this.api.putState(key, data);
    }

    async getState([keys]) {
        let key = this.api.createCompositeKey(this.name, [keys]);
        let data = await this.api.getState(key);
        let state = Utils.deserialize(data);
        return state;
    }
    
    async updateState(state) {
        let key = this.api.createCompositeKey(this.name, [state.getKey()]);
        let data = Utils.serialize(state);
        await this.api.putState(key, data);
}

}
```