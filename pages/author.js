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
class Author extends Component{
    render(){
        return(
            <Layout>
                <HeadNav/> 
                <Layout>
                    <Content >
                        <OverPack style={{ overflow: "hidden", height: 100 }} >
                            <TweenOne key="0" animation={{ opacity: 1 }}
                                className="code-box-shape"
                                style={{ opacity: 0, marginBottom: 10 }}
                            />
                            <QueueAnim delay={300} className="queue-simple">
                                <h1 key="a">我们提供一站式学习资源</h1>
                                <p key="b">基于强大的腾讯云资源</p>
                            </QueueAnim>
                        </OverPack>
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default  withRouter(Author);