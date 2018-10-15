import React, { Component } from "react";
import { Row, Col,Button } from "antd";
const FAKE = [
    {key:0,name:"计算机网络",url:"/channel/internet",pic:"/static/shop/internet.jpg",url:"/doc/internet"},
];
class Shop extends Component{
    render(){
        return(
            <div>
                <Row>
                    {
                        FAKE.map(channel=>(
                            <Col xl={6} lg={8} md={12} sm={12} key={channel.key} className="channel-wrap">
                                <a href={channel.url}>
                                    <div className="channel">
                                        <div className="channel-body">
                                            <img src={channel.pic} alt={channel.name}/>
                                        </div>
                                        <div className="channel-footer">
                                            <p>
                                                {channel.name}
                                            </p>
                                            <Button 
                                                type="primary" 
                                                onClick={()=>this.trigger(channel.key)}>
                                        正在订阅</Button>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        );
    }
}

export default Shop;