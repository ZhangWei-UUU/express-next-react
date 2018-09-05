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
});


module.exports = router;
