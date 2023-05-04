import React from "react";
import ContactForm from "../ContactForm";
import TextApp from "../TextApp";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import style from "./hero.module.scss";
import useComponentUtils from "@/ui/hooks/component.hooks";
import Image from "next/image";
import girl from "../../assets/img/hero1.jpg"

interface HeroProps {
}

const Hero = ({}: HeroProps) => {
  const { useScrollDistance, useWindowSize } = useComponentUtils();

  //checking mobile menu
  const isMobile = useWindowSize().width <= 768 ? true : false;

  return (
    <div className={style.hero}>
      <div aria-hidden={true}  className={style.hero_image}>
      </div>
      <div className={style.container}>
        <div className={style.hero_info}>
          <div className={style.hero_info__left}>
            <div className={style.hero_info_text}>
              <h1 className={style.title}>
                <TextApp labelID="hero.title" />
              </h1>
              <div className={style.price}>
                <TextApp labelID="hero.price" />
              </div>
            </div>
            <div className={style.slider}>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                  delay: 4000
                }}
                modules={[Autoplay]}
                effect="slide"
              >
                <SwiperSlide>
                  <p>
                    <TextApp labelID="hero.slider.text1" />
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    <TextApp labelID="hero.slider.text2" />
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    <TextApp labelID="hero.slider.text3" />
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {!isMobile && (
            <div className={style.hero_info__right}>
              <p>loren ipsum</p>
              <ContactForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
