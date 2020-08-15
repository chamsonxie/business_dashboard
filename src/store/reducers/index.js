import icon1 from '../images/icon-01.png'
import icon2 from '../images/icon-02.png'
import icon3 from '../images/icon-03.png'
import icon4 from '../images/icon-04.png'
import icon5 from '../images/icon-05.png'
import icon6 from '../images/icon-06.png'
// import SET_MAP_DATA from '../actionsTypes'
const SET_MAP_DATA = "SET_MAP_DATA"

const defaultState = {
    num:888,
    barOption:{
        legend:{
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                z:0,
                type: "shadow",
                shadowStyle: {
                    color: 'rgba(155, 65, 155, 0.3)',
                },
            },
            padding:10,
            backgroundColor:'#201440',
            borderColor:'#8391ce',
            borderWidth:1,
            formatter:(params)=>{
                var p = "<span style='display:inline-block;width:10px;height:10px;border-radius:50%;background-color:gold;margin-right:6px;'></span>"
                return  params[0].name + '<br>'+p+'排名 : <b> '+ (params[0].dataIndex+1)/1 +' </b><br/> '+p+'市场市值 : <b>'+params[0].value+' </b> 亿元<br/>';
            }
        },
        grid:{
            top:'30',
            left:'60',
            bottom:'0',
            right:'100',
            height:'auto',
            width:'auto'
        },
        title:{
            text:"市价总值排行Top10",
            textStyle:{
                color:"#7a98fd"
            }
        },
        yAxis: {
            type: 'category',
            data:[],
            inverse:true,
            axisLine:{
                show:false
            },
            axisLabel:{
                color:'#8391ce'
            },
        },
        xAxis: {
            type: 'value',
            show:false,
            axisLine:{
                show:false
            },
            label:{
                show:true,
                color:'#8391ce'
            },
            
        },
        series: [{
            data: [],
            type: 'bar',
            barWidth:10,
            label:{
                show:true,
                position:'right',
                color:'#8391ce'
            },
            emphasis:{
                label:{
                    show:true,
                    color:'#fddc40',
                },
                itemStyle:{
                    color:{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#e2e299' 
                        }, {
                            offset: .8, color: '#ffe239' 
                        }],
                    },
                }
            },
            itemStyle:{
                color:{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#AFC2F9' 
                    }, {
                        offset: .8, color: '#185EFF' 
                    }],
                }   
            }
        }]
    },
    tableData:[
        { count:3574,name: "上市公司数",icon:icon1},
        { count:20018,name: "上市证券数",icon:icon2},
        { count:455294,name: "股票总市值(亿元)",icon:icon3},
        { count:370448,name: "股票流通市值(亿元)",icon:icon4},
        { count:13,name: "上市平均市盈率",icon:icon5},
        { count:12,name: "深市平均市盈率",icon:icon6},
    ],
    mapOption:{
        title: {
            text: '上市公司地域分布',
            subtext: '人口密度数据来自Wikipedia',
            sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12',
            textStyle:{
                color:'#7a98fd'
            }
        },
        tooltip: {
            trigger: 'item',
            padding:10,
            backgroundColor:'#201440',
            borderColor:'#8391ce',
            borderWidth:1,
            formatter: (p)=>{
                var dot = "<span style='display:inline-block;width:10px;height:10px;border-radius:50%;background-color:gold;margin-right:6px;'></span>"
                var bijiao = p.data ? ("<br>" + dot +"深圳上市 : " + p.data.sz_count + "<br>" + dot +"上海上市 : " + p.data.sh_count ): ""
                return  p.name + "<br/>"+dot+"上市公司数 : " + (p.value?p.value:"无数据") +(bijiao || "" )
            }
        },
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //         dataView: {readOnly: false},
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        visualMap: {
            type:'piecewise',
            splitNumber: 6 ,
            itemWidth:10,
            itemHeight:7,
            left:6,
            bottom:0,
            pieces: [
                {min: 500, max: 600}, 
                {min: 400, max: 500},
                {min: 300, max: 400},
                {min: 200, max: 300},
                {min: 100, max: 200},
                {min: 0, max: 100}
            ],
            inRange:{
                color: ['#8399ee', '#1780ef']
            },
            textStyle:{
                color:'#83ccce'
            },
        },
        series:{
            name: '上市公司地域分布',
            type: 'map',
            mapType: 'china', // 自定义扩展图表类型
            label: {
                show: true
            },
            data:[],
            itemStyle: {
                normal:{
                    label:{
                        show:true,
                        color:"#83cccea0",
                    },
                    opacity:0.8,
                },
                emphasis:{
                    label:{
                        color:"#fff"
                    },
                    areaColor: '#3373fe',//鼠标选择区域颜色
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 30,
                    borderColor:'rgba(255, 255, 255, 0.8)',
                    borderWidth: 2,
                    shadowColor: 'rgba(255, 235, 255, 1)'
                }
            }
        }
    },
    stockOption: {
        title:{
            text:'2018年月度股票情况及预测',
            textStyle:{
                color:'#7a98fd'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                z:0,
                type: 'shadow',
                shadowStyle: {
                    color: 'rgba(155, 65, 155, 0.5)',
                },
            },
            padding:10,
            backgroundColor:'#201440',
            borderColor:'#8391ce',
            borderWidth:1,
        },
        legend: {
            data: ['市价总额', '成交总额','平均市盈率'],
            top:30,
            right:200,
            textStyle: {
                color: '#ccc',
                fontSize:12,
            },
            itemGap:30,
            itemWidth:12,
            itemHeight:12,
        },
        grid:{
            left:60,
            bottom:20,
            right:60,
        },
        xAxis: {
            data: [],
            axisLine: {
                lineStyle: {
                    color: '#9aa8d4'
                }
            }
        },
        yAxis:[ 
            {
                type:"value",
                name:"金额",
                splitLine: {show: false},
                max:400000,
                axisLine: {
                    lineStyle: {
                        color: '#9aa8d4'
                    }
                },
                axisLabel: {
                    formatter: (value)=>{
                        return value/10000 +"亿元"
                    }
                }
            },
            {
                type: 'value',
                name: '市盈利',
                splitLine: {show: false},
                min: 0,
                max: 20,
                interval:5,
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: '#9aa8d4'
                    }
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [ 
            {
                name: '市价总额',
                type: 'pictorialBar',
                symbol:'triangle',
                barWidth:46,
                itemStyle: {
                    barBorderRadius: 5,
                    color: '#736cfe',
                },
                markLine: {
                    silent: true,
                    lineStyle: {
                        normal: {
                            color: '#736cfe'
                        }
                    },
                    data: [{
                        type:'average'
                    }],
                    label: {
                        normal: {
                            position:"insideMiddleTop",
                            formatter: '月度平均市价总值 {c} 亿元'
                        }
                    },
                },
                emphasis: {
                    itemStyle: {
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 26,
                        borderColor:'rgba(205, 205, 255, 1)',
                        borderWidth: 2,
                        shadowColor: 'rgba(255, 235, 255, 1)'
                    },
                },
            },
            {
                name: '成交总额',
                type: 'pictorialBar',
                symbol:'triangle',
                barWidth:46,
                itemStyle: {
                    barBorderRadius: 5,
                    color: '#eecc22'
                },
                data: [],
                markLine: {
                    silent: true,
                    lineStyle: {
                        normal: {
                            color: '#eecc22'  
                        }
                    },
                    data: [{
                        type:'average'
                    }],
                    label: {
                        normal: {
                            position:"insideMiddleTop",
                            formatter: '月度平均成交总额{c}亿元'
                        }
                    },
                }
            }, 
            {
                name: '平均市盈率',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbolSize: 8,
                yAxisIndex:1,
                data: [],
                lineStyle:{
                    width:1
                }
            }
        ]   
    },
    csrcOption:{
        title: {
            text: 'CSRC行业分类',
            subtext: '',
            left: 'left',
            textStyle:{
                color:'#7a98fd'
            },
        },
        tooltip: {
            trigger: 'item',
            padding:10,
            backgroundColor:'#201440',
            borderColor:'#8391ce',
            borderWidth:1,
            formatter:(value)=>{
                var p = "<span style='display:inline-block;width:10px;height:10px;border-radius:50%;background-color:gold;margin-right:6px;'></span>"
                return value.name + '<br>'+p+'股票数 : ' + value.value+ '<br>'+p+'占比 : ' + value.percent 
            }
        },
        legend: {
            type: 'scroll',
            height:'100%',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: [],
            selected: [],
            textStyle:{
                color:'#fff',
                fontSize:12,
            },
            itemWidth:10,
            itemHeight:14,
            itemGap:2,
        },
        series: [
            {
                name: '姓名',
                type: 'pie',
                radius: ['30%', '70%'],
                center: ['44%', '58%'],
                data: [],
                emphasis: { 
                    itemStyle: {
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 28,
                        borderColor:'rgba(255, 255, 255, 0.8)',
                        borderWidth: 2,
                        shadowColor: 'rgba(255, 235, 255, 1)'
                    },
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
            }
        ]
    }
}

export default function(state=defaultState,action){
    let newstate = Object.assign({},state)
    switch(action.type){
        case 'SET_BAR':
            var ydata=[]
            var sdata=[]
            action.payload.bardata.forEach((v,i)=>{
                ydata.push(v.stock_name)
                sdata.push(v.market_capitalization)
            })
            newstate.barOption.yAxis.data = ydata
            newstate.barOption.series[0].data=sdata
            break
        case SET_MAP_DATA:
            var newdata =[]
            for(var i=0;i<action.payload.mapdata.length;i++){
                newdata.push({
                    name:action.payload.mapdata[i].region,
                    value:action.payload.mapdata[i].count,
                    sz_count:action.payload.mapdata[i].sz_count,
                    sh_count:action.payload.mapdata[i].sh_count
                })
            }
            newstate.mapOption.series.data = newdata
            break;
        case 'SET_STOCK':
            var total_value =[]
            var average =[]
            var total_amount =[]
            var mouths = []
            for(var j=0;j<action.payload.stockdata.length;j++){
                mouths.push(action.payload.stockdata[j].month)
                total_amount.push(action.payload.stockdata[j].sh_market_capitalization)
                total_value.push(action.payload.stockdata[j].sh_transaction_amount)
                average.push(action.payload.stockdata[j].sh_pe_ratio)
            }
            newstate.stockOption.xAxis.data = mouths
            newstate.stockOption.series[0].data = total_amount
            newstate.stockOption.series[1].data = total_value
            newstate.stockOption.series[2].data = average
            break
        case 'SET_CSRC':
            var csrc = []
            var names=[]
            action.payload.csrcdata.forEach((v,i)=>{
                csrc.push({
                    name:v.alias,
                    value:v.stock,
                    itemStyle: {
                        // color: "rgba("+(200-(180/action.payload.csrcdata.length)*i )+","+(178-(130/action.payload.csrcdata.length)*i )+","+(255-(10/action.payload.csrcdata.length)*i )+", 1)"
                        color: "rgba("+(50+Math.random()*100 )+","+(50+Math.random()*100 )+","+(180+Math.random()*60 )+", 1)"
                    }
                })
                names.push(v.alias)
            })
            newstate.csrcOption.series[0].data = csrc
            newstate.csrcOption.legend.data = names
            newstate.csrcOption.legend.selected = names
            break
        default:
            break;
    }
    return newstate
}