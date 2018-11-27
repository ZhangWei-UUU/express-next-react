import React, { Component } from "react";
import { Row,Col,Badge  } from "antd";
import request from "../Fetch/request";
import "../../style.css";

const FAKE = [
  {key:0,icon:"info",content:"恭喜您，正式开通账户。恭喜您，正式开通账户。恭喜您，正式开通账户。",time:"2018-09-28"},
  {key:1,icon:"info",content:"恭喜您，正式开通账户。恭喜您，正式开通账户。恭喜您，正式开通账户。",time:"2018-09-28"},
  {key:2,icon:"info",content:"恭喜您，正式开通账户。恭喜您，正式开通账户。恭喜您，正式开通账户。",time:"2018-09-28"},
  {key:3,icon:"info",content:"恭喜您，正式开通账户。恭喜您，正式开通账户。恭喜您，正式开通账户。",time:"2018-09-28"},
  {key:4,icon:"info",content:"恭喜您，正式开通账户。恭喜您，正式开通账户。恭喜您，正式开通账户。",time:"2018-09-28"},
  {key:5,icon:"info",content:"恭喜您，正式开通账户。恭喜您，正式开通账户。恭喜您，正式开通账户。",time:"2018-09-28"},
  {key:6,icon:"info",content:"恭喜您，正式开通账户。恭喜您，正式开通账户。恭喜您，正式开通账户。",time:"2018-09-28"},
  {key:7,icon:"info",content:"恭喜您，正式开通账户。恭喜您，正式开通账户。恭喜您，正式开通账户。",time:"2018-09-28"}
];

class Messages extends Component{
  render(){
    return(
      <div className="staticfile">
        {FAKE.map(obj=>{
          return(
            <div key={obj.key} className="message-bar">
              <Row>
                <Col xl={{span:3}}>
                  {obj.time}
                </Col>
                <Col xl={{span:18}}>
                  <Badge dot>
                    {obj.content}
                  </Badge>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Messages;