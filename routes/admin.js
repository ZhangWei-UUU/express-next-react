var express = require("express");
var router = express.Router();

router.get("/test1",(req,res)=>{
    res.end("test1");
});

module.exports = router;
