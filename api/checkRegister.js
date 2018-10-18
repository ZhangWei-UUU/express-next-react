
const MongoClient = require("mongodb").MongoClient;
const DB_CONFIG = require("../db");

const checkRegister = (req,res,next) => {
    let {userName} = req.body;
    MongoClient.connect(DB_CONFIG.url, (err, client) => {
        if(err){
            res.send(DB_CONFIG.dbError);
        }else{
            const db = client.db(DB_CONFIG.dbname);
            const collection = db.collection("users");
            collection.findOne({userName},(err,data)=>{
                if(err){
                    res.send(DB_CONFIG.collectionError);
                }else{
                    if(data){
                        res.send({success:false,message:`${userName}已注册`});
                    }else{
                        next();
                    }
                }
            });
        }
    });
};

module.exports = checkRegister;