var express = require("express");
var next = require("next");
var router = express.Router();
var dev = process.env.NODE_ENV !== "production";
var app = next({dev});

app.prepare().then(()=>{
    router.get("/usercenter",(req,res)=>{
        console.log(req.session)
        return app.render(req, res, "/admin/usercenter", req.query);
    });
});


module.exports = router;
