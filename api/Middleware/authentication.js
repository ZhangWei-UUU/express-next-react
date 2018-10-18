const checkPrivated = (req,res,next) => {
    const {loginUser} = req.session;
    if(loginUser){
        next();
    }else{
        res.send({success:false,message:"当前请求无权限"});
    }
};

module.exports = checkPrivated;