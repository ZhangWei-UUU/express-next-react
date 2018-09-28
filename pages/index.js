import React,{Component} from "react";
import { Layout, Row, Col, Icon } from "antd";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import { OverPack } from "rc-scroll-anim";
import Link from "next/link";
import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";
import Head from "next/head";
import ReactEcharts from "echarts-for-react";
import "../style.css";
import { getOption } from "../Constant/barOption";
const { Content } = Layout;

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataView:getOption([1,2,3,4,5,6],"历史现金流",[1000,2000,8000,3500,3310,2120],"#108ee9")
        };
    }

    componentDidMount(){

    }

    render(){
        return(
            <Layout>
                <Head>
                
                </Head>
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
                                                <h1 key="1">竹·纸</h1>
                                                <p key="2">所有的技术都基于JavaScript进行编程，针对不同的应用总结出不同的解决方案，涵盖Web端、安卓移动端、及桌面应用。
                                                在这个虚拟别墅中，我们将所有的可以运行的小案例放入其中进行实例化介绍。我们坚信但凡可以用JS进行编程的地方，终将会被JS所替代。
                                                </p>
                                             
                                                <div key="3">
                                                    <Link prefetch href="/admin/usercenter">
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
                               
                                        <h1 key="a">数据可视化</h1>
                                        <p key="b">基于强大的蚂蚁金服Antd + 百度Echarts</p>
                                        <Link prefetch href="/echarts" key="c-1">
                                          <a>了解更多 <Icon type="arrow-right"/> </a>
                                        </Link>  
                                        <ReactEcharts
                                            key="d"
                                            className="charts-frame"
                                            option={this.state.dataView}      
                                        />
                                   
                            </center>   
                            
            
                        </div>
                        <div className="iot-component">
                            <h1>溯源追踪</h1>
                            <p>基于百度地图进行二次开发</p>
                            <Link prefetch href="/tech/baidumap"><a>了解更多 <Icon type="arrow-right"/> </a></Link>
                            <img src="/static/ipad.png" className="ipad"/>
                            <img src="/static/truck.png" className="truck"/>
                        </div>
                        <div className="tech-component">
                            <Row>
                                <Col lg={14}>
                                    <div className="rn-txt">
                                        <h1>移动端APP</h1>
                                        <p>基于Facebook 框架 React Native 开发移动端</p>
                                        <Link prefetch href="/reactnative"><a>点击进入<Icon type="arrow-right"/> </a></Link>
                                    </div>
                                </Col>
                                <Col lg={10}>
                                    <img src="/static/pixel.png" className="pixel"/>
                                </Col>
                            </Row>
                        </div>
                        <div className="iot-component">
                            <Row>
                                <Col lg={12}>
                                    <div style={{paddingTop:"100px"}}>
                                        <h1>Tesseract.js</h1>
                                        <p>纯JS图像文字识别库</p>
                                        <Link prefetch href="/reactnative"><a>点击进入<Icon type="arrow-right"/> </a></Link>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                <div style={{paddingTop:"100px"}}>
                                        <h1>TensorFlow.js</h1>
                                        <p>Google推出纯JS深度学习库</p>
                                        <Link prefetch href="/reactnative"><a>点击进入<Icon type="arrow-right"/> </a></Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Content>
                </Layout>

                <FooterNav /> 

            </Layout>
        );
    }
}

export default  Home;