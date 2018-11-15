# [商业脚本分析](https://hyperledger-fabric.readthedocs.io/en/latest/developapps/smartcontract.html)

根据上一节内容，我们看下在买家卖家之间，资金是如何流动的。

## 商票的生命周期

我们发行第一张商票编号：00001，内容如下：

```js
Issuer = MagnetoCorp
Paper = 00001
Owner = MagnetoCorp
Issue date = 31 May 2020
Maturity = 30 November 2020
Face value = 5M USD
Current state = issued
```

假设这张商票被DigiBank购买，注意Current state和owner的变化：

```js
Issuer = MagnetoCorp
Paper = 00001
Owner = DigiBank
Issue date = 31 May 2020
Maturity date = 30 November 2020
Face value = 5M USD
Current state = trading
```

6个月后，商票被承兑，注意Current state的变化：
```js
Issuer = MagnetoCorp
Paper = 00001
Owner = MagnetoCorp
Issue date = 31 May 2020
Maturity date = 30 November 2020
Face value = 5M USD
Current state = redeemed
```

## 商票交易
We’ve seen that paper 00001’s lifecycle is relatively straightforward – it moves between issued, trading and redeemed as a result of an issue, buy, or redeem transaction.

These three transactions are initiated by MagnetoCorp and DigiBank (twice), and drive the state changes of paper 00001. Let’s have a look at the transactions that affect this paper in a little more detail:

Issue
Examine the first transaction initiated by MagnetoCorp:

```js
Txn = issue
Issuer = MagnetoCorp
Paper = 00001
Issue time = 31 May 2020 09:00:00 EST
Maturity date = 30 November 2020
Face value = 5M USD
```

See how the issue transaction has a structure with properties and values. This transaction structure is different to, but closely matches, the structure of paper 00001. That’s because they are different things – paper 00001 reflects a state of PaperNet that is a result of the issue transaction. It’s the logic behind the issue transaction (which we cannot see) that takes these properties and creates this paper. Because the transaction creates the paper, it means there’s a very close relationship between these structures.

Buy
Next, examine the buy transaction which transfers ownership of paper 00001 from MagnetoCorp to DigiBank:

```js
Txn = buy
Issuer = MagnetoCorp
Paper = 00001
Current owner = MagnetoCorp
New owner = DigiBank
Purchase time = 31 May 2020 10:00:00 EST
Price = 4.94M USD
```

See how the buy transaction has fewer properties that end up in this paper. That’s because this transaction only modifies this paper. It’s only New owner = DigiBank that changes as a result of this transaction; everything else is the same. That’s OK – the most important thing about the buy transaction is the change of ownership, and indeed in this transaction, there’s an acknowledgement of the current owner of the paper, MagnetoCorp.

You might ask why the Purchase time and Price properties are not captured in paper 00001? This comes back to the difference between the transaction and the paper. The 4.94 M USD price tag is actually a property of the transaction, rather than a property of this paper. Spend a little time thinking about this difference; it is not as obvious as it seems. We’re going to see later that the ledger will record both pieces of information – the history of all transactions that affect this paper, as well its latest state. Being clear on this separation of information is really important.

It’s also worth remembering that paper 00001 may be bought and sold many times. For example, we might see the following transactions as paper 0001 changes ownership.

A purchase by BigFund:

```js
Txn = buy
Issuer = MagnetoCorp
Paper = 00001
Current owner = DigiBank
New owner = BigFund
Purchase time = 2 June 2020 12:20:00 EST
Price = 4.93M USD
```

A subsequent purchase by HedgeMatic:

```js
Txn = buy
Issuer = MagnetoCorp
Paper = 00001
Current owner = BigFund
New owner = HedgeMatic
Purchase time = 3 June 2020 15:59:00 EST
Price = 4.90M USD
```

Can you think of a reason why the price of MagnetoCorp commercial paper might be falling?

Redeem
The redeem transaction for paper 00001 represents the end of its lifecycle. DigiBank initiates the transaction which transfers the commercial paper back to MagnetoCorp:

```js
Txn = redeem
Issuer = MagnetoCorp
Paper = 00001
Current owner = HedgeMatic
Redeem time = 30 Nov 2020 12:00:00 EST
```

Again, notice how the redeem transaction has very few properties; all of the changes to paper 00001 can be calculated data by the redeem transaction logic: the Issuer will become the new owner, and the Current state will change to redeemed. The Current owner property is specified in our example, so that it can be checked against the current holder of the paper.

The Ledger
In this topic, we’ve seen how transactions and the resultant paper states are the two most important concepts in PaperNet. Indeed, we’ll see these two fundamental elements in any Hyperledger Fabric distributed ledger – a world state, that contains the current value of all objects, and a blockchain that records the history of all transactions that resulted in the current world state.

You’re now in a great place to translate these ideas into a smart contract. Don’t worry if your programming is a little rusty, we’ll provide tips and pointers to understand the program code. Mastering the commercial paper smart contract is the first big step towards designing your own application.