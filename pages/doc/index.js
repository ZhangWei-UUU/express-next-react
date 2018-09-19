
import React, { Component } from "react";
import {
    Layout, Row, Col, Card,
} from "antd";
import ReactMarkdown from "react-markdown";
import HeadNav from "../../Components/Layout/HeadNav";
import FooterNav from "../../Components/Layout/FooterNav";
import request from "../../Components/Fetch/request";

import "../../style.css";

class Doc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [],
        };
    }

    static getInitialProps({ query }) {
        return {theme:query.theme,charpt:query.charpt};
    }

    async componentDidMount() {
        const { theme, charpt } = this.props;
        const data = await request("GET", `/api/doc/${theme}/${charpt}`);
        console.log("页",data);
    }

    render() {
        const { menu } = this.state;
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
                                                <a href={`?${child.name}`}>{child.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Col>
                        <Col lg={18} offset={1} />
                    </Row>
              
                    {/* <ReactMarkdown source={overview} />			 */}
                </Layout>
                <FooterNav />
            </Layout>
        );
    }
}

export default Doc;
