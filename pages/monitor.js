import React,{Component} from "react";
import { Layout, Row, Col,Icon,Card } from "antd";
import PropTypes from "prop-types";

import HeadNav from "../Components/Layout/HeadNav";
import FooterNav from "../Components/Layout/FooterNav";
import CheckLogin from "../Components/CheckLogin";

import "../style.less";
const { Content } = Layout;

class Monitor extends Component{
    static getInitialProps(ctx){
        let {req,res} = ctx;
        var result = CheckLogin(req,res);
        if(result){
            return {loginUser:result.loginUser};
        }else{
            return {loginUser:null};
        }
    }
    constructor(props){
        super(props);
        this.state ={
            data:null
        };
    }
    componentDidMount(){
        fetch("/api/environment").then(res=>res.json()).then(data=>{
            this.setState({
                data
            });
        });
    }
    render(){
        let {data} = this.state;
        let {loginUser} = this.props;
        var CARDS = [];
        if(data){
            CARDS = [
                {key:0, title:"当前环境",icon:"laptop",value:data.environment},
                {key:6, title:"进程ID",icon:"fork",value:data.pid},
                {key:1, title:"IP地址",icon:"compass",value:`公网：${data.ip}`},
                {key:2, title:"CPU",icon:"global",value:`${data.cpu.length}核 | ${data.cpu[0].model}`},
                {key:3, title:"内存",icon:"save",value:data.freeMem/1024/1024+ "MB"},
                {key:4, title:"磁盘",icon:"hdd",value:data.environment},
                {key:5, title:"数据库",icon:"database",value:"端口："+data.dbPort},
                {key:6, title:"Node版本",icon:"edit",value:"端口："+data.dbPort},
            ];
        }

        return(
            <Layout>
                <HeadNav themeStyle="light" loginUser={loginUser}/> 
                <Layout>
                    <Content >
                        <Row>
                            {CARDS.map(card=>{
                                return(
                                    <Col lg={6} key={card.key}>
                                        <div className="monitor">
                                            <Card>
                                                <Row>
                                                    <Col lg={8}>
                                                        <Icon type={card.icon}/>
                                                        <h4>{card.title}</h4>
                                                    </Col>
                                                    <Col lg={16}>
                                                        {card.value}
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Content>
                </Layout>
                <FooterNav /> 
            </Layout>
        );
    }
}

Monitor.propTypes = {
    loginUser:PropTypes.string
};
export default  Monitor;