import React, { useState } from "react";
import style from "./slider-app.module.scss";
import "swiper/swiper-bundle.css";
import image1 from "../../assets/img/slider/01.jpg";
import image2 from "../../assets/img/slider/02.jpg";
import image3 from "../../assets/img/slider/03.jpg";
import image4 from "../../assets/img/slider/04.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

interface SliderAppProps {}

const SliderApp = ({}: SliderAppProps) => {
  const [swiper, setSwiper] = useState<any>();

  return (
    <div className={style.slider}>
      <div className={style.slider_navigation}>
        <button className={style.slider_navigation__next} onClick={() => swiper.slideNext()}>
          <span className="only-readers">Next slide</span>
        </button>
        <button className={style.slider_navigation__prev} onClick={() => swiper.slidePrev()}>
          <span className="only-readers">Previous slide</span>
        </button>
      </div>
      <div className={style.slider_content}>
        <Swiper
          spaceBetween={20}
          // centeredSlides={false}
          // loopedSlides={8}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className={style.test}>
            <SwiperSlide>
              <Image src={image1} alt={"Definitio logo"} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={image2} alt={"Definitio logo"} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={image3} alt={"Definitio logo"} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={image4} alt={"Definitio logo"} />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderApp;
