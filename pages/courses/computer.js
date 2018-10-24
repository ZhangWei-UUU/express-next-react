import React,{ Component } from "react";
import { Layout,Row,Col } from "antd";
import PropTypes from "prop-types";
import FooterNav from "../../Components/Layout/FooterNav";
import HeadNav from "../../Components/Layout/HeadNav";
import withPrivate from "../../Components/Authentication";
import "../../style.less";

const TCP_IP = [
  {key:0,name:"应用层",protocol:[
    {key:"turning-machine",name:"图灵机"},
    {key:"DNS",name:"DNS"},
  ]},
  {key:1,name:"传输层",protocol:[
    {key:"TCP",name:"TCP"}
  ]},
  {key:2,name:"网络互连层",protocol:[
    {key:"IP",name:"IP"}
  ]},
  {key:3,name:"数据链路层",protocol:[
    {key:"ARP",name:"ARP"},
    {key:"MAC",name:"MAC"},
    {key:"L2TP",name:"L2TP"},
    {key:"PPTP",name:"PPTP"},
  ]},
  {key:4,name:"物理层",protocol:[
       
  ]}
];
class Computer extends Component{
  static getInitialProps(ctx){
    if(process.browser){
      return {loginUser:window.LOGIN_DATA.loginUser};
    }else{
      return {loginUser:ctx.req.session.loginUser};   
    }
  }

  render(){
    let {loginUser} = this.props;
    return(
      <Layout>
        <HeadNav themeStyle="light" loginUser={loginUser}/> 
        <div className="layers">
          {TCP_IP.map(layer=>{
            return(
              <div key={layer.key} className="layer">
                <p><strong>{layer.name}</strong></p>
                <Row>
                  {layer.protocol.map(prot=>{
                    return(
                      <Col key={prot.key} xl={2}>
                        <a href={`/doc/computer/${prot.key}`} >
                          <p>{prot.name}</p>
                        </a>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            );
          })}
        </div>
        <FooterNav />
      </Layout>
    );
  }
}


Computer.propTypes = {
  loginUser:PropTypes.string
};
export default withPrivate(Computer);