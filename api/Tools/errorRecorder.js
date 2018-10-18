
var errorTimes = 0;
var previousip = "";
const errorRecorder = (req,account) =>{
    if(errorTimes>3){
        console.log("JOIN BLACK_LIST");
    }
    var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    if(previousip === ""){
        var previousip = ip;
    }else{
        errorTimes +=1;
    }
};

module.exports = errorRecorder;