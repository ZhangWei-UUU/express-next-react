import React,{Component} from "react";
import { observer } from "mobx-react";
import { Icon, Divider } from "antd";

@observer class MyLot extends Component{
  render(){
    return(
      <div className="dynamic-ui-model 
      animated slideInUp ult-speed">
        <div>
          <h1>我的车位</h1>
          <p>点击查询按钮可以了解本车位的产权所属，具体位置以及过往的交易情况。</p>
          <div className="intro-children-list">
            <div><Icon type="idcard"/></div>
            <div>
              <p>车位产权人</p>
            </div>
          </div>
          <div className="intro-children-list">
            <div><Icon type="idcard"/></div>
            <div>
              <p>车位位置</p>
            </div>
          </div>
          <Divider/>
          <button className="dynamic-ui-btn blue">查看列表</button>
        </div>
        <div><img src="/static/images/testicon.png" alt="testicon"/></div>
      </div>
    );
  }
}

export default MyLot;