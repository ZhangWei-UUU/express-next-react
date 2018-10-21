import React, { Component } from "react";
import { Row, Col,Button,message,Drawer,Icon } from "antd";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import { observable,toJS} from "mobx";
import request from "../Fetch/request";
import COURSES from "../Constant/courses";
import ApplicationView from "./ApplicationView";

@observer class Shop extends Component{
    @observable isDrawer = false;
    @observable currentCourse= "";

    trigger = async (e,value) =>{
        e.stopPropagation();
        let data;
        try{
            data = await request("GET", `/api/shop/order/${value}`);  
        }catch(error){
            message.error(data);
        }
        if(data.success){
            this.props.update();
        }else{
            message.warn("失败");
        }
    }
    
    checkOrder = (currentCourse) => {
        let {courses} = this.props.userInfo;
        if(courses && courses.length>0){
            const array = courses.filter(name=>{
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
        }else{
            return false;
        }
       
    }
    
    closeDrawer = () => {
        this.isDrawer = false;
    }

    popUp = (channel) => {
        this.isDrawer = true;
        this.currentCourse = channel;
    }

    render(){

        return(
            <div>
                <Drawer
                    height="100%"
                    className="application-drawer"
                    title={<Icon type="down" theme="outlined" onClick={this.closeDrawer} />}
                    placement="bottom"
                    closable={false}
                    onClose={this.closeDrawer}
                    visible={this.isDrawer}
                >
                  
                
                    <ApplicationView 
                        app={toJS(this.currentCourse)}  
                        closeDrawer={this.closeDrawer}/>
    
                  
                   
                </Drawer>
                <Row>
                    {
                        COURSES.map(channel=>(
                            <Col xl={6} lg={8} md={12} sm={12} key={channel.key} className="channel-wrap">
                                <div className="channel" onClick={()=>this.popUp(channel)}>
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
                                                    onClick={(e)=>this.trigger(e,channel.key)}>
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
    update: PropTypes.func
};
export default Shop;