import React, { useState } from "react";
import style from "./impressions-slider.module.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import TextApp from "../TextApp";
import Image from "next/image";
import ButtonApp from "../ButtonApp";
import arrow from "../../assets/img/arrow_icon.svg";
import useComponentUtils from "@/ui/hooks/component.hooks";
import parse from "html-react-parser";
import image1 from "../../public/img/berlin/01.jpg";
import image2 from "../../public/img/berlin/02.jpg";
import image3 from "../../public/img/berlin/03.jpg";
import image4 from "../../public/img/berlin/04.jpg";

interface ImpressionsSliderProps {
  textData: any;
}

const ImpressionsSlider = ({ textData }: ImpressionsSliderProps) => {
  //console.log(textData)
  //checking mobile menu
  const { useWindowSize } = useComponentUtils();

  const isMobile = useWindowSize().width <= 768 ? true : false;

  const [swiper, setSwiper] = useState<any>();

  return (
    <div className={`${style.impressions} impressions`}>
      <div className={style.impressions_info}>
        <article className={style.iconsSection_top}>
          <h2 className={style.title}>
            <TextApp labelID="impressions.title" textData={textData} />
          </h2>
          <p><TextApp labelID="impressions.text" textData={textData}/></p>
          <div className={style.button}>
          <ButtonApp
            labelID="learnMore.button.label"
            onClick={() => console.log("hola")}
            icon={arrow}
            iconAlign="right"
          />
        </div>
        </article>

      </div>
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
    </div>
  );
};

export default ImpressionsSlider;
