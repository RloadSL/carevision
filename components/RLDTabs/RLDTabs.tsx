import React, { Children, useState } from "react";
import style from "./rld-tabs.module.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import image1 from "../../assets/img/slider/01.jpg";
// import image2 from "../../assets/img/slider/02.jpg";
// import image3 from "../../assets/img/slider/03.jpg";
// import image4 from "../../assets/img/slider/04.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

import Image from "next/image";

interface RLDTabsProps {
  buttonLabels: Array<string>;
  // children: JSX.Element;
}

const RLDTabs = ({ buttonLabels }: RLDTabsProps) => {
  const [swiper, setSwiper] = useState<any>();
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: any) => {
      return '<span class="' + className + '">' + buttonLabels[index] + "</span>";
    }
  };

  return (
    <div className={style.slider}>
      {/* <div className={style.slider_navigation}>
        <button className={style.slider_navigation__next} onClick={() => swiper.slideNext()}>
          <span className="only-readers">Next slide</span>
        </button>
        <button className={style.slider_navigation__prev} onClick={() => swiper.slidePrev()}>
          <span className="only-readers">Previous slide</span>
        </button>
      </div> */}
      <div className={style.slider_content}>
        <Swiper
          spaceBetween={20}
          // centeredSlides={false}
          slidesPerView={1}
          pagination={pagination}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={() => console.log("slide change")}
          modules={[EffectFade, Pagination]}
          effect="fade"
        >
          <div className={style.test}>
            {buttonLabels.map((item: any, index: number) => {
              return <SwiperSlide key={index}>{item}</SwiperSlide>;
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default RLDTabs;
