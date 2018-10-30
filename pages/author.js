import React,{Component} from "react";
import { Row, Col, Layout, message } from "antd";
import PropTypes from "prop-types";

import withPrivate from "../Components/Authentication";

import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";
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
      data = await request("GET", "/api/staticfile/author");  
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
    let {loginUser} = this.props;
    return(
      <Layout>
        <HeadNav  loginUser={loginUser}/> 
        <Layout  className="doc-container">
          <Content>
            <Row>
              <Col lg={5}>
                             
              </Col>
              <Col lg={18} offset={1}>
                <ReactMarkdown source={this.state.content} className="markdown-body" />
              </Col>
            </Row> 
          </Content>
        </Layout>
        <FooterNav /> 
      </Layout>
    );
  }
}

Author.propTypes = {
  loginUser:PropTypes.string
};
export default withPrivate(Author,{redirect:false});