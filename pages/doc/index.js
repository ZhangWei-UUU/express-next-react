
import React, { Component } from "react";
import {
    Layout, Row, Col,message
} from "antd";
import ReactMarkdown from "react-markdown";
import Highlight from 'react-highlight'
import PropTypes from "prop-types";
import HeadNav from "../../Components/Layout/HeadNav";
import FooterNav from "../../Components/Layout/FooterNav";
import request from "../../Components/Fetch/request";

import "../../style.css";

class Doc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [],
            content:""
        };
    }

    static getInitialProps({ query }) {
        return {theme:query.theme,charpt:query.charpt};
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
        let { theme } = this.props;
        const { menu,content } = this.state;
        return (
            <Layout>
                <HeadNav themeStyle="light" />
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
                                                <a href={`/doc/${theme}/${child.url}`}>{child.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Col>
                        <Col lg={18} offset={1}>
                          <Highlight languages={["javascript"]}>
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
    theme: PropTypes.string
};

export default Doc;
