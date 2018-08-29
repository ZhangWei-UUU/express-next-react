import React,{Component} from "react";
import { Layout, Row, Col } from "antd";
import { withRouter } from "next/router";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import { OverPack } from "rc-scroll-anim";
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
                        <div className="house">
                        s
                        </div>
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default  withRouter(Library);