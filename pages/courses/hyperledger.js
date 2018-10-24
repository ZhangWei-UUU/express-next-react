import React,{ Component } from "react";
import { Layout,Row,Col } from "antd";
import PropTypes from "prop-types";
import FooterNav from "../../Components/Layout/FooterNav";
import HeadNav from "../../Components/Layout/HeadNav";
import withPrivate from "../../Components/Authentication";
import "../../style.less";

const TCP_IP = [
  {key:0,name:"应用层",protocol:[
    {key:"index",name:"Fabric Simple"},
    {key:"DNS",name:"DNS"},
  ]}
];
class Hyperledger extends Component{
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
                        <a href={`/doc/hyperledger/${prot.key}`} >
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


Hyperledger.propTypes = {
  loginUser:PropTypes.string
};
export default withPrivate(Hyperledger);