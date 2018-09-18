var express = require("express");
var next = require("next");
var router = express.Router();
var dev = process.env.NODE_ENV !== "production";
var app = next({dev});

app.prepare().then(()=>{
    router.get("/:id",(req,res)=>{
        return app.render(req, res, "/doc", req.query);
    });
});


module.exports = router;
