
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var server = express();
var configure = require("./configure/index.js");
server.set("port",configure.port);
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
server.use(bodyParser.json());

function authenticationCheck(req){
    req.session = "11";
    if(req.session){
        return true;
    }else{
        return false;
    }
}

server.get("/",(req,res,next)=>{
    if(process.env.NODE_ENV === "development"){
        res.send("<div><h1>网站首页</h1></div>");
    }else{
        next("NoDev");
    }
});

server.get("/aboutprocess",(req,res,next)=>{
    fs.readFile("../xx.txt","utf-8",(err,data)=>{
        if(err){
            next("can not open file");
        }else{
            res.send(data);
        }
    });
});

server.get("/home",(req,res)=>{
    res.redirect("/");
});


server.get("/secret1",(req,res,next)=>{
    var checkResult = authenticationCheck(req);
    if(checkResult){
        res.send("秘密1");
    }else{
        next("NoAuthentication");
    }  
});


server.get("/secret2",(req,res,next)=>{
    var checkResult = authenticationCheck(req);
    if(checkResult){
        res.send("秘密2");
    }else{
        next("NoAuthentication");
    }  
});

server.get("/secret3",(req,res,next)=>{
    var checkResult = authenticationCheck(req);
    if(checkResult){
        res.send("秘密3");
    }else{
        next("NoAuthentication");
    }  
});


server.get("*",(req,res,next)=>{
    next("randomUrl");
});

server.use((err,req,res,next)=>{
    if(req.xhr){
        return res.send("浏览器挂了");
    }else{
        next(err);
    }
});


server.use((err,req,res)=>{
    switch(err){
    case "NoDev":
        return res.status(500).send("The environment is delevelopment");
    case "randomUrl":
        return res.status(404).send("PAGE NOT FOUND"+"404");
    case "PAGE NOT FOUND":
        return res.status(403).send("PAGE NOT FOUND");
    case "NoAuthentication":
        return res.status(403).send("No Authentication");
    default:
        return res.status(403).send("UNKNOW ERROR");
    }
});

server.listen(configure.port,()=>{
    console.log("启动Express-next-react App,端口号："+configure.port);
});

process.on("uncaughtException",(err)=>{
    console.log(err);
});