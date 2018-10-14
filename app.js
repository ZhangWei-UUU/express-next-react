
var express = require("express");
var next = require("next");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var MongoDBStore = require("connect-mongodb-session")(session);
const compression = require("compression");
var dev = process.env.NODE_ENV !== "production";
var configure = require("./configure/index.js");
var app = next({dev});
const DB_CONFIG = require("./db");
var api = require("./api/index.js");
var docapi = require("./api/doc.js");

const handle = app.getRequestHandler();

var store = new MongoDBStore({
    uri: `${DB_CONFIG.url}/session`,
    collection: "sessions"
});

app.prepare().then(()=>{
    var server = express();
    server.set("trust proxy", 1); // trust first proxy
    server.set("port",configure.port);
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use(require("express-session")({
        secret: "This is a secret",
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        },
        store: store,
        resave: true,
        saveUninitialized: true
    }));
    server.use(cookieParser());
    server.use(compression());
    server.use("/api",api);
    server.use("/api/doc",docapi);
    server.get("/",(req,res)=>{
        return app.render(req, res, "/index",req.query);
    });
     
    server.get("/doc/:theme/:charpt",(req,res)=>{
        return app.render(req, res, "/doc",{theme:req.params.theme,charpt:req.params.charpt});
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    });
   
    server.listen(configure.port,(err)=>{
        if (err) throw err;
        console.log("启动Express-next-react App,端口号："+configure.port);
    });
});
// app.get('*', (req, res) => nextApp.render(req, res, '/noFound', req.query));
process.on("uncaughtException",(err)=>{
    console.log(err);
});

