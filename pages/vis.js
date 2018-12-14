import React,{Component} from "react";
import Graph from "vis-react";

var graph = {
  nodes: [
    {id: 1, shape:"circle",label: "第一节点",},
    {id: 2, label: "",shape:"image",
      image: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/app_store-128.png",
      color:{background:"red",border:"maroon"}},
    {id: 3, shape:"circle",label: "Node 3"},
    {id: 4, shape:"circle",label: "Node 4"},
    {id: 5, label: "",shape:"image", image: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/app_store-128.png"},
    {id: 6, shape:"circle",label: "Node 6"},
    {id: 7, shape:"circle",label: "Node 7"}
  ],
  edges: [
    {from: 1, to: 2},
    {from: 3, to: 2},
    {from: 4, to: 2},
    {from: 2, to: 5},
    {from: 5, to: 6},
    {from: 5, to: 7}
  ]
};
  
var options = {
  edges: {
    color: "#000000",
    arrows:{to:false}
  },
  nodes:{
    color:{
      background:"#6cb7f0"
    },
    font:{
      color:"#fff"
    },
    icon:{
      face:"FontAwesome",
      code:"\uf007",
      size: 50,
      color:"#2B7CE9"
    }
  },
  
};
  
var events = {
  select: function(event) {
    var { nodes, edges } = event;
  }
};
class Vis extends Component {
  componentDidMount(){
   

  }

  render(){
    return(
      <div style={{height:"800px"}}>
        <Graph graph={graph} options={options} events={events} />
      </div>
    );
  };
}
export default Vis;
