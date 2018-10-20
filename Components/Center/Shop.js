import React, { Component } from "react";
import { Row, Col,Button } from "antd";
import PropTypes from "prop-types";

import request from "../Fetch/request";
import COURSES from "../Constant/courses";

class Shop extends Component{
    trigger = async (value) =>{
        let data;
        try{
            data = await request("GET", `/api/shop/order/${value}`);  
        }catch(error){
            message.error(data);
        }
    }
    
    checkOrder = (currentCourse) => {
        let {course} = this.props.userInfo;
        const array = course.filter(name=>{
            if(name === currentCourse){
                return name;
            }else{
                return;
            }
        });
        if(array.length>0){
            return true;
        }else{
            return false;
        }
    }
    render(){

        return(
            <div>
                <Row>
                    {
                        COURSES.map(channel=>(
                            <Col xl={6} lg={8} md={12} sm={12} key={channel.key} className="channel-wrap">
                                <div className="channel">
                                    <div className="channel-body">
                                        <img src={channel.pic} alt={channel.name}/>
                                    </div>
                                    <div className="channel-footer">
                                        <p>
                                            {channel.name}
                                        </p>
                                
                                      
                                        {
                                            this.checkOrder(channel.key)?  
                                                <Button 
                                                    disabled={true}
                                                >
                                                已购买</Button>:
                                                <Button 
                                                    type="primary" 
                                                    onClick={()=>this.trigger(channel.key)}>
                                               获取</Button>
                                        }
                                        
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

Shop.propTypes = {
    userInfo: PropTypes.object,
};
export default Shop;