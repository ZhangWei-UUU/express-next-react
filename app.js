
var express = require("express");
var next = require("next");
var bodyParser = require("body-parser");
var dev = process.env.NODE_ENV !== "production";
var configure = require("./configure/index.js");
var app = next({dev});
var admin = require("./routes/admin.js");

var server = express();
server.set("port",configure.port);
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
server.use(bodyParser.json());

server.use("/admin",admin);

app.prepare().then(()=>{
    server.get("/",(req,res)=>{
        return app.render(req, res, "/home", req.query);
    });
     
    server.get("*",(req,res)=>{
        return app.render(req, res, "/nonfound", req.query);
    });
    
    
});

server.use((err,req,res,next)=>{
    if(req.xhr){
        return res.send("浏览器挂l");
    }else{
        next(err);
    }
});

server.listen(configure.port,()=>{
    console.log("启动Express-next-react App,端口号："+configure.port);
});
process.on("uncaughtException",(err)=>{
    console.log(err);
});