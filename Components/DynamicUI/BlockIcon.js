import React,{Component} from "react";
import { observer } from "mobx-react";
import { Modal } from "antd";
import { observable,toJS } from "mobx";
import Websocket from "react-websocket";

@observer class BlockIcon extends Component{
    @observable  visible = false;
    @observable  blocklist = [];

    handleData = (data) => {
      var item = JSON.parse(data);
      var currentArray = toJS(this.blocklist);
      currentArray.push(item);
      if(currentArray.length>8){
        currentArray.pop();
      }
      this.blocklist = currentArray.reverse();
      console.log(this.blocklist);
    }

    showModal = () => {
      this.visible = true;
    }

    closeModal = () => {
      this.visible = false;
    }

    render(){
      return(
        <div id="block-icon">
          <div id="block-icon-light">
            <div id="block-icon-btn" onClick={this.showModal}>
              区块链<br/>状态
            </div>
          </div>
          <Websocket url='ws://localhost:5001/'
            onMessage={this.handleData}/>
          <Modal visible={this.visible} 
            onCancel={this.closeModal} footer={null}>
            <div id="ws-list">
              {this.blocklist.map((item,key)=>{
                return(
                  <li key={key}>{item.data}</li>
                );
              })}
            </div>
          </Modal> 
        </div>
          
   
      );
    }
}

export default BlockIcon;