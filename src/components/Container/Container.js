import React, { Component } from 'react'
import style from './Container.module.scss'
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import axois from 'axios'
import { color } from 'echarts/lib/export';



export default class Container extends Component {
    state={
        csrc:{},
    }
    componentWillMount(){
        this.getCSRC()
    }

    async getCSRC(){
        var ydata=[]
        var sdata=[]
        let data = await axois.get('/data/ranking-list.json')
        data.data.map((v,i)=>{
            ydata.push(v.stock_name)
            sdata.push(v.market_capitalization)
        })
        console.log(ydata,sdata)
        this.setState({ 
            csrc: {
                legend:{
                },
                grid:{
                    top:'50',
                    left:'60',
                    bottom:'0',
                    right:'40',
                    height:'auto',
                    width:'auto'
                },
                title:{
                    text:"市价总值排行Top10",
                    textStyle:{
                        color:"#fff"
                    }
                },
                yAxis: {
                    type: 'category',
                    data:ydata,
                    axisLine:{
                        show:false
                    },
                    axisLabel:{
                        color:'#fff'
                    }
                },
                xAxis: {
                    type: 'value',
                    show:false,
                    axisLine:{
                        show:false
                    },
                    label:{
                        show:true,
                        color:'#ffffff'
                    },
                },
                series: [{
                    data: sdata,
                    type: 'bar',
                    barWidth:10,
                    label:{
                        show:true,
                        position:'right',
                        color:'#fff'
                    },
                    itemStyle:{
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        ),
                    }
                }]
            }
            
        })
    }


    render() {
        return (
            <div className={style.container}>
                <div className={style.row}>
                    
                    <div className={style.col1}>
                        <ReactEcharts
                            notMerge={true}
                            lazyUpdate={true}
                            option={this.state.csrc}
                        />
                    </div>
                    <div className={style.col1}>
                        
                    </div>
                    <div className={style.col1}>

                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col2}>

                    </div>
                    <div className={style.col1}>
                        
                    </div>
                </div>
            </div>
        )
    }
}
