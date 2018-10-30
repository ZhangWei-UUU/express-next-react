import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import request from "../Fetch/request";
import "../../style.css";

class Messages extends Component{
    constructor(props) {
        super(props);
        this.state = {
            content:""
        };
    };
    async componentDidMount() {
        let data;
        try{
            data = await request("GET", "/api/staticfile/policy");  
        }catch(error){
            message.error(data);
        }

        if(typeof data === "number"){
            message.error(data);
        }
        else{
            if(data.error){
                message.info(data.error);
            }else{
                this.setState({
                    content:data.content
                });
            }    
        }  
    }
    render(){
        return(
            <div className="staticfile">
                <ReactMarkdown 
                    source={this.state.content} 
                    className="markdown-body" />
            </div>
        );
    }
}

export default Messages;