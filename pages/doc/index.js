
import React,{Component} from "react";
import { Layout, Row,Col,Card } from "antd";
import ReactMarkdown from "react-markdown";
import HeadNav from "../../Components/Layout/HeadNav";
import FooterNav from "../../Components/Layout/FooterNav";
import request from '../../Components/Fetch/request';

import "../../style.css";

class Doc extends Component{
    static getInitialProps ({req}){
        var resoucePath = req.path.split("/");
        var item = resoucePath[1];
        var menuList = require(`../../Files/${item}/list.json`);
        return {menuList,item}
    }
    
    componentDidMount(){
        let item = this.props;
        const URL = `/api/doc/${item}/${null}`;
        const data = request("GET",URL);
        console.log(data)
    }
	render(){
        let {menu} = this.props.menuList;
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
                         ds
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