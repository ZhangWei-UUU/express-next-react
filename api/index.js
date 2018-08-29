var express = require("express");
var router = express.Router();

router.post("/login",(req,res)=>{
    console.log(req);
    res.end("test1");
});

module.exports = router;
