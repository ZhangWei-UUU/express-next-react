import React, { Component } from "react";
import { Row, Col,Button } from "antd";
const FAKE = [
    {key:0,name:"Channel1",url:"/channel/1"},
    {key:1,name:"Channel2",url:"/channel/2"},
    {key:2,name:"Channel3",url:"/channel/3"},
    {key:3,name:"Channel4",url:"/channel/4"},
    {key:4,name:"Channel4",url:"/channel/4"},
    {key:5,name:"Channel4",url:"/channel/4"},
    {key:6,name:"Channel4",url:"/channel/4"},

];
class Mychannel extends Component{

    trigger = (key) =>{
        console.log(key);
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
                            </Col>
                        ))
                    }
                </Row>
            </div>
        );
    }
}

export default Mychannel;