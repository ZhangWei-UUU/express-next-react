import React, { Component } from "react";
import { Row, Col,Button } from "antd";
import { observer } from "mobx-react";
import { observable,toJS} from "mobx";
import PropTypes from "prop-types";
import request from "../Fetch/request";

@observer class Mychannel extends Component{
    @observable myCourses = [];
    @observable isDrawer = false;
    @observable currentCourse= "";

    
    
    closeDrawer = () => {
      this.isDrawer = false;
    }

    popUp = (channel) => {
      this.isDrawer = true;
      this.currentCourse = channel;
    }
    
    delete = async (e,value) =>{
      e.preventDefault();
      e.stopPropagation();
      let data;
      try{
        data = await request("DELETE", `/api/shop/order/${value}`);  
      }catch(error){
        message.error(data);
      }
      if(data.success){
        this.props.update();
      }else{
        message.warn("失败");
      }
    }
    render(){
      let myCourses = this.props.userInfo.courses;
      return(
        <div>
          <Row>
            {
              myCourses.map(channel=>(
                <Col xl={6} lg={8} md={12} sm={12} key={channel} className="channel-wrap">
                  <a href={`/course?name=${channel}`}>
                    <div className="channel">
                      <div className="channel-body">
                        <img src={`/static/shop/${channel}.jpg`} alt={channel}/>
                      </div>
                      <div className="channel-footer">
                        <p>
                          {channel}
                        </p>
                        <Button type="primary" onClick={(e)=>this.delete(e,channel)}>删除</Button>
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

Mychannel.propTypes = {
  userInfo: PropTypes.object,
  update: PropTypes.func
};

export default Mychannel;