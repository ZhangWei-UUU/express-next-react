import React,{Component} from "react";
import { Layout, Row,Col,Card } from "antd";
import Link from "next/link";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import HeadNav from "../../Components/Layout/HeadNav";
import FooterNav from "../../Components/Layout/FooterNav";
import start from "../../Files/Jenkins/start.md";
import pipeline from "../../Files/Jenkins/pipeline.md";
import node from "../../Files/Jenkins/node.md";

import "../../style.css";

const { Content } = Layout;

const LISTS = [
    {name:"指南",subs:[
        {name:"Getting Started",url:"#start"},
        {name:"First Pipeline",url:"#pipeline"},
        {name:"Running Mutiple steps",url:"#helloworld"}
    ] },
    {name:"教程",subs:[
        {name:"Overview",url:"#overview"},
        {name:"Node with npm",url:"#node"},
        {name:"Branches Build",url:"#branches"}
    ] },
    {name:"用户手册",subs:[
        {name:"Install",url:"#install"},
        {name:"Pipeline",url:"#pipeline"},
        {name:"Blue Occean",url:"#blueoccean"}
    ] },
];


class BaiduMapPage extends Component{
   
    render(){
       
        return(
            <Layout>  
                <Head>
                    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=V4K1Be80betFmDcgtokl96sdKINQ0ecO">
                    </script>  
                </Head>
                <HeadNav themeStyle="light"/> 
                <Layout>
                    <Content style={{ background: "#fff", padding: 24, margin: 0, minHeight: 280 }}>
                        <h1>Baidu地图Web版开发</h1>
                  
                        <Row>
                            {LISTS.map(list=>{
                                return(
                                    <Col lg={6} key={list.name}>
                                        <Card style={{margin:"5px 10px",minHeight:"220px"}}>
                                            <h2>{list.name}</h2>
                                            <ul>
                                                {list.subs.map(sub=>{
                                                    return(
                                                        <li key={sub.name}>
                                                            <Link href={sub.url}> 
                                                                <a> {sub.name}</a>
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </Card>
                                    </Col>
                                );
                            })}
                         
                        </Row>
                        <div className="wiki">
                            <h1 id="start">开始Jenkins之旅</h1>
                            <ReactMarkdown source={start} />
                            <h1 id="pipeline">Pipeline</h1>
                            <ReactMarkdown source={pipeline} />
                            <h1 id="node">Node with NPM</h1>
                            <ReactMarkdown source={node} />
                        </div>
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default BaiduMapPage;

