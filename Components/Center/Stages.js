import React,{Component} from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import PropTypes from "prop-types";
import { Row,Col,message, Divider,Carousel,Icon } from "antd";
import ReactMarkdown from "react-markdown";

import request from "../Fetch/request";

@observer class Stages extends Component{
    @observable application = null
    @observable title = null
    async componentDidMount() {
      
    }

    async componentDidUpdate(prevProps) {
       
        
    }

    render(){
        console.log(this.props);
        return(
            <div className="app-details">
                {this.application?
                    <div>
                        <div>
                           
                        </div>
                       
                    </div>:null
                   
                }
            </div>
        );
    }
}

Stages.propTypes = {
    closeDrawer: PropTypes.func,
    app:PropTypes.string
};
export default Stages;