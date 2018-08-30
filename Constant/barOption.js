export const getOption = (month,singleName,data,color) =>{
    const option = {
        tooltip : {
            trigger: "axis",
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : "shadow"        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:["xxx","xxx","xx"]
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        xAxis : [
            {
                type : "category",
                data : month
            }
        ],
        yAxis : [
            {
                type : "value"
            }
        ],
        series : [
            {
                name:singleName,
                type:"bar",
                data:data,
                barWidth:"30%",
                itemStyle: {
                    normal: {
                        color: color,            
                    }
                }
            },
               
        ]
    };
    return option;
};