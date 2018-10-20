var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const DB_CONFIG = require("../db");

// 给用户添加课程
/**
 * findOneAndUpdate,
 * findOneAndDelete,
 * findOneAndReplace是三个目前版本的更新方法
 */
router.get("/order/:course",(req,res)=>{
    let {course} = req.params;
    let {loginUser} = req.session;

    MongoClient.connect(DB_CONFIG.url, (err, client)=>{
        if(err){
            res.send({err:"MongoDB在当前服务器中处于关闭状态"});
        }else{
            const db = client.db(DB_CONFIG.dbname);
            const users = db.collection("users");
            try{
                users.findOneAndUpdate(
                    { userName: loginUser },
                    { $push: { course } }
                    ,(err,doc)=>{
                        if(err){
                            return err;
                        }else{
                            return doc;
                        }
                    }
                );
            }catch(e){
                return e;
            }
        }
    });
});

router.delete("/order/:course",(req,res)=>{
    let {course} = req.params;
    let {loginUser} = req.session;
    MongoClient.connect(DB_CONFIG.url, (err, client)=>{
        if(err){
            res.send({err:"MongoDB在当前服务器中处于关闭状态"});
        }else{
            const db = client.db(DB_CONFIG.dbname);
            const users = db.collection("users");
            try{
                users.findOneAndUpdate(
                    { userName: loginUser },
                    { $pull: { course:course } }
                    ,(err,doc)=>{
                        if(err){
                            return err;
                        }else{
                            return doc;
                        }
                    }
                );
            }catch(e){
                return e;
            }
        }
    });
});
module.exports = router;