import React,{Component} from "react";
import { Layout, Row,Col,Card } from "antd";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";
import overview from "../Files/CircleCI/overview.md";
import firstCI from "../Files/CircleCI/firstCI.md";
import "../style.css";

const { Content } = Layout;

const LISTS = [
    {key:1,name:"开始",subs:[
        {key:13,name:"CI/CD overview",url:"#overview"},
        {key:11,name:"构建第一个Green Build",url:"#firstCI"},
        {key:12,name:"Hello World",url:"#helloworld"}
    ] },
    {key:2,name:"案例",subs:[
        {key:21,name:"与开源项目配合",url:"#ss"},
        {key:22,name:"数据配置案例",url:"#ss"},
        {key:23,name:"config.yml 案例",url:"#ss"},
        {key:24,name:"教程链接",url:"#ss"}
    ] },
    {key:3,name:"配置",subs:[
        {key:21,name:"配置参考",url:"#ss"},
        {key:22,name:"YAML的书写",url:"#ss"},
        {key:23,name:"环境变量的使用",url:"#ss"},
        {key:24,name:"SSH debug",url:"#ss"}
    ] },
    {key:4,name:"工作流",subs:[
        {key:21,name:"在日程表上使用工作流",url:"#ss"},
        {key:22,name:"工作流配置案例",url:"#ss"},
        {key:23,name:"日程表",url:"#ss"},
        {key:24,name:"过滤",url:"#ss"}
    ] }
];
class GitCi extends Component{
   
    render(){
        
        return(
            <Layout>  
                <HeadNav themeStyle="light"/> 
                <Layout>
                    <Content style={{ background: "#fff", padding: 24, margin: 0, minHeight: 280 }}>
                        <h1>持续化集成 Circle CI</h1>
                        <p></p>  
                
                        <Row>
                            {LISTS.map(list=>{
                                return(
                                    <Col lg={6} key={list.key}>
                                        <Card style={{margin:"5px 10px",minHeight:"220px"}}>
                                            <h2>{list.name}</h2>
                                            <ul>
                                                {list.subs.map(sub=>{
                                                    return(
                                                        <li key={sub.key}>
                                                            <Link prefetch href={sub.url}> 
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
                            <h1 id="overview">总览</h1>
                            <ReactMarkdown source={overview} />
                            <h1 id="firstCI">构建第一个Green Build</h1>
                            <ReactMarkdown source={firstCI} />
                            <h1 id="helloworld">Hello World</h1>
                            <ReactMarkdown source={firstCI} />
                        </div>
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default  GitCi;