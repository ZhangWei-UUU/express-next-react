import React from "react";
import { Row, Col,Icon } from "antd";
import Link from "next/link";

const AI = () =>(
    <div className="iot-component">
        <Row>
            <Col lg={12}>
                <div style={{paddingTop:"100px"}}>
                    <h1>Tesseract.js</h1>
                    <p>纯JS图像文字识别库</p>
                    <Link prefetch href="/reactnative"><a>点击进入<Icon type="arrow-right"/> </a></Link>
                </div>
            </Col>
            <Col lg={12}>
                <div style={{paddingTop:"100px"}}>
                    <h1>TensorFlow.js</h1>
                    <p>Google推出纯JS深度学习库</p>
                    <Link prefetch href="/reactnative"><a>点击进入<Icon type="arrow-right"/> </a></Link>
                </div>
            </Col>
        </Row>
    </div>
);

export default AI;