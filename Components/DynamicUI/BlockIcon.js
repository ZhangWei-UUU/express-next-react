import React,{Component} from "react";
import { observer } from "mobx-react";
import { Modal } from "antd";
import { observable } from "mobx";

@observer class BlockIcon extends Component{
    @observable  visible = false;

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
        
          <Modal visible={this.visible} onCancel={this.closeModal} footer={null}>
            <div id="ws-list">x</div>
          </Modal> 
        </div>
          
   
      );
    }
}

export default BlockIcon;