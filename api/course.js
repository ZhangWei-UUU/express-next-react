
var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/:name",(req,res)=>{
  let {name} = req.params;
  let url = `./Files/${name}/config.json`;
  const exist = fs.existsSync(url);
  if(exist){
    const config =  fs.readFileSync(url,"utf8");
    res.send({success:true,content:JSON.parse(config)});
  }else{
    res.send({error:"无此文件"});
  }
});

module.exports = router;