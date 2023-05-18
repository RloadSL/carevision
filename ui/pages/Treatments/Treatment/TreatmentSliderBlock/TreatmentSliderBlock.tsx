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
import arrow from "../../../../../public/img/icons/arrow_icon.svg";

interface TreatmentSliderBlockProps {
  textData?: string;
}

const TreatmentSliderBlock = ({ textData }: TreatmentSliderBlockProps) => {
  const { useScrollDistance, useWindowSize } = useComponentUtils();

  //checking device width
  const windowWidth = useWindowSize().width;
  const deviceWidth =
    windowWidth >= 768 && windowWidth <= 1500
      ? "mediumDevice"
      : windowWidth < 768
      ? "smallDevice"
      : "bigDevice";

  console.log(deviceWidth);

  const [swiper, setSwiper] = useState<any>();
  return (
    <div className={style.treatmentSliderBlock}>
      <div className={style.centeredContainer}>
        <article className={style.iconsSection_top}>
          <h2 className={style.title}>
            <TextApp labelID="treatmentSlider.title" textData={textData} />
          </h2>
          <p>
            <TextApp labelID="treatmentSlider.description" textData={textData} />
          </p>
        </article>
      </div>

      <Swiper
        className="treatmentSteps"
        spaceBetween={50}
        slidesPerView={
          deviceWidth === "bigDevice" ? 1.65 : deviceWidth === "mediumDevice" ? 1.2 : 1
        }
        centeredSlides
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        onSlideChange={() => console.log("slide change")}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <div className={`${style.slide_content} ${style.step1}`}>
            <div className={style.slide_content__image}>
              <Image src={step1} alt={""} />
            </div>
            <div className={style.slide_content__text}>
              <div>
                <h3>
                  <TextApp labelID="treatmentSlider.option1.title" textData={textData} />
                </h3>
                <p>
                  <TextApp labelID="treatmentSlider.option1.description" textData={textData} />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.slide_content} ${style.step2}`}>
            <div className={style.slide_content__image}>
              <Image src={step2} alt={""} />
            </div>
            <div className={style.slide_content__text}>
              <div>
                <h3>
                  <TextApp labelID="treatmentSlider.option2.title" textData={textData} />
                </h3>
                <p>
                  <TextApp labelID="treatmentSlider.option2.description" textData={textData} />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.slide_content} ${style.step3}`}>
            <div className={style.slide_content__image}>
              <Image src={step3} alt={""} />
            </div>
            <div className={style.slide_content__text}>
              <div>
                <h3>
                  <TextApp labelID="treatmentSlider.option3.title" textData={textData} />
                </h3>
                <p>
                  <TextApp labelID="treatmentSlider.option3.description" textData={textData} />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={style.centeredContainer}>
        <div className={style.slider_navigation}>
          <button className={style.slider_navigation__prev} onClick={() => swiper.slidePrev()}>
            <span className="only-readers">Previous slide</span>
          </button>
          <button className={style.slider_navigation__next} onClick={() => swiper.slideNext()}>
            <span className="only-readers">Next slide</span>
          </button>
        </div>
        <div className={style.buttonContainer}>
          <ButtonApp
            labelID="moreAboutTreatment.button.label"
            onClick={() => console.log("hola")}
            icon={arrow}
            iconAlign="right"
          />
        </div>
      </div>
    </div>
  );
};

export default TreatmentSliderBlock;
