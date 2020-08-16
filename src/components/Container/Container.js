import React, { Component } from 'react'
import style from './Container.module.scss'

import BarChart from './BarChart/BarChart'
import Table from './Table/Table'
import Map from './Map/Map'
import Stock from './Stock/Stock'
import Bing from './Bing/Bing'

import full_icon from './full.png'
import exitfull_icon from './exit.png'

import { connect } from 'react-redux'
import {toggleFullscreen} from '../../store/actionsCreators'


class Container extends Component {
    state={
        fullicon:this.props.isfullfs?exitfull_icon: full_icon
    }
    //进入全屏
    full(element = document.documentElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen()
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen()
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen()
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen()
        }

    }
    //退出全屏
    exitfull() {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    }
    //切换全屏
    togglefull(){
        if(this.props.isfullfs){
            this.exitfull()
        }else{
            this.full()
        }
        this.props.toggleFullscreen()
        this.setState({
            fullicon:this.props.isfullfs?full_icon:exitfull_icon
        })
    }
    render() {
        return (
            <div className={style.container}>
                <div id="fullscreen" onClick={this.togglefull.bind(this)} className={style.fullscreen}>
                    <img src={this.state.fullicon} alt="fullscreen"/>
                </div>
                <div className={style.row}>    
                    <div className={style.col1}>
                        <BarChart></BarChart>
                    </div>
                    <div className={style.col1}>
                        <Table></Table>
                    </div>
                    <div className={style.col1}>
                        <Map></Map>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col2}>
                        <Stock></Stock>
                    </div>
                    <div className={style.col1}>
                        <Bing></Bing>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return  { isfullfs : state.isFullScreen}
}
const mapDispatchToProps = dispatch => ({
    toggleFullscreen:function(){dispatch(toggleFullscreen())}
})
export default connect(mapStateToProps,mapDispatchToProps)(Container)