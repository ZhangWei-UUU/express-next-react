import React,{Component} from "react";
import Link from "next/link";
import Router from "next/router";
import PropTypes from "prop-types";
import { Input,Icon, Button,Form ,Alert,message} from "antd";
import request from "../Components/Fetch/request";
import "../style.less";

const FormItem = Form.Item;

class Register extends Component{
    constructor(props){
        super(props);
        this.state ={
            loading:false,
            alert:null
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                this.setState({
                    loading:true,
                    alert:null
                });
                try{
                    const data =  await request("POST","/api/register",values);
                    if(data.success){
                        console.log(data.payload);
                        message.success(data.message);
                        setTimeout(()=>{
                            Router.push("/login");
                        },1800);
                    }else{
                        
                        this.setState({
                            alert:data.message
                        });
                    }
                }catch(e){
                    this.setState({
                        alert:e.message
                    });
                }finally{
                    this.setState({
                        loading:false
                    });
                }
            }
        });
    }

    render(){
        let { loading,alert } = this.state;
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="login">
                <div className="login-form">
                    <div>
                        <img src="/static/images/logo.webp" className="login-icon"  alt="logo"/>
                        <h1>注册 竹·纸</h1>
                    </div>
                    {alert?<Alert message={alert}
                        type="error"
                        showIcon/>:null}
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator("userName", {
                                rules: [{ required: true, message: "请输入用户名!" }],
                            })(
                                <Input 
                                    autoComplete="on"
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator("password", {
                                rules: [{ required: true, message: "请输入密码!" }],
                            })(
                                <Input
                                    autoComplete="on"
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button htmlType="submit"
                                disabled={ loading }
                                loading={ loading }
                                className="login-form-button">
                            注册 
                            </Button>
                            <Link href="/login"><a>已有账户，立即登录</a></Link>
                        </FormItem>
                    </Form>
                    <div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    form:PropTypes.object
};

export default Form.create()(Register);