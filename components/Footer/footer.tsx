import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__row}>
                    <div className={styles.block1}>
                        <p className={styles.text__bold}>Explore</p>
                        <div className={styles.menu}>
                           
                        </div>
                    </div>
                    <div className={styles.block2}>
                        <p className={styles.text__bold}>Join our weekly digest</p>
                        <p className={styles.text}>Get exclusive promotions & updates <br></br> straight to your inbox.</p>
                        <form action="">
                            <input type="text" placeholder="Enter your email here" />
                            <button className={styles.btn}>Subscribe</button>
                        </form>

                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;