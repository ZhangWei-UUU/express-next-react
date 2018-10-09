import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

const data =  [{
    name: "节点1",
    x: 2000,
    y: 2000
}, {
    name: "节点2",
    x: 800,
    y: 300
}, {
    name: "节点3",
    x: 550,
    y: 100
}, {
    name: "节点4",
    x: 550,
    y: 500
}];
/**
 * @param { Object } option
 * @param { Array } data
 * 对于ReactEcharts组件来说，他需要接收一个必选参数option, 在该对象中定义了Chart的
 * 标题。其中核心的属性为data，其为数组结构用于表Chart的具体数据。
 * links是表示各个节点直接关系的连接对象，其类型是数组形式，在一般情况下，links数组中的元素对象
 * 只有两个属性：source和target，对两个节点进行简单的关系描述。
 */
const option = {
    title: {
        text: "节点简单示例"
    },
    tooltip: {},
    animationDurationUpdate: 1200, //更新时加载动画时间
    animationEasingUpdate: "quinticInOut",//更新时加载动画类型
    series : [
        {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data:data,
            links: [  {
                source: "节点1",
                target: "节点3"
            }, {
                source: "节点2",
                target: "节点3"
            }, {
                source: "节点2",
                target: "节点4"
            }, {
                source: "节点1",
                target: "节点4"
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        }
    ]
};
class SimpleNodes extends Component{
    render(){
        var r = 100;
        var count = 4;
        var x = 100;
        var y = 100;
        var radians = (Math.PI /180 ) * Math.round(360/count);
        var result = [];
        for(let i = 0; i <count;i++){
            var newx = x+ r*Math.sin(radians * i);
            var newy = y+ r*Math.cos(radians * i);
            result.push({x:newx,y:newy});
            // console.log("xx",newx);
        }
        // console.log(result);
        // console.log(radians);
        return(
            <ReactEcharts option={option}/>
        );
    }
}

export default SimpleNodes;