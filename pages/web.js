import React,{Component} from "react";
import { Layout,Row,Col } from "antd";
import { withRouter } from "next/router";
import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";

import "../style.css";
const { Content } = Layout;
class Web extends Component{
    render(){
        return(
            <Layout>
                <HeadNav themeStyle="transparent"/> 
                <Layout>
                    <Content >
                       
                        <div className="web-component">
                            <center>
                                <h1>Web开发</h1>
                                <p>前端安身立命之本</p>
                            </center>
                            <div className="first-component-wrapper">
                                <Row>
                                    <Col lg={24} sm={24} xl={16}>
                                        <div className="web-dashboard"/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default  withRouter(Web);