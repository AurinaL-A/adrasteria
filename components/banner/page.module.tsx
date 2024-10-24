import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import styles from './banner.module.scss'
import banner_img from '@/image/banner.png'
import banner_img_bt from '@/image/banner_bottom.svg'
import Image from "next/image";

const Banner = () => {
    return (
        <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className={styles.banner__info}>
              <h1 className={styles.banner_title}>Детективно-информационное <span className={styles.banner_title_span}>агентство</span> </h1>
              <p className={styles.banner_text}>Владеешь информацией - владеешь миром</p>
              <button className={styles.btn__banner}>
                <p className={styles.btn__banner_text}>Оформить заявку</p>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM18 16V9H16V16H9V18H16V25H18V18H25V16H18Z" fill="#213887" /></svg>
              </button>
            </div>
            <div className={styles.banner_imgs}>
              <Image className={styles.img_bootom} src={banner_img_bt} />
              <Image className={styles.img_banner} src={banner_img} />
            </div>
          </div>

          <div className={styles.banner_down}>
            <button className={styles.btn_down}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C12.5523 4 13 4.44772 13 5V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z" fill="#213887" /></svg>
            </button>

             <div className={styles.banner__contact}>
            <div className={styles.banner_contact_ms}>
              <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0453 24.8505H12.0502C18.6388 24.8478 23.9974 19.4879 24 12.9008C24.0013 9.70783 22.7594 6.70553 20.5033 4.44688C18.2472 2.18811 15.2468 0.94364 12.0501 0.942261C5.4635 0.942261 0.102809 6.30266 0.100188 12.8913C0.099291 14.9974 0.649554 17.0531 1.69529 18.8654L0 25.0577L6.33478 23.396C8.08018 24.348 10.0453 24.8498 12.0453 24.8505ZM17.6619 15.4736C17.8701 15.5743 18.0107 15.6422 18.0708 15.7425C18.1454 15.867 18.1454 16.4648 17.8967 17.1624C17.6478 17.8598 16.4549 18.4964 15.8812 18.5821C15.3668 18.659 14.7159 18.6911 14.0006 18.4637C13.5669 18.3262 13.0108 18.1424 12.2984 17.8348C9.49924 16.6261 7.60757 13.9131 7.25005 13.4003C7.22501 13.3644 7.20749 13.3393 7.19772 13.3262L7.19531 13.323C7.0373 13.1122 5.97852 11.6995 5.97852 10.2375C5.97852 8.86213 6.65412 8.14123 6.9651 7.8094C6.9864 7.78666 7.00599 7.76576 7.02354 7.74659C7.29723 7.44766 7.62073 7.37292 7.81977 7.37292C8.0188 7.37292 8.21807 7.37476 8.39204 7.3835C8.4135 7.38458 8.43583 7.38445 8.45891 7.38431C8.63291 7.38329 8.84984 7.38202 9.06384 7.89605C9.14616 8.09387 9.26662 8.38713 9.39367 8.69644C9.6506 9.32195 9.93448 10.0131 9.98443 10.1131C10.0591 10.2626 10.1088 10.4368 10.0093 10.6362C9.99438 10.6661 9.98056 10.6943 9.96736 10.7213C9.89261 10.8739 9.83762 10.9861 9.71075 11.1343C9.66086 11.1925 9.60929 11.2553 9.55773 11.3181C9.45501 11.4432 9.3523 11.5683 9.26286 11.6574C9.11338 11.8063 8.95777 11.9678 9.13195 12.2668C9.30612 12.5657 9.90536 13.5434 10.793 14.3352C11.7472 15.1863 12.5765 15.546 12.9968 15.7283C13.0789 15.7639 13.1454 15.7928 13.1942 15.8172C13.4927 15.9667 13.6668 15.9417 13.841 15.7425C14.0152 15.5432 14.5874 14.8706 14.7865 14.5717C14.9855 14.2729 15.1846 14.3227 15.4582 14.4223C15.732 14.522 17.2 15.2442 17.4986 15.3937C17.5568 15.4229 17.6113 15.4492 17.6619 15.4736Z" fill="#213887" /></svg>
              <p className={styles.banner_contact_text}>whatsapp</p>
            </div>

            <p className={styles.banner_contact_text}>Adrasteia@mail.com</p>
          </div>
          </div>
         
        </div>
      </main>
    )

}

export default Banner;