import React,{Component} from "react";
import { observer } from "mobx-react";
import { Icon, Divider } from "antd";
import { observable } from "mobx";
import PropTypes from "prop-types";
@observer class LotList extends Component{
  render(){
    return(
      <div className="dynamic-ui-model 
      animated slideInUp ult-speed">
        <div>
          <h1>车位列表</h1>
          <Divider/>
          <h1 id="lot-sum">298 位</h1>
          <Divider/>
          <p>了解本楼盘所有的车位的产权所属，具体位置以及过往的交易情况。</p>
          <p><a onClick={()=>this.props.selectItem(10)}>点击查询</a></p>
        </div>
        <div><img src="/static/images/testicon.png" alt="testicon"/></div>
      </div>
    );
  }
}

LotList.propTypes = {
  selectItem: PropTypes.func
};

export default LotList;