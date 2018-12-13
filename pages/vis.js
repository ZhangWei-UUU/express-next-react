import React,{Component} from "react";
import { Network, Node, Edge } from "@lifeomic/react-vis-network";



class Vis extends Component {
  componentDidMount(){
   

  }
  render(){
    const CustomIcon = () => {
 
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
             
            </g>
          </g>
        </svg>
      );
    };
    return(
      <div>
        <Network style={{height:"800px"}}>
          <Node id="vader" label="vader"  icon={<div>xxx</div>} />
          <Node id="Orderer" label="Orderer" component={CustomIcon}/>
          <Node id="Org1" label="Org1" component={CustomIcon}/>
          <Node id="Org-peer1" label="Org-peer1"/>
          <Node id="Org-peer2" label="Org-peer2"/>
          <Node id="leia" label="leia" />
          <Edge id="1" from="Orderer" to="leia" />
          <Edge id="2" from="Orderer" to="vader" />
          <Edge id="3" from="Orderer" to="Org1" />
          <Edge id="4" from="Org1" to="Org-peer1" />
          <Edge id="5" from="Org1" to="Org-peer2" />
        </Network>
      </div>
    );
  }
}

export default Vis;
