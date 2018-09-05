import React,{Component} from "react";
import { Layout, Row,Col } from "antd";
import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";
import "../style.css";
const { Content } = Layout;

class GitCi extends Component{

    render(){
      
        return(
            <Layout>  
                <HeadNav themeStyle="light"/> 
                <Layout>
                    <Content style={{ background: "#fff", padding: 24, margin: 0, minHeight: 280 }}>
                        <h1>Github CI管理之Travis CI</h1>
                        <p></p>  
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default  GitCi;