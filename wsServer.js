const WebSocket = require("ws");

const wss = new WebSocket.Server({port:5001});

var timer;

wss.on("connection",(ws)=>{
  let FAKEDATA = {status:"success",data:"数据提交成功"};
  timer = setInterval(()=>{
    var obj = JSON.stringify(FAKEDATA);
    ws.send(obj);
  },1000); 
});

wss.on("close",(ws)=>{
  timer = null;
});
