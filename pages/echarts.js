import React,{Component} from "react";
import { Layout,Row,Col } from "antd";
import dynamic from "next/dynamic";
import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";
import SimpleNodes from "../Charts/SimpleNodes";
import LinkNodes from "../Charts/LinkNodes";
import "../style.css";

const { Content } = Layout;
const DynamicComA = dynamic(() => import("../Charts/SimpleNodes"), {
    loading: () => <p>...</p>
});

const DynamicComB = dynamic(() => import("../Charts/LinkNodes"), {
    loading: () => <p>...</p>
});

class EchartsPage extends Component{
    render(){
        console.log("xx");
        return(
            <Layout>
                <HeadNav themeStyle="light"/> 
                <Layout>
                    <Content >
                        <Row>
                            <Col lg={16}>
                                <div className="echarts-card">
                                    <DynamicComA/> 
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="echarts-txt">
                           
                                </div>
                            </Col>
                            <Col lg={16}>
                                <div className="echarts-card">
                                    <DynamicComB/>
                                   
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="echarts-txt">
                           
                                </div>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default EchartsPage;