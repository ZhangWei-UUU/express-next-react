var express = require("express");
var router = express.Router();
const getIP = require("external-ip")();
const MongoClient = require("mongodb").MongoClient;
const os = require("os");
var fs = require("fs");
var hash = require("hash.js");
var checkPrivated = require("./authentication");
var checkRegister = require("./checkRegister");
const DB_CONFIG = require("../db");
const User = require("../Class/User");

const insertDocument = (db,obj,callback) =>{
    const collection = db.collection("users");
    collection.insertMany([
        obj
    ],(err,result)=>{
        if(err){
            callback(err);
        }else{
            callback(result);
        }
    });
};

const findDocument = (db,obj,callback) =>{
    const collection = db.collection("users");
    collection.find(obj).toArray(function(err, docs) {
        if(err){
            callback(err);
        }else{
            callback(docs);
        }
    });
};

router.post("/register",checkRegister,(req,res)=>{
    MongoClient.connect(DB_CONFIG.url, function(err, client) {
        if(err){
            res.send(DB_CONFIG.dbError);
        }else{
            const db = client.db(DB_CONFIG.dbname);
            const hashPassword = hash.sha256().update(req.body.password).digest("hex");
            const collection = db.collection("users");
            const user = new User(req.body.userName,hashPassword);
            collection.insertOne(obj,(err,result)=>{
                if(err){
                    res.send(DB_CONFIG.collectionError);
                }else{
                    res.send({success:true,payload:back});
                }
            });
        }
    });
});

router.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        res.send({success:true});
    });
});

router.post("/login",(req,res)=>{
    MongoClient.connect(DB_CONFIG.url, function(err, client) {
        if(err){
            res.send(DB_CONFIG.dbError);
        }else{
            const db = client.db(DB_CONFIG.dbname);
            const hashPassword = hash.sha256().update(req.body.password).digest("hex");
            let {userName} = req.body;
            findDocument(db,{userName,password:hashPassword},(back)=>{
                if(back.length>0){
                    req.session.loginUser = req.body.userName;
                    res.send({success:true,payload:back});
                
                }else{
                    res.send(DB_CONFIG.collectionError);
                }
            });
        }
    }); 
});

router.get("/staticfile/:filename",(req,res)=>{
    const exist = fs.existsSync(`./Files/${req.params.filename}.md`);
    if(exist){
        const content = fs.readFileSync(`./Files/${req.params.filename}.md`,"utf8");
        res.send({content});
    }else{
        res.send({error:"无此文件"});
    }
});

// 获取当前登录用户信息
router.get("/currentUserInfo",checkPrivated,(req,res)=>{
    const {loginUser} = req.session;
    MongoClient.connect(DB_CONFIG.url,(err,client)=>{
        if(!err){
            const db = client.db(DB_CONFIG.dbname);
            const collection = db.collection("users");
            collection.findOne({userName:loginUser},(err,back)=>{
                if(err){
                    res.send(DB_CONFIG.collectionError);
                }else{
                    delete back.password;
                    delete back._id;
                    res.send({success:true,payload:back});
                }
            });
        }else{
            res.send(DB_CONFIG.dbError);
           
        }
    });
    
});

router.get("/environment",(req,res)=>{
    MongoClient.connect(DB_CONFIG.url,(err,client)=>{
        if(!err){
            const db1 = client.db(DB_CONFIG.dbname);
            const db2 = client.db("session");
            const collection1 = db1.collection("users");
            const collection2 = db1.collection("sessions");
            collection1.find({}).toArray(function(err, docs) {
           
            });
            collection2.find({}).toArray(function(err, docs) {
              
            });
        }
    });
    getIP((err, ip) => {
        if (err) {
            throw err;
        }
        var obj = {};
        obj.pid = process.pid;
        obj.environment = process.env.NODE_ENV;
        obj.dbPort = process.env.DB_PORT;
        obj.cpu = os.cpus();
        obj.network = os.networkInterfaces();
        obj.osType = os.type();
        obj.freeMem = os.freemem();
        obj.ip = ip;
        res.send(obj);
    });
    
});

module.exports = router;
