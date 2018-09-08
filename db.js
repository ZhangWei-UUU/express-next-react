const url = `mongodb://localhost:${process.env.DB_PORT || 27017}`;
const dbname = "users";
const DB_CONFIG = {
    url,
    dbname,
};
module.exports = DB_CONFIG;