import React, { Component } from 'react'
import style from './Header.module.scss'

export default class Header extends Component {
    render() {
        return (
            <div className={style.header}>
                上市公司全景预览
                <p className={style.left}>数据来源：上交所 & 深交所</p>
                <p className={style.right}>数据日期：2020年8月13日</p>
            </div>
        )
    }
}
