const { DB_PORT,DB_HOST} = process.env;
const url = `mongodb://${DB_HOST || "localhost"}:${DB_PORT || 27017}`;
const dbname = "users";
const DB_CONFIG = {
    url,
    dbname,
};
module.exports = DB_CONFIG;