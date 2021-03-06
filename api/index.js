var express = require("express");
var router = express.Router();
const getIP = require("external-ip")();
const nodemailer = require("nodemailer");
const MongoClient = require("mongodb").MongoClient;
const os = require("os");
var fs = require("fs");
var hash = require("hash.js");
var checkPrivated = require("./Middleware/authentication");
var checkRegister = require("./Middleware/checkRegister");
var checkBlacklist = require("./Middleware/checkBlacklist");
const DB_CONFIG = require("../db");
const User = require("../Class/User");
const errorRecorder = require("./Tools/errorRecorder");

router.post("/register",checkRegister,(req,res)=>{
  MongoClient.connect(DB_CONFIG.url, function(err, client) {
    if(err){
      res.send(DB_CONFIG.dbError);
    }else{
      const db = client.db(DB_CONFIG.dbname);
      const hashPassword = hash.sha256().update(req.body.password).digest("hex");
      const collection = db.collection("users");
      const user = new User(req.body.userName,hashPassword);
      collection.insertOne(user,(err)=>{
        if(err){
          res.send(DB_CONFIG.collectionError);
        }else{
          res.send({success:true,message:"注册成功"});
        }
      });
    }
  });
});

router.post("/login",checkBlacklist,(req,res)=>{
  MongoClient.connect(DB_CONFIG.url, function(err, client) {
    if(err){
      res.send(DB_CONFIG.dbError);
    }else{
      const db = client.db(DB_CONFIG.dbname);
      const collection = db.collection("users");
      const password = hash.sha256().update(req.body.password).digest("hex");
      let {userName} = req.body;
      collection.findOne({userName,password},(err,data)=>{
        if(err){
          res.send(DB_CONFIG.collectionError);
        }else{
          if(data){
            req.session.loginUser = userName;
            res.send({success:true,message:`${data.userName}登录成功`});
          }else{
            errorRecorder(req,userName);
            res.send({success:false,message:"用户名或密码错误,输入错误超过三次以上账户将会被冻结1小时"});
          } 
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

router.get("/mail",(req,res)=>{
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    auth: {
      user: "350095093@qq.com", // generated ethereal user
      pass: "ldysztmohryebiea" // generated ethereal password
    }
  });

  let mailOptions = {   
    from: "350095093@qq.com", // sender address
    to: "kanseefoil@gmail.com", // list of receivers
    subject: "嘉竹文库新版部署成功", // Subject line
    text: "嘉竹文库新版部署成功", // plain text body
    html: "<a href=\"http://funningcoin.cn\"><button>查看详情</button></a>" // html body
  };

  transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
      console.error(err);
    }else{
      res.send(info);
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
