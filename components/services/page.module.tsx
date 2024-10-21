'use client'
import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from './services.module.scss'
import book from '@/image/book.png'
import business from '@/image/business.png'
import map from '@/image/map.png'
import search from '@/image/search.png'
import workinfo from '@/image/workinfo.png'
import security from '@/image/security.png'
import Image from "next/image";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 ) % 2);
  };

  const handleMouseOver = () => {
    setShowButton(true);
  };

  const handleMouseOut = () => {
    setShowButton(false);
  };


  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.services}>
          <div className={styles.info}>
            <h2 className={styles.title}>Услуги</h2>
            <p className={styles.text}>Когда другие бессильны - мы делаем</p>
            <div className={styles.btns_slider}>
              <button className={styles.slider__prev} onClick={handlePreviousSlide}>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5607 0.939096C12.1464 1.52488 12.1464 2.47463 11.5607 3.06042L5.12132 9.49976H22.5C23.3284 9.49976 24 10.1713 24 10.9998C24 11.8282 23.3284 12.4998 22.5 12.4998H5.12132L11.5607 18.9391C12.1464 19.5249 12.1464 20.4746 11.5607 21.0604C10.9749 21.6462 10.0251 21.6462 9.43934 21.0604L0.43934 12.0604C0.158035 11.7791 0 11.3976 0 10.9998C0 10.6019 0.158035 10.2204 0.43934 9.9391L9.43934 0.939096C10.0251 0.353309 10.9749 0.353309 11.5607 0.939096Z" fill="#142251" />
                </svg>
              </button>
              <button className={styles.slider__next} onClick={handleNextSlide}>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4393 0.939096C13.0251 0.353309 13.9749 0.353309 14.5607 0.939096L23.5607 9.9391C23.842 10.2204 24 10.6019 24 10.9998C24 11.3976 23.842 11.7791 23.5607 12.0604L14.5607 21.0604C13.9749 21.6462 13.0251 21.6462 12.4393 21.0604C11.8536 20.4746 11.8536 19.5249 12.4393 18.9391L18.8787 12.4998L1.5 12.4998C0.671573 12.4998 0 11.8282 0 10.9998C0 10.1713 0.671573 9.49976 1.5 9.49976L18.8787 9.49976L12.4393 3.06042C11.8536 2.47463 11.8536 1.52488 12.4393 0.939096Z" fill="#142251" />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.slider} ref={sliderRef}>
            <div className={styles.slider__inner} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              <div className={styles.slider__item} style={{ transform: `translateX(-${currentSlide * 425}px)` }}  // Измените значение на ширину слайда
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <Image src={workinfo} alt="Slide 1"  />
                <h2 className={styles.slider__title}>Работа с информацией</h2>
                <div className={styles.info_item}>
                  <p className={styles.slider__text}>- Поиск и проверка информации</p>
                  <p className={styles.slider__text}>- Составление персонального досье</p>
                  <p className={styles.slider__text}>- Работа с репутацией</p>
                  <p className={styles.slider__text}>- Информация по номеру телефона</p>
                </div>
                {showButton && (
                  <button className={styles.slider__button}>
                    <p>Оформить заявку</p>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5001 31C24.0605 31 31.0001 24.0604 31.0001 15.5C31.0001 6.93959 24.0605 0 15.5001 0C6.93965 0 6.10352e-05 6.93959 6.10352e-05 15.5C6.10352e-05 24.0604 6.93965 31 15.5001 31ZM16.411 8.20586H14.5875V14.5882H8.20514V16.4117H14.5875V22.7941H16.411V16.4117H22.7934V14.5882H16.411V8.20586Z" fill="white" />
                    </svg>
                  </button>
                )}
              </div>
              <div className={styles.slider__item} style={{ transform: `translateX(-${currentSlide * 425}px)` }}  // Измените значение на ширину слайда
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <Image src={map} alt="Slide 2"/>
                <h2 className={styles.slider__title}>Слежка и наблюдение</h2>
                <div className={styles.info_item}>
                  <p className={styles.slider__text}>- Наружное наблюдение</p>
                  <p className={styles.slider__text}>- Контрнаблюдение</p>
                  <p className={styles.slider__text}>- Проверка образа жизни ребенка</p>
                </div>
                {showButton && (
                  <button className={styles.slider__button}>
                    <p>Оформить заявку</p>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5001 31C24.0605 31 31.0001 24.0604 31.0001 15.5C31.0001 6.93959 24.0605 0 15.5001 0C6.93965 0 6.10352e-05 6.93959 6.10352e-05 15.5C6.10352e-05 24.0604 6.93965 31 15.5001 31ZM16.411 8.20586H14.5875V14.5882H8.20514V16.4117H14.5875V22.7941H16.411V16.4117H22.7934V14.5882H16.411V8.20586Z" fill="white" />
                    </svg>
                  </button>
                )}
              </div>
              <div className={styles.slider__item} style={{ transform: `translateX(-${currentSlide * 425}px)` }}  // Измените значение на ширину слайда
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <Image src={search} alt="Slide 3"/>
                <h2 className={styles.slider__title}>Розыск</h2>
                <div className={styles.info_item}>
                  <p className={styles.slider__text}>- Розыск должника/мошенника</p>
                  <p className={styles.slider__text}>- Поиск пропавших людей</p>
                  <p className={styles.slider__text}>- Поиск родственников</p>
                  <p className={styles.slider__text}>- Поиск имущества</p>
                </div>
                {showButton && (
                  <button className={styles.slider__button}>
                    <p>Оформить заявку</p>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5001 31C24.0605 31 31.0001 24.0604 31.0001 15.5C31.0001 6.93959 24.0605 0 15.5001 0C6.93965 0 6.10352e-05 6.93959 6.10352e-05 15.5C6.10352e-05 24.0604 6.93965 31 15.5001 31ZM16.411 8.20586H14.5875V14.5882H8.20514V16.4117H14.5875V22.7941H16.411V16.4117H22.7934V14.5882H16.411V8.20586Z" fill="white" />
                    </svg>
                  </button>
                )}
              </div>
              <div className={styles.slider__item} style={{ transform: `translateX(-${currentSlide * 425}px)` }}  // Измените значение на ширину слайда
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <Image src={business} alt="Slide 4"/>
                <h2 className={styles.slider__title}>Бизнес-разведка</h2>
                <div className={styles.info_item}>
                  <p className={styles.slider__text}>- Проверка контрагентов</p>
                  <p className={styles.slider__text}>- Досье на компанию</p>
                  <p className={styles.slider__text}>- Внештатная служба безопасности</p>
                  <p className={styles.slider__text}>- Корпоративное расследование</p>
                </div>
                {showButton && (
                  <button className={styles.slider__button}>
                    <p>Оформить заявку</p>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5001 31C24.0605 31 31.0001 24.0604 31.0001 15.5C31.0001 6.93959 24.0605 0 15.5001 0C6.93965 0 6.10352e-05 6.93959 6.10352e-05 15.5C6.10352e-05 24.0604 6.93965 31 15.5001 31ZM16.411 8.20586H14.5875V14.5882H8.20514V16.4117H14.5875V22.7941H16.411V16.4117H22.7934V14.5882H16.411V8.20586Z" fill="white" />
                    </svg>
                  </button>
                )}
              </div>
              <div className={styles.slider__item} style={{ transform: `translateX(-${currentSlide * 425}px)` }}  // Измените значение на ширину слайда
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <Image src={security} alt="Slide 5"/>
                <h2 className={styles.slider__title}>Защита</h2>
                <div className={styles.info_item}>
                  <p className={styles.slider__text}>- Защита при шантаже и угрозах</p>
                  <p className={styles.slider__text}>- Безопасность семьи и детей</p>
                  <p className={styles.slider__text}>- Помощь в подготовке и сопровождение в поездках.</p>
                  <p className={styles.slider__text}>- Поиск и проверка информации</p>
                </div>
                {showButton && (
                  <button className={styles.slider__button}>
                    <p>Оформить заявку</p>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5001 31C24.0605 31 31.0001 24.0604 31.0001 15.5C31.0001 6.93959 24.0605 0 15.5001 0C6.93965 0 6.10352e-05 6.93959 6.10352e-05 15.5C6.10352e-05 24.0604 6.93965 31 15.5001 31ZM16.411 8.20586H14.5875V14.5882H8.20514V16.4117H14.5875V22.7941H16.411V16.4117H22.7934V14.5882H16.411V8.20586Z" fill="white" />
                    </svg>
                  </button>
                )}
              </div>
              <div className={styles.slider__item} style={{ transform: `translateX(-${currentSlide * 425}px)` }}  // Измените значение на ширину слайда
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <Image src={book} alt="Slide 6"/>
                <h2 className={styles.slider__title}>Сопровождение гражданских и уголовных дел</h2>
                <div className={styles.info_item}>
                  <p className={styles.slider__text}>- Оказание юридической помощи</p>
                  <p className={styles.slider__text}>- Частное расследование преступлений </p>
                  <p className={styles.slider__text}>- Содействие правоохранительным органам</p>
                </div>
                {showButton && (
                  <button className={styles.slider__button}>
                    <p>Оформить заявку</p>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5001 31C24.0605 31 31.0001 24.0604 31.0001 15.5C31.0001 6.93959 24.0605 0 15.5001 0C6.93965 0 6.10352e-05 6.93959 6.10352e-05 15.5C6.10352e-05 24.0604 6.93965 31 15.5001 31ZM16.411 8.20586H14.5875V14.5882H8.20514V16.4117H14.5875V22.7941H16.411V16.4117H22.7934V14.5882H16.411V8.20586Z" fill="white" />
                    </svg>
                  </button>
                )}
              </div>
            </div>


          </div>
        </div>
      </div>
    </main>
  )

}

export default Services;