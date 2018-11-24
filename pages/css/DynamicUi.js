import React,{Component} from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import {Icon} from "antd";
import LotList from "../../Components/DynamicUI/LotList";
import MyLot from "../../Components/DynamicUI/MyLot";
import BlockIcon from "../../Components/DynamicUI/BlockIcon";
import LotDetails from "../../Components/DynamicUI/LotDetails";
import "./DynamicUi.css";
import "./animate.css";

const PRODUCTNAME = "绿地金融";
const ITEMS = [
  {key:1,name:"车位列表",icon:"solution"},
  {key:2,name:"我的车位",icon:"idcard"},
  {key:3,name:"金融额度",icon:"dollar"}
];


@observer class DynamicUi extends Component{
    @observable current = 10;
    selectItem = (key) => {
      this.current = key;
    }
    
    render(){
      return(
        <div id="dynamic-ui-body">
          <div id="dynamic-ui-siderbar">
            <h2>{PRODUCTNAME}</h2>
            <ul>
              {ITEMS.map(item=>{
                return(
                  <li key={item.key} 
                    onClick={()=>this.selectItem(item.key)}
                    className={`${item.key === this.current || item.key * 10 === this.current?"dynamic-ui-siderbar-item active":"dynamic-ui-siderbar-item" }`}>
                    <Icon type={item.icon}/><span className="item-text">{item.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dynamic-ui-container">
            {this.current === 1?<LotList selectItem={this.selectItem}/>:
              null}
            {this.current === 2? <MyLot selectItem={this.selectItem}/>:
              null}
            {this.current === 10? <LotDetails selectItem={this.selectItem}/>:
              null}
          </div>
          <BlockIcon/>
        </div>
      );
    }
}

export default DynamicUi; 

