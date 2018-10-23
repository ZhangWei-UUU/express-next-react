var express = require("express");
var router = express.Router();
var QRCode = require("qrcode");

router.get("/",(req,res)=>{
    res.send({data:"error"});
});

router.get("/qrcode",(req,res)=>{
    QRCode.toDataURL("I am a pony!", function (err, url) {
        console.log(url);
        res.send({data:url});
    });
});

module.exports = router;