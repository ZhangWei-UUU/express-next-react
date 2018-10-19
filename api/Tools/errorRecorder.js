const MongoClient = require("mongodb").MongoClient;
const DB_CONFIG = require("../../db");

var errorTimes = 0;
var previousip = "";
const errorRecorder = (req,account) =>{
    if(errorTimes>1){
        MongoClient.connect(DB_CONFIG.url, (err, client) => {
            if(err){
                res.send(DB_CONFIG.dbError);
            }else{
                const db = client.db(DB_CONFIG.dbname);
                const collection = db.collection("blacklist");
                collection.createIndex( { "createAt": 1 }, { expireAfterSeconds: 60*60 } );
                collection.insertOne({userName:account,createAt:new Date()},(err,data)=>{
                    if(err){
                        res.send(DB_CONFIG.collectionError);
                    }else{
                        res.send({success:false,message:`${account}1小时内不能登录`});
                    }
                });
            }});
    }
    var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    if(previousip === ""){
        var previousip = ip;
    }else{
        errorTimes +=1;
    }
};

module.exports = errorRecorder;

/**
 * 当前工具用于在用户输入错误超过三次以后将用户账户加入黑名单
 */