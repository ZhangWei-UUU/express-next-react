import React,{Component} from "react";
import { Menu } from "antd";
import "antd/lib/menu/style"; 

import PropTypes from "prop-types";
import Link from "next/link";
import Router from "next/router";

class HeadNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            login:false,
            loginUser:null
        };
    }
    static getInitialProps(){
        
    }

    logout = () =>{
        fetch("/api/logout").then(res=>res.json()).then(data=>{
            if(data.success){
                this.setState({
                    login:false,
                    loginUser:null
                });
                sessionStorage.removeItem("loginUser");
                Router.push("/login");
            }
        });
    }
    
    componentDidMount(){
        const loginUser = sessionStorage.getItem("loginUser");
        if(loginUser){
            this.setState({
                login:true,
                loginUser
            });
        }else{
            fetch("/api/checkSession").then(res=>res.json()).then(data=>{
                if(data.loginUser){
                    sessionStorage.setItem("loginUser", data.loginUser);
                    this.setState({
                        login:true,
                        loginUser:data.loginUser
                    });
                }else{
                    this.setState({
                        login:false,
                        loginUser:null
                    });
                   
                }
            });
        }
    }

   
    render(){
        let { themeStyle } = this.props;
        let { login ,loginUser } = this.state;
        return(
            <div>
                <Menu
                    theme={themeStyle?themeStyle:"dark"}
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    style={{ lineHeight: "64px",width:"100%" }}
                >
                    <Menu.Item key="0">
                        <Link href="/">
                            <a>
                                <div className="logo">
                                    {themeStyle === "light"?
                                        <img src="/static/images/logo-blue.webp" alt="logo-blue"/>:
                                        <img src="/static/images/logo.webp"  alt="logo"/>
                                    }
                                    <p style={themeStyle === "light"?
                                        {color:"#1890ff"}:null
                                    }>竹·纸</p>
                                </div>
                            </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="right" style={{float:"right"}}>
                        {login?
                            <div>
                                <Link href="/admin/usercenter">
                                    <a>{loginUser}</a> 
                                </Link>
                                <a onClick={this.logout}> | 退出</a>
                            </div>
                            :
                            <Link href="/login">
                                <a>未登录</a>
                            </Link>
                        }
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

HeadNav.propTypes = {
    themeStyle: PropTypes.string
};

export default HeadNav;

