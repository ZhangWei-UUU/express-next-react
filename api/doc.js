var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/:theme/:charpt",(req,res)=>{
  /**
    * 根据文章主题和章节进行查找当前内容是否存在，存在则去读取列表和内容
    */
  const exist = fs.existsSync(`./Files/${req.params.theme}/${req.params.charpt}.md`);
  if(exist){
    const menu =  fs.readFileSync(`./Files/${req.params.theme}/list.json`,"utf8");
    const content =  fs.readFileSync(`./Files/${req.params.theme}/${req.params.charpt}.md`,"utf8");
    res.send({menu,content});
  }else{
    res.send({error:"无此文件"});
  }
});

module.exports = router;
