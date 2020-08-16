import React, { Component } from 'react'
// import style from './Stock.module.scss'
// import echarts from 'echarts';

import ReactEcharts from 'echarts-for-react'
import { connect } from 'react-redux'
import axios from 'axios'
import { setStockData } from '../../../store/actionsCreators'


class Stock extends Component {
    componentDidMount(){
        this.props.setStockData().then(res=>{
            this.updateChart()
        })
        window.addEventListener('resize',()=>{
            //更新echart
            this.echarts.getEchartsInstance().resize()
        })
    }
    updateChart=()=>{
        this.echarts.getEchartsInstance().setOption(this.props.stockOption,true)
    }
    render() {
        return (
            <React.Fragment>
                <ReactEcharts
                    ref={e=>{this.echarts=e}}
                    option={this.props.stockOption || {}} 
                    notMerge={true}
                    style={{height: '100%', width: '100%'}}  
                    className='react_for_echarts' 
                />
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        stockOption:state.stockOption
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        setStockData:function () {  
            return axios.get('/data/month-count.json').then(res=>{
                dispatch(setStockData(res.data))
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Stock)
