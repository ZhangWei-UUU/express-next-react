import React from "react";
import ReactEcharts from "echarts-for-react";
import { getOption } from "../../Constant/barOption";

const FackBar = () =>(
    <div>
        <ReactEcharts
            className="charts-frame"
            option={getOption([1,2,3,4,5,6],"历史现金流",[1000,2000,8000,3500,3310,2120],"#108ee9")}      
        />
    </div>
);

export default FackBar;