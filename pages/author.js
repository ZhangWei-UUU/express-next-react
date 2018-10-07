import React,{Component} from "react";
import { Row, Col, Layout, message } from "antd";
import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";
import Highlight from "react-highlight";
import ReactMarkdown from "react-markdown";
import request from "../Components/Fetch/request";
import "../style.css";
const { Content } = Layout;

class Author extends Component{
    constructor(props) {
        super(props);
        this.state = {
            content:""
        };
    };

    async componentDidMount() {
        let data;
        try{
            data = await request("GET", "/api/author");  
        }catch(error){
            message.error(data);
        }

        if(typeof data === "number"){
            message.error(data);
        }
        else{
            if(data.error){
                message.info(data.error);
            }else{
                this.setState({
                    content:data.content
                });
            }    
        }  
    }
    render(){
        return(
            <Layout>
                <HeadNav/> 
                <Layout  className="doc-container">
                    <Content>
                        <Row>
                            <Col lg={5}>
                             
                            </Col>
                            <Col lg={18} offset={1}>
                                <Highlight className='language-name-of-snippet'>
                                    <ReactMarkdown source={this.state.content} className="markdown-body" />
                                </Highlight>
                            </Col>
                        </Row> 
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

export default Author;