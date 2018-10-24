import React,{Component} from "react";
import {Layout,Row,Col} from "antd";
import Link from "next/link";
import Head from "next/head";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import withPrivate from "../Components/Authentication";
import HeadNav from "../Components/Layout/HeadNav";
import "../style.less";

const { Content } = Layout;

const DynamicFooter = dynamic(import("../Components/Layout/FooterNav"),{ssr:false});
const DynamicMobile = dynamic(import("../Components/ShowBar/Mobile"),{ssr:false});
const DynamicAI = dynamic(import("../Components/ShowBar/AI"),{ssr:false});
const DynamicMap = dynamic(import("../Components/ShowBar/Map"),{ssr:false});

class Home extends Component{
  static getInitialProps(ctx){
    if(process.browser){
      return {loginUser:window.LOGIN_DATA.loginUser};
    }else{
      return {loginUser:ctx.req.session.loginUser};   
    }
  }
  render(){
    let {loginUser} = this.props;
    return(
      <Layout>
        <Head>
          <title>PICCOLO-WEB</title>
        </Head>
        <HeadNav themeStyle="transparent" loginUser={loginUser}/> 
        <Layout>
          <Content >
            <div className="first-component">
              <div className="first-component-wrapper">
                <Row>
                  <Col lg={9}>
                                  
                    <h1 key="1">PICCOLO-WEB</h1>
                    <p key="2">所有的技术都基于JavaScript进行编程，针对不同的应用总结出不同的解决方案，涵盖Web端、安卓移动端、及桌面应用。
                                                在这个虚拟别墅中，我们将所有的可以运行的小案例放入其中进行实例化介绍。我们坚信但凡可以用JS进行编程的地方，终将会被JS所替代。
                    </p>
                                             
                    <div key="3">
                      <Link href="/usercenter">
                        <a>
                          <button>点击进入</button>
                        </a>
                      </Link>
                    </div>
                                          
                  </Col>
                  <Col lg={15}>
                    <img src="/static/images/house-arch.webp" key="6"  alt="house"/>                          
                  </Col>
                </Row>
                                
              </div>
            </div>
            <div className="service-component">
              <center>
                <h1 key="a">数据可视化</h1>
                <p key="b">基于强大的蚂蚁金服Antd + 百度Echarts</p>
                <a href="/echarts" key="c-1">
                                    了解更多 
                </a>  
                            
              </center>   
            </div>
            <DynamicMap/>
            <DynamicMobile/>
            <DynamicAI/>
          </Content>
        </Layout>
        <DynamicFooter /> 
      </Layout>
    );
  }
};

Home.propTypes = {
  loginUser:PropTypes.string
};

export default withPrivate(Home,{redirect:false});