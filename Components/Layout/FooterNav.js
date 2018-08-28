import React,{Component} from "react";
import { Row,Col } from "antd";

const array = [
    {title:"友情链接",items:[
        {name:"语雀",link:"/author"},
        {name:"Github",link:"/author"}
    ]},
    {title:"关于GL",items:[
        {name:"作者简介",link:"/author"},
        {name:"产品简介",link:"/author"}
    ]},
    {title:"更多产品",items:[]},
    {title:"联系我们",items:[
        {name:"email",link:"/author"},
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
                                            <p key={item.name}>{item.name}</p>
                                        );
                                    })}
                                </Col>
                            );
                        })}
                   
                   
                    </Row>
                </div>
            </div>
        );
    }
}

export default FooterNav;

