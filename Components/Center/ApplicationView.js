import React,{Component} from "react";
import { observer } from "mobx-react";
import { observable} from "mobx";
const Fake = {
    title:"测试方案",
    icon:"/shop/test.jpg",
    industry:"物流",
    ip:"物数科技",
    stars:5,
    pictures:["1.jpg","2.jpg","3.jpg"],
    introduction:"xxxxxx",

};
@observer class ApplicationView extends Component{
    @observable title = "";
    async componentDidMount() {
      
    }
    render(){
        return(
            <div>

            </div>
        );
    }
}

export default ApplicationView;