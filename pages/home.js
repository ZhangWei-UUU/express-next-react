import React,{Component} from "react";
import Head from "next/head";
import { withRouter } from "next/router";
class Home extends Component{
    render(){
        return(
            <div lang="zh-Hans">
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="张伟JS个人网站"/>
                </Head>
                <h2>zhangwei</h2>
            </div>
        );
    }
}

export default  withRouter(Home);