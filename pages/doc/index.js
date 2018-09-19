
import React,{Component} from "react";
import { Layout, Row,Col,Card } from "antd";
import ReactMarkdown from "react-markdown";
import HeadNav from "../../Components/Layout/HeadNav";
import FooterNav from "../../Components/Layout/FooterNav";
import request from '../../Components/Fetch/request';

import "../../style.css";

class Doc extends Component{
    constructor(props){
       super(props);
       this.state ={
           menu:[]
       }
    }
    static getInitialProps ({req}){
       var pathArray = req.path.split("/");
       var theme = pathArray[1];
       var charpt = pathArray[2];
       return {theme,charpt}
    }
    
    async componentDidMount(){
       let  { theme,charpt }= this.props;
       var data = await request("GET",`/api/doc/${theme}/${charpt}`);
           console.log(data)
       }
       
	render(){
        let {menu} = this.state;
		return(
			<Layout>  
				<HeadNav themeStyle="light"/> 
				<Layout className="doc-container">
                    <Row>
                        <Col lg={5}>
                          {menu.map(mainTab=>{
                              return(
                                  <div key={mainTab.name} >
                                    <div className="menu-main-title">
                                     {mainTab.name}
                                     </div>
                                     <ul className="menu-main-children">
                                     {mainTab.children.map(child=>{
                                         return(
                                            <li key={child.name} >
                                            <a href={`?${child.name}`}>{child.name}</a>
                                            </li>
                                         )
                                     })}
                                     </ul>
                                  </div>
                              )
                          })}
                        </Col>
                        <Col lg={18} offset={1}>
                        
                        </Col>
                    </Row>
					{/* <ReactMarkdown source={overview} />			 */}
				</Layout>
				<FooterNav /> 
			</Layout>
		);
	}
}

export default Doc;