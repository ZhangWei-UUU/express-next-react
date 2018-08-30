import React,{Component} from "react";
import { Layout } from "antd";
import { withRouter } from "next/router";
import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";

import "../style.css";
const { Content } = Layout;
class Svg extends Component{
    render(){
        return(
            <Layout>
                <HeadNav themeStyle="light"/> 
                <Layout>
                    <Content >
                        <div className="svg-card">
                           
                        </div>
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default  withRouter(Svg);