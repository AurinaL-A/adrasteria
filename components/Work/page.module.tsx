'use client'
import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from './work.module.scss'
import work_img from '@/image/workimg.png'
import work_img_bt from '@/image/work_bottom.svg'
import Image from "next/image";

const Work = () => {


  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.work}>
          <div className={styles.info}>
            <h2 className={styles.title}>Как мы работаем</h2>
            <div className={styles.info_blocks}>
              <div className={styles.block}>
                <svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.5153 10.5858C28.3669 9.80474 29.7476 9.80474 30.5992 10.5858L43.6829 22.5858C44.0918 22.9609 44.3216 23.4696 44.3216 24C44.3216 24.5304 44.0918 25.0391 43.6829 25.4142L30.5992 37.4142C29.7476 38.1953 28.3669 38.1953 27.5153 37.4142C26.6638 36.6332 26.6638 35.3668 27.5153 34.5858L36.8765 26L11.6123 26C10.408 26 9.43172 25.1046 9.43172 24C9.43172 22.8954 10.408 22 11.6123 22L36.8765 22L27.5153 13.4142C26.6638 12.6332 26.6638 11.3668 27.5153 10.5858Z" fill="#142251" />
                </svg>
                <p className={styles.text} >Разбираемся в ситуации</p>
              </div>

              <div className={styles.block}>
              <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.15418 2C9.15418 0.89543 10.1305 0 11.3348 0H24.4185C25.6228 0 26.5991 0.89543 26.5991 2H30.9604C33.369 2 35.3216 3.79086 35.3216 6V36C35.3216 38.2091 33.369 40 30.9604 40H4.79295C2.38431 40 0.431717 38.2091 0.431717 36V6C0.431717 3.79086 2.38431 2 4.79295 2H9.15418ZM9.15418 6H4.79295V36H30.9604V6H26.5991V8C26.5991 9.10457 25.6228 10 24.4185 10H11.3348C10.1305 10 9.15418 9.10457 9.15418 8V6ZM22.2379 4H13.5154V6H22.2379V4ZM25.9604 17.5858C26.812 18.3668 26.812 19.6332 25.9604 20.4142L17.238 28.4142C16.3864 29.1953 15.0057 29.1953 14.1541 28.4142L9.79287 24.4142C8.94129 23.6332 8.94129 22.3668 9.79287 21.5858C10.6445 20.8047 12.0251 20.8047 12.8767 21.5858L15.696 24.1716L22.8766 17.5858C23.7282 16.8047 25.1088 16.8047 25.9604 17.5858Z" fill="#142251" />
              </svg>
                <p className={styles.text} >Составляем план действий</p>
              </div>

              <div className={styles.block}>
              <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 14.5294L12.4492 24L32 3" stroke="#142251" stroke-width="4.5" stroke-linecap="round" />
              </svg>
                <p className={styles.text} >Предоставляем результат</p>
              </div>

            </div>
          </div>
          <div className={styles.banner_imgs}>
            <Image className={styles.img_bootom} src={work_img_bt} />
            <Image className={styles.img_banner} src={work_img} />
          </div>
        </div>
      </div>
    </main>
  )

}

export default Work;