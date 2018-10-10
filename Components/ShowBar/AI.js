import React from "react";
import { Row, Col,Icon } from "antd";

const AI = () =>(
    <div className="iot-component">
        <Row>
            <Col lg={12}>
                <div style={{paddingTop:"100px"}}>
                    <h1>Tesseract.js</h1>
                    <p>纯JS图像文字识别库</p>
                    <a href="/reactnative">点击进入<Icon type="arrow-right"/> </a>
                </div>
            </Col>
            <Col lg={12}>
                <div style={{paddingTop:"100px"}}>
                    <h1>TensorFlow.js</h1>
                    <p>Google推出纯JS深度学习库</p>
                    <a href="/reactnative">点击进入<Icon type="arrow-right"/> </a>
                </div>
            </Col>
        </Row>
    </div>
);

export default AI;