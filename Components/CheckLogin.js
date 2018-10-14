import Router from "next/router";

const CheckLogin = (req,res) =>{
    if(req.session.loginUser){
        return {loginUser:req.session.loginUser};
    }else{
        if (res) {
            res.writeHead(302, {
                Location: "/login"
            });
            res.end();
        } else {
            Router.push("/login");
        } 
    }
};

export default CheckLogin;