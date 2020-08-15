import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import axios from 'axios'
import { connect } from 'react-redux'
// import china from 'echarts/map/json/china.json'
import { setMapData } from '../../../store/actionsCreators'

const chinamap = require('./ChinaMap.json')

class Map extends Component {
    componentDidMount(){
        echarts.registerMap('china', chinamap);
        this.props.setMapData().then(res=>{
            this.updateMap()
        })
        window.addEventListener('resize',()=>{
            this.echarts.getEchartsInstance().resize()
        })
    }
    updateMap=()=>{
        this.echarts.getEchartsInstance().setOption(this.props.mapOption,true)
    }
    render() {
        return (
            <React.Fragment>
                <ReactEcharts 
                ref={e=>{this.echarts=e}}
                option={this.props.mapOption || {}} 
                notMerge={true}
                style={{height: '100%', width: '100%'}}  
                className='react_for_echarts' />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        mapOption : state.mapOption
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        setMapData:function(){  
            return axios.get('/business-dashboard/data/region-count.json').then(res=>{
                dispatch(setMapData(res.data))
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Map)