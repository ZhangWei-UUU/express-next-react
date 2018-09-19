var express = require("express");
var next = require("next");
var router = express.Router();
var dev = process.env.NODE_ENV !== "production";
var app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(()=>{
    router.get("/:theme/:charpt",(req,res)=>{
        return app.render(req, res, "/doc", {theme:req.params.theme,charpt:req.params.charpt});
    });
});


module.exports = router;
