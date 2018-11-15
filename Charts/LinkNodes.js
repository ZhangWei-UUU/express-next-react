import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import fackData from "../Fack/les-nodes.json";
import { defaultOption, getOption } from "./OptionConfig/LinkNodeFunc";

class LinkNodes extends Component{
  constructor(porps){
    super(porps);
    this.state = {
      option:defaultOption
    };
  }
  componentDidMount(){
    this.setState({
      option:getOption(fackData)
    });
  }
  render(){
    return(
      <ReactEcharts option={this.state.option}/>
    );
  }
}

export default LinkNodes;