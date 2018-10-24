import React,{Component} from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import PropTypes from "prop-types";
import { Row,Col,message, Divider,Carousel,Icon } from "antd";
import ReactMarkdown from "react-markdown";

import request from "../Fetch/request";

@observer class ApplicationView extends Component{
    @observable application = null
    @observable title = null
    async componentDidMount() {
      let {app} = this.props;
      this.title = app.key;
      let data;
      try{
        data = await request("GET", `/api/shop/details/${app.key}`);  
      }catch(error){
        throw Error(error);
      }
        
      if(data.success){
        this.application = data.payload;
      }else{
        message.error(data.message);
        this.props.closeDrawer();
      }
    }

    async componentDidUpdate(prevProps) {
      if(prevProps.app.key !== this.props.app.key){
        let {app} = this.props;
        this.title = app.key;
        let data;
        try{
          data = await request("GET", `/api/shop/details/${app.key}`);  
        }catch(error){
          console.log(error);
        }
        
        if(data.success){
          this.application = data.payload;
        }else{
          message.error(data.message);
          this.props.closeDrawer();
        }
      }
    }
    render(){
      return(
        <div className="app-details">
          {this.application?
            <div>
              <div>
                <Row>
                  <Col xl={6}>
                    <img 
                      className="icon"
                      src={`data:image/png;base64,${this.application.icon}`} alt="icon"/>
                  </Col>
                  <Col  xl={18}>
                    <h1>{this.application.name}</h1>
                    <p>方案提供方：{this.application.provider}</p>
                    <Divider/>
                    <p>行业：{this.application.industry} | 
                                    评分：
                    {[1,2,3,4,5].map(st=>{
                      return(
                        <Icon type="star" theme="outlined" key={st}/>
                      );
                    })}
                    </p>
                  </Col>
                </Row>
              </div>
              <Carousel autoplay className="carousel-pics">
                {this.application.images.map((image,key)=>{
                  return(
                    <div key={key}>
                      <img 
                        className="image"
                        src={`data:image/jpeg;base64,${image}`} alt="image"/>
                    </div>
                  );
                          
                })}
              </Carousel>
              <ReactMarkdown 
                source={this.application.readme} 
                className="markdown-body" />
            </div>:null
                   
          }
        </div>
      );
    }
}

ApplicationView.propTypes = {
  closeDrawer: PropTypes.func,
  app:PropTypes.object
};
export default ApplicationView;