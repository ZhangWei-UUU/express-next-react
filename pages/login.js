import React,{Component} from "react";
import { Checkbox } from "antd";

class Login extends Component{
    render(){
        return(
            <div className="login">
                <div className="login-form">
                    <div>
                        <img src="/static/logo.png" className="login-icon"/>
                        <h1>登录 Gazella Library</h1>
                    </div>
                    <div className="login-input">
                        <input/>
                    </div>
                    <div className="login-input">
                        <input type="password"/>
                    </div>
                    <div className="login-keep">
                        记住密码<Checkbox/> 
                    </div>
                  
                    <div>忘记用户ID或密码？</div>
                    <div>尚未注册账户，立即创建</div>
                </div>
            </div>
        );
    }
}

export default Login;