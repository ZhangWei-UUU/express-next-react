import React from "react";
import { Row, Col } from "antd";

const Mobile = () =>(
    <div className="tech-component">
        <Row>
            <Col lg={14}>
                <div className="rn-txt">
                    <h1>移动端APP</h1>
                    <p>基于Facebook 框架 React Native 开发移动端</p>
                    <a  href="/reactnative">点击进入</a>
                </div>
            </Col>
            <Col lg={10}>
                <img src="/static/images/pixel.jpg" className="pixel"/>
            </Col>
        </Row>
    </div>
);

export default Mobile;