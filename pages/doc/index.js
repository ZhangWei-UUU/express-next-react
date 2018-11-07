
import React, { Component } from "react";
import Head from "next/head";
import {
  Layout, Row, Col,message
} from "antd";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Highlight from "react-highlight";
import withPrivate from "../../Components/Authentication";
import PropTypes from "prop-types";
import HeadNav from "../../Components/Layout/HeadNav";
import FooterNav from "../../Components/Layout/FooterNav";
import request from "../../Components/Fetch/request";

import "../../doc.css";

class Doc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      content:""
    };
  }

  static getInitialProps({ query,req }) {
    if(process.browser){
      return {theme:query.theme,charpt:query.charpt,loginUser:window.LOGIN_DATA.loginUser};
    }else{
      return {theme:query.theme,charpt:query.charpt,loginUser:req.session.loginUser};
    }
    
  }

  async componentDidMount() {
    const { theme, charpt } = this.props;
    const data = await request("GET", `/api/doc/${theme}/${charpt}`);
    if(data.error){
      message.error(data.error);
      this.setState({
        menu:[],
        content:""
      });
    }else{
      this.setState({
        menu:JSON.parse(data.menu).menu,
        content:data.content
      });
    }
       
  }

  render() {
    let { theme,loginUser } = this.props;
    const { menu,content } = this.state;
    return (
      <Layout>
        <Head>
          <title>嘉竹文库 | 文档</title>
          <link rel="stylesheet" href="/static/highlight/styles/github-gist.css"></link>
        </Head>
        <HeadNav themeStyle="light"  loginUser={loginUser}/>
        <Layout className="doc-container">
          <Row>
            <Col lg={5}>
              {menu.map(mainTab => (
                <div key={mainTab.name}>
                  <div className="menu-main-title">
                    {mainTab.name}
                  </div>
                  <ul className="menu-main-children">
                    {mainTab.children.map(child => (
                      <li key={child.name}>
                        <Link href={`/doc/${theme}/${child.url}`}>
                          <a>
                            {child.name}
                          </a>
                        </Link >
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Col>
            <Col lg={18} offset={1}>
              <Highlight className='language-name-of-snippet'>
                <ReactMarkdown source={content} className="markdown-body" />
              </Highlight>
            </Col>
          </Row> 
        </Layout>
        <FooterNav />
      </Layout>
    );
  }
}

Doc.propTypes = {
  theme: PropTypes.string,
  loginUser:PropTypes.string
};

export default withPrivate(Doc,{redirect:false});
