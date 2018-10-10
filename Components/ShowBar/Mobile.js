import React from "react";
import { Row, Col } from "antd";
import Link from "next/link";

const Mobile = () =>(
    <div className="tech-component">
        <Row>
            <Col lg={14}>
                <div className="rn-txt">
                    <h1>移动端APP</h1>
                    <p>基于Facebook 框架 React Native 开发移动端</p>
                    <Link prefetch href="/reactnative"><a>点击进入</a></Link>
                </div>
            </Col>
            <Col lg={10}>
                <img src="/static/images/pixel.jpg" className="pixel"/>
            </Col>
        </Row>
    </div>
);

export default Mobile;