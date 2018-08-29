import React,{Component} from "react";
import { Layout, Row, Col } from "antd";
import { withRouter } from "next/router";
import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";

import "../style.css";
const { Content } = Layout;
class Library extends Component{
    render(){
        return(
            <Layout>
                <HeadNav themeStyle="light"/> 
                <Layout>
                    <Content >
                        <div className="artical-header">
                            <h1>基于百度地图的二次开发</h1>
                            <p><i>Posted on xx</i></p>
                        </div>
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default  withRouter(Library);