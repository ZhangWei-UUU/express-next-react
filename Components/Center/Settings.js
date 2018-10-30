import React, { Component } from "react";
import { Row, Col,Card, Input,Button,Form,Upload,Icon,Tree,Tag,Alert,Tooltip } from "antd";
import { observer } from "mobx-react";
import { observable,toJS} from "mobx";
import PropTypes from "prop-types";
import request from "../Fetch/request";

import "../../Style/course.css";
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
@observer class Settings extends Component{
    // 进度条
    @observable tags = ["ceshi"];
    @observable formStatus = null;
    @observable inputVisible = false;
    showInput = () => {
      this.inputVisible= true;
      () => this.input.focus();
    }

    saveInputRef = input => this.input = input

    handleClose = (removedTag) => {
      const tags = this.tags.filter(tag => tag !== removedTag);
      this.tags = tags;
    }

    handleInputChange = (e) => {
      console.log(e.target.value);
      this.inputValue =  e.target.value;
    }

    handleInputConfirm = () => {
      let tags = this.tags;
      //   if (this.inputValue && this.tags.indexOf(inputValue) === -1) {
      //     tags = [...tags, this.inputValue];
      //   }
      tags = [...tags, this.inputValue];
      this.inputValue =  "";
      this.inputVisible= false;
      this.tags = tags;
    }

   handleSubmit = (e) => {
     e.preventDefault();
     this.props.form.validateFields(  async (err, values) => {
     
       if (!err) {
         this.formStatus = "loading";
         let data;
         try{
           data = await request("PUT", "/api/course/setting");  
         }catch(e){
           this.formStatus = "error";
         }finally{
           setTimeout(()=>{
             this.formStatus = null;
           },3000);
         }
         console.log(data);
       }else{
         console.log("Received values of form: ", values);
       }
     });
   }

   render(){
     const { getFieldDecorator } = this.props.form;

     return(
       <div>
         <Card title="新增课程" 
           bordered={false} 
           className="course-card"
         >
           {this.formStatus === "error"?<Alert message="新增课程失败" type="error" showIcon />:null}
           
           <Form onSubmit={this.handleSubmit}>
             <FormItem
               {...formItemLayout}
               label="课程名称"
             >
               {getFieldDecorator("couseName", {
                 rules: [ {
                   required: true, message: "请填写课程名称!",
                 }],
               })(
                 <Input />
               )}
             </FormItem>
          

             <FormItem
               {...formItemLayout}
               label="上传课程主题图片"
             >
               <div className="dropbox">
                 {getFieldDecorator("dragger", {
                   valuePropName: "fileList",
                   getValueFromEvent: this.normFile,
                 })(
                   <Upload.Dragger name="files" action="/upload.do">
                     <p className="ant-upload-drag-icon">
                       <Icon type="inbox" />
                     </p>
                     <p className="ant-upload-text">点击或将文件拖拽到此处</p>
                     <p className="ant-upload-hint">支持批量文件上传</p>
                   </Upload.Dragger>
                 )}
               </div>
             </FormItem>
             <FormItem
               {...formItemLayout}
               label="关卡设置"
             >
               {
                 this.tags.map((tag, index) => {
                   const isLongTag = this.tags.length > 3;
                   const tagElem = (
                     <Tag key={tag} 
                       closable={index !== 0} 
                       afterClose={() => this.handleClose(tag)}>
                       {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                     </Tag>
                   );
                   return isLongTag ? 
                     <Tooltip title={tag} key={tag}>
                       {tagElem}
                     </Tooltip> : tagElem;
                 })
               }
               {this.inputVisible && (
                 <Input
                   ref={this.saveInputRef}
                   type="text"
                   size="small"
                   style={{ width: 78 }}
                   value={this.inputValue}
                   onChange={this.handleInputChange}
                   onBlur={this.handleInputConfirm}
                   onPressEnter={this.handleInputConfirm}
                 />
               )}
               {!this.inputVisible && (
                 <Tag
                   onClick={this.showInput}
                   style={{ background: "#fff", borderStyle: "dashed" }}
                 >
                   <Icon type="plus" /> 添加步骤
                 </Tag>
               )}
             </FormItem>
             <FormItem
               {...formItemLayout}
               label="目录设置"
             >
               <span className="ant-form-text">China</span>
             </FormItem>
             <FormItem
               {...formItemLayout}
               label="父级科目"
             >
               <span className="ant-form-text">China</span>
             </FormItem>
             <FormItem>
               <Button type="primary" htmlType="submit" className="course-btn">确认提交</Button>
             </FormItem>
           </Form>
         </Card>


         <Card title="个人账户" 
           bordered={false} 
           className="course-card"
         >
           <Row>
             <Col xl={12}>
               <Input placeholder="填写新密码"/>
             </Col>
             <Col xl={10} offset={2}>
               <Button type="primary">提交修改</Button>
             </Col>
           </Row>
         </Card>
       </div>
     );
   }
}

Settings.propTypes = {
  form:PropTypes.object
};
export default Form.create()(Settings);