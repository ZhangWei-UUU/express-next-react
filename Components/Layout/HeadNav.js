import React,{Component} from "react";
import { Menu } from "antd";
import PropTypes from "prop-types";

class HeadNav extends Component{
    logout = () =>{
        fetch("/api/logout").then(res=>res.json()).then(data=>{
            if(data.success){
                window.location.href="/login";
            }
        });
    }
 
    render(){
        let { themeStyle,loginUser } = this.props;
        return(
            <div>
                <Menu
                    theme={themeStyle?themeStyle:"dark"}
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    style={{ lineHeight: "64px",width:"100%" }}
                >
                    <Menu.Item key="0">
                        <a href="/">
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
                    </Menu.Item>
                    <Menu.Item key="right" style={{float:"right"}}>
                        {loginUser?
                            <div>
                                <a href="/admin/usercenter">{loginUser}</a> 
                                <a onClick={this.logout}> | 退出</a>
                            </div>
                            :
          
                            <a  href="/login">未登录</a>
             
                        }
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

HeadNav.propTypes = {
    themeStyle: PropTypes.string,
    loginUser:PropTypes.string
};

export default HeadNav;

