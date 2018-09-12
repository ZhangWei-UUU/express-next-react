var express = require("express");
var next = require("next");
var router = express.Router();
var dev = process.env.NODE_ENV !== "production";
var app = next({dev});
app.prepare().then(()=>{
    router.get("/codemirror",(req,res)=>{
        return app.render(req, res, "/codemirror", req.query);
    });

    router.get("/gitci",(req,res)=>{
        return app.render(req, res, "/gitci", req.query);
    });

    router.get("/jenkins",(req,res)=>{
        return app.render(req, res, "/jenkins", req.query);
    });

    router.get("/baidumap",(req,res)=>{
        return app.render(req, res, "/BaiduMap", req.query);
    });
});


module.exports = router;
