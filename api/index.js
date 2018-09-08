var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const os = require("os");
const DB_CONFIG = require("../db");

const insertDocument = (db,obj,callback) =>{
    const collection = db.collection('users');
    collection.insertMany([
        obj
    ],(err,result)=>{
        if(err){
            callback(err)
        }else{
            callback(result)
        }
    })
}

const findDocument = (db,obj,callback) =>{
    const collection = db.collection('users');
    collection.find(obj).toArray(function(err, docs) {
        if(err){
            callback(err)
        }else{
            callback(docs)
        }
      });
}

router.post("/register",(req,res)=>{
    MongoClient.connect(DB_CONFIG.url, function(err, client) {
        if(err){
            res.send({err:"MongoDB在当前服务器中处于关闭状态"});
        }else{
            const db = client.db(DB_CONFIG.dbname);
            insertDocument(db,req.body,(back)=>{
                 if(back.result.ok === 1){
                    res.send({success:"注册成功"});
                 }else{
                    res.send({err:"注册失败"});
                 }   
            });
        }
    });
});

router.post("/login",(req,res)=>{
    MongoClient.connect(DB_CONFIG.url, function(err, client) {
        if(err){
            res.send({err:"MongoDB在当前服务器中处于关闭状态"});
        }else{
            const db = client.db(DB_CONFIG.dbname);
            findDocument(db,req.body,(back)=>{
                if(back.length>0){
                    res.send({success:"登录成功"});
                }else{
                    res.send({err:"用户名或密码错误"});
                }
                 
            });
        }
    }); 
});

router.get("/environment",(req,res)=>{
    var obj = {};
    obj.pid = process.pid;
    obj.environment = process.env.NODE_ENV;
    obj.dbPort = process.env.DB_PORT;
    obj.cpu = os.cpus();
    obj.network = os.networkInterfaces();
    obj.osType = os.type();
    obj.freeMem = os.freemem();
    console.log(process)
    res.send(obj);
});

module.exports = router;
