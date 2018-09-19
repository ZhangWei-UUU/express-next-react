var express = require("express");
var router = express.Router();
var fs = require("fs");
router.get("/:theme/:charpt",(req,res)=>{
    console.log(req.params);
    const exist = fs.existsSync(`./Files/${req.params.theme}/${req.params.charpt}.md`);
    console.log(exist);
    res.send({loginUser:"xx"});
});

module.exports = router;