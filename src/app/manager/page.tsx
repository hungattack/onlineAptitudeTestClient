import React from 'react'
import style from './manager.module.scss'
const Managers = () => {
    return (
        <div className={style.manager}>
            <div className={style.optionBar}></div>
            <div className={style.result}>Result</div>
        </div>
    )
}

export default Managers
