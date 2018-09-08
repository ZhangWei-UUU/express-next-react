
var express = require("express");
var next = require("next");
var bodyParser = require("body-parser");


var dev = process.env.NODE_ENV !== "production";
var configure = require("./configure/index.js");
var app = next({dev});
var admin = require("./routes/admin.js");
var tech = require("./routes/tech.js");

var api = require("./api/index.js");

var server = express();

server.set("port",configure.port);
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
server.use(bodyParser.json());


server.use("/admin",admin);
server.use("/tech",tech);
server.use("/api",api);
app.prepare().then(()=>{
    server.get("/",(req,res)=>{
        return app.render(req, res, "/home", req.query);
    });

    server.get("/author",(req,res)=>{
        return app.render(req, res, "/author", req.query);
    });

    server.get("/library",(req,res)=>{
        return app.render(req, res, "/library", req.query);
    });

    server.get("/svg",(req,res)=>{
        return app.render(req, res, "/svg", req.query);
    });

    server.get("/artical/:id",(req,res)=>{
        return app.render(req, res, "/artical", req.query);
    });

    server.get("/web",(req,res)=>{
        return app.render(req, res, "/web", req.query);
    });

    server.get("/wechat",(req,res)=>{
        return app.render(req, res, "/wechat", req.query);
    });

    server.get("/echarts",(req,res)=>{
        return app.render(req, res, "/echarts", req.query);
    });

    server.get("/reactnative",(req,res)=>{
        return app.render(req, res, "/reactnative", req.query);
    });

    server.get("/login",(req,res)=>{
        return app.render(req, res, "/login", req.query);
    });

    server.get("/register",(req,res)=>{
        return app.render(req, res, "/register", req.query);
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

