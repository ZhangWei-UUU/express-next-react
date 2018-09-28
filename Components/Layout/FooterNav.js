import React,{Component} from "react";
import { Row,Col } from "antd";
import Link from "next/link";
const array = [
    {title:"友情链接",items:[
        {name:"语雀",link:"https://www.yuque.com/"},
        {name:"Github",link:"https://www.yuque.com/"}
    ]},
    {title:"关于竹·纸",items:[
        {name:"作者简介",link:"/author"},
        {name:"设计文档",link:"/doc/architecture/index"},
        {name:"后台展示",link:"/monitor"},
    ]},
    {title:"更多技术",items:[
        {name:"Code Mirror",link:"/tech/codemirror"},
        {name:"Jenkins",link:"/tech/jenkins"},
        {name:"Git CI",link:"/tech/gitci"},
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
                                            <Link prefetch href={item.link} key={item.name}>
                                                <a>
                                                    <p>{item.name}</p>
                                                </a>
                                            </Link>
                                            
                                        );
                                    })}
                                </Col>
                            );
                        })}
                   
                   
                    </Row>
                    <center style={{marginTop:"50px"}}>
                      竹·纸版权所有© 2018 备案号：沪ICP备18022274号-1
                    </center>
                </div>
            </div>
        );
    }
}

export default FooterNav;

