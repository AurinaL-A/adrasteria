'use client'
import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from './clients.module.scss'
import back from '@/image/graphic_back.svg'
import work_img_bt from '@/image/work_bottom.svg'
import Image from "next/image";

const Clients = () => {


  return (
    <main className={styles.main}>
      
      <div className={styles.container}>
        <div className={styles.clients}>
          <h2 className={styles.title}>Наши клиенты</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.icon_card}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.0039 0.27018C31.6205 0.628024 32 1.28706 32 2V10C34.3695 10 36.5005 11.0327 37.9625 12.6662C39.2281 14.0802 40 15.9523 40 18C40 20.0477 39.2281 21.9198 37.9625 23.3338C36.5005 24.9673 34.3695 26 32 26V34C32 34.7129 31.6205 35.372 31.0039 35.7298C30.3872 36.0877 29.6267 36.0902 29.0077 35.7365L16 28.3035V38C16 39.1046 15.1046 40 14 40H6C4.89543 40 4 39.1046 4 38V28C1.79086 28 0 26.2091 0 24V12C0 9.79086 1.79086 8 4 8H15.4689L29.0077 0.263514C29.6267 -0.090204 30.3872 -0.0876641 31.0039 0.27018ZM16 24C16.3481 24 16.6901 24.0908 16.9923 24.2635L28 30.5536V5.44636L16.9923 11.7365C16.6901 11.9092 16.3481 12 16 12H4V24H16ZM8 28V36H12V28H8ZM32 22C33.1845 22 34.2467 21.4877 34.9819 20.6662C35.6165 19.9572 36 19.0258 36 18C36 16.9742 35.6165 16.0428 34.9819 15.3338C34.2467 14.5123 33.1845 14 32 14V22Z" fill="#142251" />
              </svg>
              </div>
              <p className={styles.text_card}>Политики</p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon_card}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6C14.6863 6 12 8.68629 12 12V14L8 14.0001C5.79088 14.0001 4 15.7909 4 18V38C4 40.2091 5.79086 42 8 42H40C42.2091 42 44 40.2091 44 38V18C44 15.7909 42.2091 14 40 14H36V12C36 8.68629 33.3137 6 30 6H18ZM32 14V12C32 10.8954 31.1046 10 30 10H18C16.8954 10 16 10.8954 16 12V14L32 14ZM8 18V22H40V18H8ZM40 26H29.6586C28.8349 28.3304 26.6124 30 24 30C21.3876 30 19.1651 28.3304 18.3414 26H8V38H40V26Z" fill="#142251" />
              </svg>
              </div>
              <p className={styles.text_card}>Бизнес</p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon_card}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 5C24.7575 5 25.4501 5.428 25.7888 6.10557L30.9467 16.4212L42.2879 18.0708C43.0411 18.1804 43.6669 18.708 43.9021 19.432C44.1373 20.1559 43.9412 20.9506 43.3962 21.482L35.1419 29.5299L36.9987 40.877C37.1215 41.6269 36.8086 42.3816 36.1913 42.8248C35.5739 43.2679 34.7588 43.3229 34.0876 42.9667L24 37.6141L13.9124 42.9667C13.2412 43.3229 12.4261 43.2679 11.8087 42.8248C11.1914 42.3816 10.8785 41.6269 11.0012 40.877L12.858 29.5299L4.6038 21.482C4.05879 20.9506 3.86266 20.1559 4.09788 19.432C4.33309 18.708 4.95886 18.1804 5.71212 18.0708L17.0533 16.4212L22.2111 6.10557C22.5499 5.428 23.2425 5 24 5ZM24 11.4721L20.1638 19.1444C19.8712 19.7298 19.3106 20.135 18.6629 20.2292L10.2968 21.4461L16.3962 27.393C16.8636 27.8487 17.0792 28.5038 16.9737 29.148L15.6 37.543L23.0626 33.5833C23.6488 33.2722 24.3512 33.2722 24.9374 33.5833L32.4 37.543L31.0262 29.148C30.9208 28.5038 31.1364 27.8487 31.6038 27.393L37.7032 21.4461L29.3371 20.2292C28.6894 20.135 28.1288 19.7298 27.8361 19.1444L24 11.4721Z" fill="#142251" />
              </svg>
              </div>
              <p className={styles.text_card}>Селебрити</p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon_card}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8C19.5817 8 16 11.5817 16 16C16 20.4183 19.5817 24 24 24C28.4183 24 32 20.4183 32 16C32 11.5817 28.4183 8 24 8ZM12 16C12 9.37258 17.3726 4 24 4C30.6274 4 36 9.37258 36 16C36 22.6274 30.6274 28 24 28C17.3726 28 12 22.6274 12 16ZM16 36C12.6863 36 10 38.6863 10 42C10 43.1046 9.10457 44 8 44C6.89543 44 6 43.1046 6 42C6 36.4771 10.4772 32 16 32H32C37.5228 32 42 36.4772 42 42C42 43.1046 41.1046 44 40 44C38.8954 44 38 43.1046 38 42C38 38.6863 35.3137 36 32 36H16Z" fill="#142251" />
              </svg>
              </div>
              <p className={styles.text_card}>Частные лица</p>
            </div>

          </div>
          <p className={styles.text}>Строго соблюдаем конфиденциальность и дорожим репутацией каждого клиента</p>
        </div>
        <Image className={styles.background}
    src={back}
    alt="Background image"
    
    objectFit="cover"
  />
      </div>
    </main>
  )

}

export default Clients;