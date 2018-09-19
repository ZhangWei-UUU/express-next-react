var express = require("express");
var router = express.Router();

router.get("/:theme/:charpt",(req,res)=>{
    console.log(req.params);
    res.send({loginUser:"xx"});
});

module.exports = router;