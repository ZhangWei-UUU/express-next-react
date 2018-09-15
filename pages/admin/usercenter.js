import React,{Component} from "react";
import { Layout, Row, Col } from "antd";
import HeadNav from "../../Components/Layout/HeadNav";
import FooterNav from "../../Components/Layout/FooterNav";

import "../../style.css";
const { Content } = Layout;
class UserCenter extends Component{
	render(){
		return(
			<Layout>
				<HeadNav themeStyle="light"/> 
				<Layout>
					<Content >
						<div className="house">
             user center
						</div>
					</Content>
				</Layout>
				<FooterNav /> 
			</Layout>
		);
	}
}

export default  UserCenter;