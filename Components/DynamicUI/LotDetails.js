import React,{Component} from "react";
import { observer } from "mobx-react";
import { Icon, Table } from "antd";
import { observable } from "mobx";
import PropTypes from "prop-types";

@observer class LotDetails extends Component{
  @observable dataSource = [
    {key:1,id:"c212",owner:"王尼",car_id:"沪AB9832"},
    {key:2,id:"c212",owner:"王尼",car_id:"沪AB9832"},
    {key:3,id:"c212",owner:"王尼",car_id:"沪AB9832"},
    {key:4,id:"c212",owner:"王尼",car_id:"沪AB9832"}
  ]
  render(){

    const columns = [
      {key:"key",dataIndex:"key",title:"序号"},
      {key:"id",dataIndex:"id",title:"车位号"},
      {key:"owner",dataIndex:"owner",title:"产权人"},
      {key:"car_id",dataIndex:"car_id",title:"车牌号"}
    ];

    return(
      <div>
        <div className="dynamic-ui-details-header animated slideInRight faster">
          <div onClick={()=>this.props.selectItem(1)}>
            <Icon type="arrow-left"/>返回
          </div>
          <div className="dynamic-ui-details-title">
              车位列表详情
          </div>
          <div>
            <input/>
          </div>
        </div>
        <div className="dynamic-ui-container animated slideInRight faster delay-half">
          <Table columns={columns} dataSource={this.dataSource}/>
        </div>
      </div>
    );
  }
}

LotDetails.propTypes = {
  selectItem: PropTypes.func
};

export default LotDetails;