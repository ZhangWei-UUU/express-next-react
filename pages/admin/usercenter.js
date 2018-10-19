import React,{Component} from "react";
import { Layout,Menu,Icon } from "antd";
import { observer } from "mobx-react";
import { observable, toJS } from "mobx";
import PropTypes from "prop-types";

import HeadNav from "../../Components/Layout/HeadNav";
import FooterNav from "../../Components/Layout/FooterNav";
import MultiComponents from "../../Components/Center";
import withPrivate from "../../Components/Authentication";
import request from "../../Components/Fetch/request";

import "../../style.less";

const { Content, Sider } = Layout;
const ITEMS = [
    {name:"我的频道",icon:"user",url:"?subitem=mychannel",key:"mychannel"},
    {name:"消息",icon:"mail",url:"?subitem=message",key:"message"},
    {name:"设置",icon:"setting",url:"?subitem=settings",key:"settings"},
    {name:"应用商店",icon:"shop",url:"?subitem=shop",key:"shop"},
    {name:"条款及隐私政策",icon:"file-done",url:"?subitem=policy",key:"policy"},
    {name:"帮助和反馈",icon:"customer-service",url:"?subitem=help",key:"help"}
];

@observer class UserCenter extends Component{
    @observable courses = [];
    static getInitialProps(ctx){
        let {req} = ctx;
        if(req.query.subitem){
            return {subitem:req.query.subitem,loginUser:req.session.loginUser};
        }else{
            return {subitem:"mychannel",loginUser:req.session.loginUser};
        }
    }

    async componentDidMount() {
        let data;
        try{
            data = await request("GET", "/api/currentUserInfo");  
        }catch(error){
            message.error(error);
        }

        this.courses = data.payload.course;
    }
    render(){
        let {subitem,loginUser} = this.props;
        const DynamicComponent = MultiComponents[subitem];
        console.log(toJS(this.courses));
        return(
            <Layout>
                <HeadNav themeStyle="light" loginUser={loginUser}/> 
                <Layout>
                    <Sider>
                        <Menu
                            style={{ width: "100%",height:"100%" ,minHeight:"900px"}}
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
                    </Sider>
                    <Content>
                        <DynamicComponent/>
                    </Content>  
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

UserCenter.propTypes = {
    subitem: PropTypes.string,
    loginUser:PropTypes.string
};

export default withPrivate(UserCenter,{redirect:true});