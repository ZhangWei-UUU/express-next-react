const { DB_PORT,DB_HOST} = process.env;
const url = `mongodb://${DB_HOST || "localhost"}:${DB_PORT || 27017}`;
const dbname = "users";
const DB_CONFIG = {
    url,
    dbname,
    dbError:{success:false,message:"MongoDB数据库请求错误"},
    collectionError:{success:false,message:"数据集合没有查到相关数据"}
};
module.exports = DB_CONFIG;