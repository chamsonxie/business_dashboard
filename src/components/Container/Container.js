import React, { Component } from 'react'
import style from './Container.module.scss'

import BarChart from './BarChart/BarChart'
import Table from './Table/Table'
import Map from './Map/Map'
import Stock from './Stock/Stock'
import Bing from './Bing/Bing'

import full_icon from './full.png'
import exitfull_icon from './exit.png'

export default class Container extends Component {
    componentDidMount(){
        var isfull = false
        document.querySelector('#fullscreen').addEventListener('click',()=>{
            if(isfull){
                this.exitfull()
                isfull = !isfull
                document.querySelector('#fullscreen img').src = full_icon

            }else{
                this.full()
                isfull = !isfull
                document.querySelector('#fullscreen img').src = exitfull_icon
            }
        })
    }
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
    exitfull() {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    }
    render() {
        return (
            <div className={style.container}>
                <div id="fullscreen" className={style.fullscreen}>
                    <img src={full_icon} alt="fullscreen"/>
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
