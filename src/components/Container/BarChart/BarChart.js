import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ReactEcharts from 'echarts-for-react'
import {setBar} from '../../../store/actionsCreators'

class BarChart extends Component {
    componentDidMount(){
        this.props.setBar().then(res=>{
            this.echarts.getEchartsInstance().setOption(this.props.barOption,true)
        })
        window.addEventListener('resize',()=>{
            this.echarts.getEchartsInstance().resize()
        })
    }
    render() {
        return (
            <React.Fragment>
                <ReactEcharts
                    ref={e=>{this.echarts=e}}
                    notMerge={true}
                    option={this.props.barOption  || {}}
                    style={{height:'100%',width:'100%'}}
                />
            </React.Fragment>
        )
    }
}
const mapStateToProps= (state) => {
    return {
        barOption:state.barOption
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setBar:function(){
            return axios.get('/data/ranking-list.json').then(res=>{
                dispatch(setBar(res.data))
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BarChart)