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
class Home extends Component{
    render(){
        return(
            <Layout>
                <HeadNav themeStyle="transparent"/> 
                <Layout>
                    <Content >
                        <div className="first-component">
                            <div className="first-component-wrapper">
                                <h1>Gazella Library</h1>
                                <p>针对不同的应用总结出不同的解决方案，涵盖Web端、安卓移动端、及桌面应用。</p>
                            </div>
                        </div>
                        <div className="service-component">
                            <center>
                                <OverPack style={{ overflow: "hidden", height: 200 }} >
                                    <TweenOne key="0" animation={{ opacity: 1 }}
                                        className="code-box-shape"
                                        style={{ opacity: 0, marginBottom: 10 }}
                                    />
                                    <QueueAnim delay={300} className="queue-simple">
                                        <h1 key="a">Title</h1>
                                        <p key="b">Vice-Title</p>
                                    </QueueAnim>
                                </OverPack>
                            </center>   
                            <Row>
                                <Col lg={12}>ss</Col> 
                            </Row>
                        </div>
                        
                    </Content>
                </Layout>

                <FooterNav /> 

            </Layout>
        );
    }
}

export default  withRouter(Home);