import React,{Component} from "react";
import Link from "next/link";
import { Input,Icon, Button,Form } from "antd";
import "../style.css";

const FormItem = Form.Item;

class Register extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="login">
                <div className="login-form">
                    <div>
                        <img src="/static/logo.png" className="login-icon"/>
                        <h1>注册 艾泽拉</h1>
                    </div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator("userName", {
                                rules: [{ required: true, message: "请输入用户名!" }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator("password", {
                                rules: [{ required: true, message: "请输入密码!" }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button htmlType="submit" className="login-form-button">
                            注册 
                            </Button>
                            <Link prefetch href="/login"><a>已有账户，立即登录</a></Link>
                        </FormItem>
                    </Form>
                    <div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Form.create()(Register);