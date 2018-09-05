import React,{Component} from "react";
import { Layout, Row,Col } from "antd";
import { Controlled as CodeMirror} from "react-codemirror2";
import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";
import "../style.css";
const { Content } = Layout;

class CodeMirrorPage extends Component{

    render(){
        if (process.browser) {
            require("codemirror/mode/javascript/javascript.js");
        }
        return(
            <Layout>  
                <HeadNav themeStyle="light"/> 
                <Layout>
                    <Content style={{ background: "#fff", padding: 24, margin: 0, minHeight: 280 }}>
                        <Row>
                            <Col lg={16}>
                              
                            </Col>
                            <Col lg={8}>
                                <CodeMirror
                                    value={"var zhangwei = 123"}
                                    options={{
                                        mode: "javascript",
                                        theme: "default",
                                        lineNumbers: true
                                    }}  
                                />
                            </Col>
                        </Row>  
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default  CodeMirrorPage;