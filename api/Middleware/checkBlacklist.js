const MongoClient = require("mongodb").MongoClient;
const DB_CONFIG = require("../../db");

const checkBlacklist = (req,res,next) =>{
    let {userName} = req.body;
    MongoClient.connect(DB_CONFIG.url, (err, client) => {
        if(err){
            res.send(DB_CONFIG.dbError);
        }else{
            const db = client.db(DB_CONFIG.dbname);
            const collection = db.collection("blacklist");
            collection.findOne({userName},(err,data)=>{
                if(err){
                    res.send(DB_CONFIG.collectionError);
                }else{
                    if(data){
                        res.send({success:false,message:`连续输入密码错误三次以上，${userName}1小时内不能登录`});
                    }else{
                        next();
                    }
                }
            });
        }
    });
};

module.exports = checkBlacklist;

/**
 * 本中间件重点：通过设置TTL让数据在collection到期
 * https://docs.mongodb.com/manual/tutorial/expire-data/
 */