import React,{ Component } from "react";
import { Layout,Row,Col,Breadcrumb,Card,Steps,Icon,Alert,Skeleton,Tree,Tag } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import { observable, toJS } from "mobx";
import FooterNav from "../Components/Layout/FooterNav";
import HeadNav from "../Components/Layout/HeadNav";
import withPrivate from "../Components/Authentication";
import request from "../Components/Fetch/request";

import "../Style/course.less";

const DirectoryTree = Tree.DirectoryTree;
const TreeNode = Tree.TreeNode;

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
@observer class Course extends Component{
    @observable status = null;
    @observable content = null
    @observable testDate = ""

    static getInitialProps(ctx){
      if(process.browser){
        return {loginUser:window.LOGIN_DATA.loginUser,name:ctx.query.name};
      }else{
        return {loginUser:ctx.req.session.loginUser,name:ctx.req.query.name};   
      }
    }
  
    async componentDidMount(){
      this.status = "loading";
      let {name} = this.props;
      const time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth()+1;
      let day = time.getDate();
      let hour = time.getHours();
      let minues = time.getMinutes();
      this.testDate = `${year}年${month}月${day}日 ${hour}:${minues}`;
      let data;

      try{
        data = await request("GET", `/api/course/${name}`);  
      }catch(error){
        this.status = "error";
      }

      if(data.success){
        this.content = data.content;
        this.status = "success";     
      }else{
        this.status = "error"; 
      }
    }

    render(){
      let {loginUser} = this.props;
      console.log(toJS(this.content));
      return(
        <Layout>
          <HeadNav themeStyle="light" loginUser={loginUser}/> 
          <div className="course-header">
            {this.status === "error"?<Alert 
              message="网络加载失败,请检查网络是否正常" type="error" showIcon />:null}
            {this.status === "success"?
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
                    <p>创建人：{this.content.author}</p>
                    <p>创建时间：{this.testDate}</p>
                  </Col>
                  <Col xl={8}>
                    <p>备注：{this.content.notes}</p>
                    <p>上级门类：{
                      this.content.parents.map(parent=>{
                        return(
                          <Tag color="volcano" 
                            key={parent}>{parent}</Tag>
                        );
                      })
                    }</p>
                  </Col>
                </Row>
              </div>
              :<Skeleton active />}
          </div>
        
          <Card title="课程进度" 
            bordered={false} 
            className="course-card"
          >
            {this.status === "success"?
              <Steps progressDot current={0}>
                {this.content.steps.map(step=>{
                  return(
                    <Step title={step.title}
                      key={step.key}
                      description={step.description} />
                  );
                })}
              </Steps> :<Skeleton active />}
          </Card>
           
        
          <Card title="课程目录" 
            bordered={false} 
            className="course-card"
          >
            {this.status === "success"?
              <DirectoryTree
                multiple
                defaultExpandAll
                onSelect={this.onSelect}
                onExpand={this.onExpand}
              >
                {
                  this.content.menu.map(it=>{
                    if(it.children && it.children.length>0){
                      return(
                        <TreeNode title={it.name} key={it.name}>
                          {it.children.map(child=>{
                            return(
                              <TreeNode title={child.name} key={child.name} isLeaf />
                            );
                          })}
                        </TreeNode>
                      );
                    }
                    return(
                      <TreeNode title={it.name} key={it.name}>
                        ss
                      </TreeNode>
                    );
                  })
                }
             
              </DirectoryTree>
             
              :<Skeleton active />}     
          </Card>
            
        
          <Card title="知识关联" 
            bordered={false} 
            className="course-card"
          >
            {this.status === "success"?
              this.content.relatives.map(relative=>{
                return(
                  <Tag color="#f50" 
                    key={relative.title}>{relative.title}</Tag>
                );
              })
              :<Skeleton active />}      
          </Card>
            
          <div className="course-setting">
            <Icon type="setting"/>
          </div>
          <FooterNav />
        </Layout>
      );
    }
}


Course.propTypes = {
  loginUser:PropTypes.string,
  name:PropTypes.string
};

export default withPrivate(Course);