import React, { Component } from "react";
import { Row, Col,Button } from "antd";
import request from "../Fetch/request";
const FAKE = [
    {key:"internet",name:"计算机网络",pic:"/static/shop/internet.jpg"},
    {key:"hyperledger",name:"Hyperledger区块链",pic:"/static/shop/hyperledger.jpg"},
    {key:"net-secret",name:"网络加密",pic:"/static/shop/net-secret.jpg"},
];
class Shop extends Component{
    trigger = async (value) =>{
        let data;
        try{
            data = await request("GET", `/api/shop/order/${value}`);  
        }catch(error){
            message.error(data);
        }
    }

    render(){
        return(
            <div>
                <Row>
                    {
                        FAKE.map(channel=>(
                            <Col xl={6} lg={8} md={12} sm={12} key={channel.key} className="channel-wrap">
                               
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
                                        订阅</Button>
                                    </div>
                                </div>
                               
                            </Col>
                        ))
                    }
                </Row>
            </div>
        );
    }
}

export default Shop;