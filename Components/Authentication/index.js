import React,{Component} from "react";
import NextDocument from "next/document";
import Router from "next/router";

export default (InputComp,custom) =>(
    class withPrivate extends NextDocument {
        static getInitialProps(ctx) {
            let {req,res} = ctx;
            if(custom.redirect && !req.session.loginUser){
                if (res) {
                    res.writeHead(302, {
                        Location: "/login"
                    });
                    res.end();
                } else {
                    Router.push("/login");
                } 
            }else{
                return InputComp.getInitialProps(ctx);
            }  
        }
        
        render(){
            return <InputComp {...this.props}/>;
        }
    }
);



