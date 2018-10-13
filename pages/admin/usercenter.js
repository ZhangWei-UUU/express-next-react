import React,{Component} from "react";
import { Layout, Row, Col,Menu,Icon } from "antd";
import HeadNav from "../../Components/Layout/HeadNav";
import FooterNav from "../../Components/Layout/FooterNav";
import MultiComponents from "../../Components/Center";
import PropTypes from "prop-types";
import "../../style.less";
const { Content } = Layout;
const ITEMS = [
    {name:"我的频道",icon:"user",url:"?subitem=mychannel",key:"mychannel"},
    {name:"消息",icon:"mail",url:"?subitem=message",key:"message"},
    {name:"设置",icon:"setting",url:"?subitem=settings",key:"settings"},
    {name:"条款及隐私政策",icon:"file-done",url:"?subitem=policy",key:"policy"},
    {name:"帮助和反馈",icon:"customer-service",url:"?subitem=help",key:"help"}
];

class UserCenter extends Component{
    static getInitialProps(ctx){
        if(ctx.req.query.subitem){
            return {subitem:ctx.req.query.subitem};
        }else{
            return {subitem:"mychannel"};
        }
    }

   
    render(){
        let {subitem} = this.props;
        const DynamicComponent = MultiComponents[subitem];
        return(
            <Layout>
                <HeadNav themeStyle="light"/> 
                <Layout>
                    <Content>
                        <Row>
                            <Col lg={6}>
                                <Menu
                                    style={{ width: "100%",height:"100%" }}
                                    defaultSelectedKeys={[subitem]}
                                    mode={"inline"}
                                    theme={"light"}
                                >
                                    {ITEMS.map((item,key)=>{
                                        return(
                                            <Menu.Item key={item.key}>     
                                                <a href={item.url}> 
                                                    <Icon type={item.icon} />
                                                    {item.name}
                                                </a>
                                            </Menu.Item>
                                        );
                                    })}
                                </Menu>
                            </Col>
                            <Col lg={18}>
                                <DynamicComponent/>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

UserCenter.propTypes = {
    subitem: PropTypes.string
};
export default  UserCenter;