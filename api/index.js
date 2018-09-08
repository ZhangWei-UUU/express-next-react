var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const DB_CONFIG = require("../db");

router.post("/register",(req,res)=>{
    MongoClient.connect(DB_CONFIG.url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        res.end("register");
    });
   
});

router.post("/login",(req,res)=>{
    MongoClient.connect(DB_CONFIG.url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        res.end("test1");
    });  
});

module.exports = router;
