import React,{ Component } from "react";
import { Layout,Row,Col,Breadcrumb,Card,Steps,Icon  } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import FooterNav from "../../Components/Layout/FooterNav";
import HeadNav from "../../Components/Layout/HeadNav";
import withPrivate from "../../Components/Authentication";
import "../../Style/course.css";

const TCP_IP = [
  {key:0,name:"应用层",protocol:[
    {key:"index",name:"Fabric Simple"},
    {key:"DNS",name:"DNS"},
  ]}
];

const Step = Steps.Step;

const CourseSteps = [
  {key:0,title:"初级课程",description:"xxx"},
  {key:1,title:"源码课程",description:"xxx"},
  {key:2,title:"中级课程",description:"xxx"},
  {key:3,title:"高级课程",description:"xxx"}
];
class Hyperledger extends Component{
  static getInitialProps(ctx){
    if(process.browser){
      return {loginUser:window.LOGIN_DATA.loginUser};
    }else{
      return {loginUser:ctx.req.session.loginUser};   
    }
  }
  
  componentDidMount(){

  }

  render(){
    let {loginUser} = this.props;
    return(
      <Layout>
        <HeadNav themeStyle="light" loginUser={loginUser}/> 
        <div className="course-header">
          <div className="course-header-content">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link href="/"><a>首页</a></Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href="/usercenter?subitem=mychannel"><a>我的课程</a></Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
              当前课程
              </Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col xl={8}>
                <h2>课程名称：</h2>
              </Col>
            </Row>
            <Row>
              <Col xl={8}>
                <p>创建人：</p>
                <p>创建时间：</p>
              </Col>
              <Col xl={8}>
                <p>备注：</p>
                <p>上级门类：</p>
              </Col>
            </Row>
          </div>
        </div>
        <Card title="课程进度" 
          bordered={false} 
          className="course-card"
        >
          <Steps progressDot current={0}>
            {CourseSteps.map(step=>{
              return(
                <Step title={step.title}
                  key={step.key}
                  description={step.description} />
              );
            })}
          </Steps>,
        </Card>
        <Card title="课程目录" 
          bordered={false} 
          className="course-card"
        >
          <p>Card content</p>
        </Card>
        <Card title="知识关联" 
          bordered={false} 
          className="course-card"
        >
          <p>Card content</p>
        </Card>
        <div className="course-setting">
          <Icon type="setting"/>
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