import React, { Component } from 'react'
import style from './Header.module.scss'

export default class Header extends Component {
    render() {
        return (
            <div className={style.header}>
                上市公司全景预览
            </div>
        )
    }
}
