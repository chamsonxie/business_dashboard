import React, { Component } from 'react'

import { connect } from 'react-redux'


import style from './table.module.scss'
class Table extends Component {
    componentDidMount(){
        this.upNum()
    }
    upNum(){
        var timer = []
        var nums = document.querySelectorAll('.num_header')
        for(let i=0;i<nums.length;i++){
            nums[i].innerHTML = 0
            let count = this.props.tableData[i].count<100? 0 : parseInt(this.props.tableData[i].count/10*9)
            let stime = 1
            var count_com = this.props.tableData[i].count 
            for(var c = 0;;c++){
                count_com -= ( count_com /20)<1?1:parseInt(count_com /20)
                stime ++;
                if(count_com === 0) break
            }
            timer[i] = setInterval(() => {
                count += parseInt((this.props.tableData[i].count-count)/20)<1?1:parseInt((this.props.tableData[i].count-count)/20)
                nums[i].innerHTML = count
                if(count === this.props.tableData[i].count){
                    clearInterval(timer[i])
                }
            }, 2000/stime);
        }
    }
    render() {
        return (
            <div className={style.table}>
                <div className={style.header}>
                    数据统计
                </div>
                <div className={style.content_wrap}>
                {
                    this.props.tableData.map((v,i)=>{
                        return <section className={style.item} key={i}>
                                    <div className={style.icon}>
                                        <img src={v.icon} className="logo" alt="logo" />
                                    </div>
                                    <div className={style.content}>
                                        <header className="num_header">{v.count}</header>
                                        <aside>{v.name}</aside>
                                    </div>
                                </section>
                    })
                }
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        tableData:state.tableData
    }
}

export default connect(mapStateToProps,null)(Table)
