import React,{Component} from "react";
import { Layout,Menu,Icon } from "antd";
import { withRouter } from "next/router";
import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";
import "../style.css";
const { SubMenu } = Menu;
const { Content,Sider } = Layout;

class ReactNative extends Component{
    render(){
        return(
            <Layout>
                <HeadNav themeStyle="light"/> 
                <Layout>
                    <Sider width={200} style={{ background: "#fff" }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                            style={{ height: "100%", borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        
                        <Content style={{ background: "#fff", padding: 24, margin: 0, minHeight: 280 }}>
          Content
                        </Content>
                    </Layout>
                
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default  withRouter(ReactNative);