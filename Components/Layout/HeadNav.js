import React,{Component} from "react";
import { Menu} from "antd";
import PropTypes from "prop-types";
import Link from "next/link";

class HeadNav extends Component{
    
    render(){
        let { themeStyle } = this.props;
        return(
            <div>
                <Menu
                    theme={themeStyle?themeStyle:"dark"}
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    style={{ lineHeight: "64px" }}
                >
                    <Menu.Item key="0">
                        <div className="logo">
                            <img src="/static/logo.png" />
                            <p>Gazella Library</p>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Link prefetch href="/">
                            <a>首页</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link prefetch href="/web">
                            <a> Web端</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">移动端</Menu.Item>
                    <Menu.Item key="4">桌面端</Menu.Item>
                    <Menu.Item key="5">
                        <Link prefetch href="/wechat">
                            <a>微信小程序</a>
                        </Link>
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

