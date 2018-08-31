export  const getOption  = (data) =>{
    var categories = [];
    var graph = data;
    for (var i = 0; i < 9; i++) {
        categories[i] = {
            name: "类目" + i
        };
    }
    graph.nodes.forEach(function (node) {
        node.itemStyle = null;
        node.symbolSize = 10;
        node.value = node.symbolSize;
        node.category = node.attributes.modularity_class;
        // Use random x, y
        node.x = node.y = null;
        node.draggable = true;
    });
    var option = {
        title: {
            text: "物数区块链拓扑结构图",
            subtext: "Default layout",
            top: "bottom",
            left: "right"
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        animation: false,
        series : [
            {
                name: "物数区块链拓扑结构图",
                type: "graph",
                layout: "force",
                data: graph.nodes,
                links: graph.links,
                categories: categories,
                roam: true,
                label: {
                    normal: {
                        position: "right"
                    }
                },
                force: {
                    repulsion: 100
                }
            }
        ]
    };
    return option;
};

export const defaultOption = {
    title: {
        text: "物数区块链拓扑结构图",
        subtext: "Default layout",
        top: "bottom",
        left: "right"
    },
    tooltip: {},
    legend: [{
        data:[]
    }],
    animation: false,
    series : [
        {
            name: "物数区块链拓扑结构图",
            type: "graph",
            layout: "force",
            data:[],
            links: [],
            categories: [],
            roam: true,
            label: {
                normal: {
                    position: "right"
                }
            },
            force: {
                repulsion: 100
            }
        }
    ]
};