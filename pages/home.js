import React,{Component} from "react";
import { Layout, Row, Col, Icon } from "antd";
import { withRouter } from "next/router";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import { OverPack } from "rc-scroll-anim";
import Link from "next/link";
import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";
import "../style.css";
import { CARDS } from "../Constant/homepage";

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
                                <Row>
                                    <Col lg={9}>
                                        <OverPack style={{ overflow: "hidden", height: 400 }} >
                                            <TweenOne key="0" animation={{ opacity: 1 }}
                                                className="code-box-shape"
                                                style={{ opacity: 0, marginBottom: 10 }}
                                            />
                                            <QueueAnim delay={300} className="queue-simple">
                                                <h1 key="1">艾泽拉·虚拟别墅</h1>
                                                <p key="2">所有的技术都基于JavaScript进行编程，针对不同的应用总结出不同的解决方案，涵盖Web端、安卓移动端、及桌面应用。
                                                在这个虚拟别墅中，我们将所有的可以运行的小案例放入其中进行实例化介绍。我们坚信但凡可以用JS进行编程的地方，终将会被JS所替代。
                                                </p>
                                             
                                                <div key="3">
                                                    <Link prefetch href="/library">
                                                        <a>
                                                            <button>点击进入</button>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </QueueAnim>
                                        </OverPack>
                                    </Col>
                                    <Col lg={15}>
                                        <OverPack style={{ overflow: "hidden", height: 400 }} >
                                            <TweenOne key="5" animation={{ opacity: 1 }}
                                                className="code-box-shape"
                                                style={{ opacity: 0, marginBottom: 10 }}
                                            />
                                            <QueueAnim delay={1000} className="queue-simple">
                                                <img src="/static/house-arch.png" key="6"/>
                                            </QueueAnim>
                                        </OverPack>
                                    </Col>
                                </Row>
                                
                            </div>
                        </div>
                        <div className="service-component">
                            <center>
                                <OverPack style={{ overflow: "hidden", height: 130 }} >
                                    <TweenOne key="0" animation={{ opacity: 1 }}
                                        className="code-box-shape"
                                        style={{ opacity: 0, marginBottom: 10 }}
                                    />
                                    <QueueAnim delay={300} className="queue-simple">
                                        <h1 key="a">一站式学习资源</h1>
                                        <p key="b">基于强大的腾讯云资源</p>
                                    </QueueAnim>
                                </OverPack>
                            </center>   
                            
                            <Row className="first-component-wrapper">
                                <OverPack style={{ overflow: "hidden", height: 400 }} >
                                    <TweenOne key="0" animation={{ opacity: 1 }}
                                        className="code-box-shape"
                                        style={{ opacity: 0, marginBottom: 10 }}
                                    />
                                    <QueueAnim delay={600} className="queue-simple">
                                        {CARDS.map(card=>{
                                            return(
                                                <Col lg={6} key={card.key}>
                                                    <div className="home-card">{card.name}</div>
                                                </Col> 
                                            );
                                        })}
                                    </QueueAnim>
                                </OverPack>
                            </Row>
                        </div>
                        <div className="iot-component">
                            <h1>溯源追踪</h1>
                            <p>基于百度地图进行二次开发</p>
                            <Link prefetch href="/artical/baidumap"><a>了解更多 <Icon type="arrow-right"/> </a></Link>
                            <img src="/static/ipad.png" className="ipad"/>
                            <img src="/static/truck.png" className="truck"/>
                        </div>
                        <div className="tech-component">
                            
                        </div>
                    </Content>
                </Layout>

                <FooterNav /> 

            </Layout>
        );
    }
}

export default  withRouter(Home);