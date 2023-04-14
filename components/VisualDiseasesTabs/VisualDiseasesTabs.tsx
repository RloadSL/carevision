import React, { Children, useState } from "react";
import * as ReactDOMServer from "react-dom/server";
import style from "./visual-diseases-tabs.module.scss";
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
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

import Image from "next/image";
import TextApp from "../TextApp";
import BeforeAfterSlider from "react-before-after-slider-component";

interface VisualDiseasesTabsProps {
  buttonLabels: Array<string>;
  // children: JSX.Element;
}

const VisualDiseasesTabs = ({ buttonLabels }: VisualDiseasesTabsProps) => {
  const FIRST_IMAGE = {
    imageUrl: "/perro.jpg"
  };
  const SECOND_IMAGE = {
    imageUrl: "/perro_blurry.jpg"
  };
  const [swiper, setSwiper] = useState<any>();
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: any) => {
      console.log(index);
      // return `<span class="${className}">${<TextApp labelID={buttonLabels[index]}/>}</span>`;
      //return `<span class="${className}">${buttonLabels[index]}</span>`;
      return ReactDOMServer.renderToStaticMarkup(
        <span className={className}>{buttonLabels[index]}</span>
      );
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
      <div className="swiper-pagination"></div>

      <div className={style.slider_content}>
        <Swiper
          spaceBetween={20}
          // centeredSlides={false}
          slidesPerView={1}
          pagination={pagination}
          onSwiper={(swiper) => {console.log(swiper);setSwiper(swiper)}}
          onSlideChange={() => console.log("slide change")}
          modules={[EffectFade, Pagination]}
          effect="fade"
          allowTouchMove={false}
        >
          <div className={style.tabs}>
            <SwiperSlide>
              <div className={style.tabs_item1}>
                <div>texto</div>
                <ReactBeforeSliderComponent firstImage={FIRST_IMAGE} secondImage={SECOND_IMAGE} />
              </div>
            </SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default VisualDiseasesTabs;
