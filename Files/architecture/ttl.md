# TTL 数据管理

TTL 全称 Time To Live；是一种将数据存储在缓存或者临时数据库的一种技术，在时间到期后，会通过某种守护者进程对数据进行自动删除。在用户登录方面有着大量的应用。本应用使用的TTL即是MongoDB TTL技术。

## TTL indexes

TTL indexes 是一个特殊的单一字段的索引。MongoDB在一个指定时间将使用它自动删除文档。

在使用上，在collection下，使用createIndex()方法创建：

```javascript
db.collectionName.createIndex( { "createAt": 1 }, { expireAfterSeconds: 3600 } )
```

这样我们就在`createAt`字段中设置了一个`TTL index`;其时间持久为3600秒。

## 使用TTL index

在创建TTL index 字段后，我们就可以在普通collection中使用它：

```javascript
db.collectionName.insert( {
   "createdAt": new Date(),
   "name": "xxxx"
} )
```

这样3600秒之后，name为xxxx的对象会被自动销毁。