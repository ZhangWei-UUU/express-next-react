var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const DB_CONFIG = require("../db");
var checkPrivated = require("./Middleware/authentication");
var fs = require("fs");

// 给用户添加课程
/**
 * findOneAndUpdate,
 * findOneAndDelete,
 * findOneAndReplace是三个目前版本的更新方法
 */
router.get("/order/:course",checkPrivated,(req,res)=>{
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
                    { $push: { courses:course } }
                    ,(err,doc)=>{
                        if(err){
                            res.send(DB_CONFIG.collectionError);
                        }else{
                            res.send({success:true});
                        }
                    }
                );
            }catch(e){
                return e;
            }
        }
    });
});

router.delete("/order/:course",checkPrivated,(req,res)=>{
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
                    { $pull: { courses:course } }
                    ,(err,doc)=>{
                        if(err){
                            res.send(DB_CONFIG.collectionError);
                        }else{
                            res.send({success:true});
                        }
                    }
                );
            }catch(e){
                return e;
            }
        }
    });
});

router.get("/details/:app",(req,res)=>{
    let {app} = req.params;
    const exist = fs.existsSync(`./Store/${app}/app.config.json`);
    if(exist){
        let configInfo =  JSON.parse(fs.readFileSync(`./Store/${app}/app.config.json`,"utf8"));
        let iconsList = fs.readdirSync(`./Store/${app}/icons`);
        let imagesList = fs.readdirSync(`./Store/${app}/images`);
     
        let icons = iconsList.filter(icon=>{
            if((/\.png$/i).test(icon)){
                return icon;
            }else{
                return;
            }
        });
        let images = imagesList.filter(image=>{
            if((/\.jpg$/i).test(image)){
                return image;
            }else{
                return;
            }
        });
        
        let readme = fs.readFileSync(`./Store/${app}/readme.md`,"utf8");

        if(icons.length>0 && images.length>0 && readme){
            const iconBuffer = fs.readFileSync(`./Store/${app}/icons/${icons[0]}`,"base64");
            configInfo.icon = iconBuffer;
            configInfo.readme = readme;
            let imagesBuffer =[];
            images.forEach(img=>{
                const imgBuffer = fs.readFileSync(`./Store/${app}/images/${img}`,"base64");
                imagesBuffer.push(imgBuffer);
            });
            configInfo.images = imagesBuffer;
           
            res.send({success:true,payload:configInfo});
        }else{
            res.send({success:false,message:"当前应用缺少图片支持"});
        }      
    }else{
        res.send({success:false,message:"当前应用已经删除"});
    }
});

module.exports = router;