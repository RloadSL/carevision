import React, { useState } from "react";
import style from "./treatment-slider-block.module.scss";
import TextApp from "@/components/TextApp";
import ButtonApp from "@/components/ButtonApp";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import step1 from "../../../../../public/img/augenlasern/step1.jpg";
import step2 from "../../../../../public/img/augenlasern/step2.jpg";
import step3 from "../../../../../public/img/augenlasern/step3.jpg";
import Image from "next/image";
import useComponentUtils from "@/ui/hooks/component.hooks";

interface TreatmentSliderBlockProps {
  textData?: string;
}

const TreatmentSliderBlock = ({ textData }: TreatmentSliderBlockProps) => {
  const { useScrollDistance, useWindowSize } = useComponentUtils();

  //checking device width
  const windowWidth = useWindowSize().width;
  const deviceWidth = windowWidth >= 768 && windowWidth <= 1500 ? 'mediumDevice' : windowWidth < 768 ? 'smallDevice' : 'bigDevice'
     
  console.log(deviceWidth)

  const [swiper, setSwiper] = useState<any>();
  const pagination = {
    clickable: true,
    bulletClass: "bullet",
    renderBullet: (index: number, className: any) => {
      return `<div aria-hidden=true class="${className} ${style.bullet}"></div>`;
    }
  };
  return (
    <div className={style.treatmentSliderBlock}>
      <div className={style.centeredContainer}>
        <article className={style.iconsSection_top}>
          <h2 className={style.title}>
            <TextApp labelID="iconsSection.title" />
          </h2>
          <p>
            <TextApp labelID="iconsSection.text" />
          </p>
        </article>
      </div>
      <div className={style.slider_navigation}>
        <button className={style.slider_navigation__next} onClick={() => swiper.slideNext()}>
          <span className="only-readers">Next slide</span>
        </button>
        <button className={style.slider_navigation__prev} onClick={() => swiper.slidePrev()}>
          <span className="only-readers">Previous slide</span>
        </button>
      </div>
      <Swiper
        className="treatmentSteps"
        spaceBetween={20}
        slidesPerView={deviceWidth === 'bigDevice' ? 1.65 : deviceWidth === 'mediumDevice' ? 1.2 : 1}
        centeredSlides
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          console.log(swiper);
          setSwiper(swiper);
        }}
        onSlideChange={() => console.log("slide change")}
        modules={[Navigation]}
        effect="fade"
      >
        <SwiperSlide>
          <div className={`${style.slide_content} ${style.step1}`}>
            <div className={style.slide_content__image}>
              <Image src={step1} alt={""} />
            </div>
            <div className={style.slide_content__text}>
              <div>
                <h3>
                  <TextApp labelID="treatments.option1.label" />
                </h3>
                <p>
                  <TextApp labelID="treatments.option1.text" />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.tabs_item2}>tabs2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.tabs_item2}>tabs3</div>
        </SwiperSlide>
      </Swiper>
      <div className={style.centeredContainer}>
        <ButtonApp
          labelID="learnMore.button.label"
          onClick={() => console.log("hola")}
          icon={""}
          iconAlign="right"
        />
      </div>
    </div>
  );
};

export default TreatmentSliderBlock;
