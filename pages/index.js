import React,{Component} from "react";
import {Layout,Row,Col} from "antd";
import Link from "next/link";
import Head from "next/head";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import withPrivate from "../Components/Authentication";
import HeadNav from "../Components/Layout/HeadNav";
import "../style.css";

const { Content } = Layout;

const DynamicFooter = dynamic(import("../Components/Layout/FooterNav"),{ssr:false});
const DynamicMobile = dynamic(import("../Components/ShowBar/Mobile"),{ssr:false});
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
          <title>嘉竹文库</title>
        </Head>
        <HeadNav themeStyle="transparent" loginUser={loginUser}/> 
        <Layout>
          <Content >
            <div className="first-component">
              <div className="first-component-wrapper">
                <Row>
                  <Col lg={9}>
                                  
                    <h1 key="1">嘉竹文库</h1>
                    <p key="2">
                    现代的教育起源于18世纪的普鲁士，其教育特点在于将原本有机相连的人类知识人为的切割成固定学科，
                    在固定的地点、固定的时间由固定的老师填鸭式地灌输给学生。尽管这样工厂流水线式的教育有利于快速
                    普及教育，让家境贫寒的子弟能够享受到廉价的教育，并为国家提供大批工业化人才。
                    但是对于知识的原始动力——好奇心，有着天然地扼杀。对于培养具有独立思想、深度知识的高端人才有着极为不利的一面。
                    随着互联网时代的到来，知识的日新月异。如果再依靠以纸笔作为载体的传统教育显然就如同19世纪的清末用八股取士来培养人才一样，
                    在如今全球化的竞争中，必然处于失败的境地。
                    </p>
                    <p>
                       嘉竹文库的初衷在于利用现代互联网文本及可视化技术让使用者能够自己订阅、定制知识。 鼓励用户使用软件加快学习效率而非用于打游戏或是用于追剧。
                       在打字敲击中享受理工科逻辑演算的快乐，在图形化演变中更加容易地理解几何、物理、地理等抽象知识。
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
                    <img src="/static/images/library.svg" 
                      
                      key="6"  alt="house"/>                          
                  </Col>
                </Row>
                                
              </div>
            </div>
            <DynamicMobile/>
            <DynamicMap/>
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