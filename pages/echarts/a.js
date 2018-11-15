import React,{Component} from "react";
import { Layout } from "antd";
import ReactEcharts from "echarts-for-react";
import HeadNav from "../../Components/Layout/HeadNav";
import FooterNav from "../../Components/Layout/FooterNav";
import { defaultOption, getOption } from "../../Charts/OptionConfig/LinkNodeFunc";
import fackData from "../../Fack/les-nodes.json";

import "../../style.css";

const { Content } = Layout;

class EchartsPage extends Component{
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
      <Layout>
        <HeadNav themeStyle="light"/> 
        <Layout>
          <Content >
            <ReactEcharts option={this.state.option}/>
          </Content>
        </Layout>
        <FooterNav /> 
      </Layout>
    );
  }
}

export default EchartsPage;