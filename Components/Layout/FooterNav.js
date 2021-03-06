import React,{Component} from "react";
import { Row,Col } from "antd";

import "../../style.css";

const array = [
  {title:"IT基础",items:[
    {name:"网络通信",link:"/doc/internet/index"},
    {name:"JavaScript",link:"/doc/javascript/index"},
    {name:"Github",link:"/doc/github/index"},
    {name:"shell",link:"/doc/shell/index"},
    {name:"Webpack",link:"/doc/webpack/index"}
  ]},
  {title:"关于嘉竹文库",items:[
    {name:"作者简介",link:"/author"},
    {name:"设计文档",link:"/doc/architecture/index"},
    {name:"后台展示",link:"/monitor"},
    {name:"NEXT7",link:"/doc/next7/index"},
  ]},
  {title:"更多技术",items:[
    {name:"less",link:"/doc/less/index"},
    {name:"React 高级用法",link:"/doc/react/index"},
    {name:"算法",link:"/doc/algorithm/index"},
    {name:"React Native Navigator",link:"/doc/react-native-navigator/Getting-started"},
  ]},
  {title:"联系我们",items:[
    {name:"Email: kanseefoil@gmail.com",link:"/author"},
  ]}
];
class FooterNav extends Component{
  render(){
    return(
      <div className="footer">
        <div className="footer-content">
          <Row>
            {array.map(obj=>{
              return(
                <Col lg={6} key={obj.title}>
                  <p><strong>{obj.title}</strong></p>
                  {obj.items.map(item=>{
                    return(   
                      <a href={item.link} key={item.name}>
                        <p>{item.name}</p>
                      </a>
                    );
                  })}
                </Col>
              );
            })}
                   
                   
          </Row>
          <center style={{marginTop:"50px"}}>
                      嘉竹文库版权所有© 2018 备案号：沪ICP备18022274号-1
          </center>
        </div>
      </div>
    );
  }
}

export default FooterNav;

