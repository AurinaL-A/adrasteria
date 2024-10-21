import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import Image from "next/image";
import logo from '@/image/Vector.svg'
import React from "react";
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__row}>
                    <div className={styles.logo}>
                        <Link href={ROUTER.HOME} className={styles.text}><Image src={logo} /></Link>
                    </div>
                    <div className={styles.menu}>
                        <Link href={ROUTER.HOME} className={styles.header_menu_text}>Главный</Link>
                        <Link href={ROUTER.HOME} className={styles.header_menu_text}>Услуги</Link>
                        <Link href={ROUTER.HOME} className={styles.header_menu_text}>Как мы работаем</Link>
                        <Link href={ROUTER.HOME} className={styles.header_menu_text}>Клиенты</Link>
                        <Link href={ROUTER.HOME} className={styles.header_menu_text}>Контакты</Link>
                    </div>
                    <button className={styles.btn__header}>
                        <p className={styles.btn__header_text}>Оформить заявку</p>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM18 16V9H16V16H9V18H16V25H18V18H25V16H18Z" fill="#213887" /></svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;