import React,{Component} from "react";
import { Menu} from "antd";
import PropTypes from "prop-types";

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
                    <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">Web端</Menu.Item>
                    <Menu.Item key="3">移动端</Menu.Item>
                    <Menu.Item key="3">桌面端</Menu.Item>
                </Menu>
            </div>
        );
    }
}

HeadNav.propTypes = {
    themeStyle: PropTypes.string
};

export default HeadNav;

