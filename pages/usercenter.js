import React,{Component} from "react";
import { Layout,Menu,Icon,Skeleton } from "antd";
import { observer } from "mobx-react";
import { observable, toJS } from "mobx";
import PropTypes from "prop-types";
import Link from "next/link";

import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";
import MultiComponents from "../Components/Center";
import withPrivate from "../Components/Authentication";
import request from "../Components/Fetch/request";

import "../style.less";

const { Content, Sider } = Layout;
const { Item } = Menu;
const ITEMS = [
  {name:"我的频道",icon:"user",url:"?subitem=mychannel",key:"mychannel"},
  {name:"消息",icon:"mail",url:"?subitem=message",key:"message"},
  {name:"设置",icon:"setting",url:"?subitem=settings",key:"settings"},
  {name:"应用商店",icon:"shop",url:"?subitem=shop",key:"shop"},
  {name:"条款及隐私政策",icon:"file-done",url:"?subitem=policy",key:"policy"},
  {name:"帮助和反馈",icon:"customer-service",url:"?subitem=help",key:"help"}
];

@observer class UserCenter extends Component{
    @observable userInfo = null;
    static getInitialProps(ctx){
      if(process.browser){
        if(ctx.query.subitem){
          return {subitem:ctx.query.subitem,loginUser:ctx.loginUser}; 
        }else{
          return {subitem:"mychannel",loginUser:ctx.loginUser}; 
        }
     
      }else{
        if(ctx.req.query.subitem){
          return {subitem:ctx.req.query.subitem,loginUser:ctx.req.session.loginUser};
        }else{
          return {subitem:"mychannel",loginUser:ctx.req.session.loginUser};
        }     
      }
    }

    async componentDidMount() {
      let data;
      try{
        data = await request("GET", "/api/currentUserInfo");  
      }catch(error){
        message.error(error);
      }
      this.userInfo = data.payload;
    }

    update = async ()=>{
      let data;
      try{
        data = await request("GET", "/api/currentUserInfo");  
      }catch(error){
        message.error(error);
      }
      this.userInfo = data.payload;
    }

    render(){
      let {subitem,loginUser} = this.props;
      let DynamicComponent =MultiComponents[subitem];

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
                {ITEMS.map((i)=>{
                  return(
                    <Item key={`${i.key}`}>  
                      <Link href={i.url}>
                        <a> 
                          <Icon type={i.icon}/>
                          <span>{i.name}</span>
                        </a>
                      </Link>   
                    </Item>
                  );
                })}
              </Menu>
            </Sider>
            <Content>

              <DynamicComponent userInfo={toJS(this.userInfo)} update={this.update}/>
              
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