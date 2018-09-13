import React,{Component} from "react";
import { Menu} from "antd";
import PropTypes from "prop-types";
import Link from "next/link";

class HeadNav extends Component{
    constructor(props){
        super(props)
        this.state = {
            login:false
        }
    }
    componentDidMount(){
        const user = localStorage.getItem("userSession");
        console.log(user);
        if(user){
          this.setState({
              login:true
          })
        }else{
            this.setState({
                login:false
            })
        }
    }
    render(){
        let { themeStyle } = this.props;
        let { login } = this.state;
        return(
            <div>
                <Menu
                    theme={themeStyle?themeStyle:"dark"}
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    style={{ lineHeight: "64px",width:"100%" }}
                >
                    <Menu.Item key="0">
                        <Link prefetch href="/">
                            <a>
                                <div className="logo">
                                    {themeStyle === "light"?
                                        <img src="/static/logo-blue.png" />:
                                        <img src="/static/logo.png" />
                                    }
                                    <p style={themeStyle === "light"?
                                        {color:"#1890ff"}:null
                                    }>Gazella Villa</p>
                                </div>
                            </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="right" style={{float:"right"}}>
                      {login?
                       <Link prefetch href="/api/logout">
                      <a>退出</a>
                      </Link>
                      :
                      <Link prefetch href="/login">
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

