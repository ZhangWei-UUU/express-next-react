
var express = require("express");
var next = require("next");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var MongoDBStore = require("connect-mongodb-session")(session);

var dev = process.env.NODE_ENV !== "production";
var configure = require("./configure/index.js");
var app = next({dev});
var admin = require("./routes/admin.js");
var tech = require("./routes/tech.js");
var doc = require("./routes/doc.js");
var api = require("./api/index.js");
var docapi = require("./api/doc.js");

const handle = app.getRequestHandler();



var store = new MongoDBStore({
	uri: "mongodb://localhost:27017/session",
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
    
	server.use("/admin",admin);
	server.use("/tech",tech);
	server.use("/doc",doc);
	server.use("/api/doc",docapi);
	server.use("/api",api);
	server.get("/",(req,res)=>{
		return app.render(req, res, "/index", req.query);
	});

	server.get("/author",(req,res)=>{
		return app.render(req, res, "/author", req.query);
	});

	server.get("/library",(req,res)=>{
		return app.render(req, res, "/library", req.query);
	});

	server.get("/svg",(req,res)=>{
		return app.render(req, res, "/svg", req.query);
	});

	server.get("/artical/:id",(req,res)=>{
		return app.render(req, res, "/artical", req.query);
	});

	server.get("/web",(req,res)=>{
		return app.render(req, res, "/web", req.query);
	});

	server.get("/wechat",(req,res)=>{
		return app.render(req, res, "/wechat", req.query);
	});

	server.get("/echarts",(req,res)=>{
		return app.render(req, res, "/echarts", req.query);
	});

	server.get("/reactnative",(req,res)=>{
		return app.render(req, res, "/reactnative", req.query);
	});

	server.get("/login",(req,res)=>{
		return app.render(req, res, "/login", req.query);
	});

	server.get("/register",(req,res)=>{
		return app.render(req, res, "/register", req.query);
	});
    
	server.get("/monitor",(req,res)=>{
		return app.render(req, res, "/monitor", req.query);
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});
   
	server.listen(configure.port,(err)=>{
		if (err) throw err;
		console.log("启动Express-next-react App,端口号："+configure.port);
	});
});

// server.use((err,req,res,next)=>{
//     if(req.xhr){
//         return res.send("浏览器挂");
//     }else{
//         next(err);
//     }
// });

process.on("uncaughtException",(err)=>{
	console.log(err);
});

