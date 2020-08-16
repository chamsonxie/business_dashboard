import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ReactEcharts from 'echarts-for-react'
import { setCSRC} from '../../../store/actionsCreators'

class Bing extends Component {
    componentDidMount(){
        this.props.setCsrc().then(res=>{
            //更新echart
            this.echarts.getEchartsInstance().setOption(this.props.csrcOption,true)
        })
    }
    render() {
        return (
            <React.Fragment>
                <ReactEcharts
                    ref={e=>{this.echarts=e}}
                    option={this.props.csrcOption || {}} 
                    notMerge={true}
                    style={{height: '100%', width: '100%'}}  
                    className='react_for_echarts' 
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        csrcOption:state.csrcOption
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCsrc:function(){
            return axios.get('/data/csrc-industry.json').then(res=>{
                dispatch(setCSRC(res.data))
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Bing)


