import React from 'react'
import PropTypes from 'prop-types'
import style from './header.module.scss'
import Images from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
    const menu = [
        { src: '/', name: 'Home' },
        { src: '/jobSeeking', name: 'Job seeking' },
        { src: '/manager', name: 'Managers' },
    ]
    return (
        <>
            <div className={style.header}>
                <Link className={style.logo} href="/">
                    <div className={style.logoImg}>
                        <Image src={Images.logo} alt="Online Aptitude Test" />
                    </div>
                    <div className={style.logoTitle}>
                        <h3>Online Aptitude Test</h3>
                        <p>Job seeking</p>
                    </div>
                </Link>
                <div className={style.menu}>
                    {menu.map((item) => (
                        <Link key={item.name} href={item.src}>
                            <h5>{item.name}</h5>
                        </Link>
                    ))}
                </div>
            </div>
            <div style={{ width: '100%', height: '60px' }}></div>
        </>
    )
}

export default Header
