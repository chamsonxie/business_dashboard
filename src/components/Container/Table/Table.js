import React, { Component } from 'react'

import { connect } from 'react-redux'


import style from './table.module.scss'
class Table extends Component {
    componentDidMount(){
        this.upNum()
    }
    //数字自动增加
    upNum(){
        //每个数字的定时器
        var timer = []
        //获取每个数字形成数组
        var nums = document.querySelectorAll('.num_header')
        for(let i=0;i<nums.length;i++){
            nums[i].innerHTML = 0
            //当前显示在网页的数字
            let count = 0
            //每个数字增加的次数,用它作为间隔毫秒数的分母,这样大家就可以同时开始同时结束
            let stime = 1
            //计算 增加次数 用到的临时变量
            var count_com = this.props.tableData[i].count 
            //计算 增加次数 用到的临时变量
            for(var c = 0;;c++){
                //每次减去 终点与当前值的 的 1/20 ,如果1/20小于1,则每次减少1
                count_com -= ( count_com /20)<1?1:parseInt(count_com /20)
                //这个数字被见成0时,次数累计完成
                stime ++;
                if(count_com === 0) break
            }
            //开始用setInterval去变化
            timer[i] = setInterval(() => {
                //与上面计算次数时的算法一样
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
