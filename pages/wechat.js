import React,{Component} from "react";
import { Layout, Row, Col } from "antd";
import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";

import "../style.css";
const { Content } = Layout;
class Wechat extends Component{
    render(){
        return(
            <Layout>
                <HeadNav themeStyle="transparent"/> 
                <Layout>
                    <Content >
                        <div className="wechat-component">
                            <center>
                                <h1>微信小程序</h1>
                                <p>低成本完成敏捷开发,随时随地连接应用</p>
                            </center>
                        </div>
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default Wechat;