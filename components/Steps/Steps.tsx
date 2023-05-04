import React, { useState } from "react";
import style from "./steps.module.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import ButtonApp from "../ButtonApp";
import TextApp from "../TextApp";
import Image from "next/image";
import useComponentUtils from "@/ui/hooks/component.hooks";

interface StepsProps {
  // textData: any
}

const Steps = ({}: StepsProps) => {
  //checking mobile menu
  const { useWindowSize } = useComponentUtils();

  const isMobile = useWindowSize().width <= 768 ? true : false;
  const buttonLabels = ["Augenlasern", "Multifokallinsen", "ICL Linsenbehandlung"];

  const [swiper, setSwiper] = useState<any>();
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: any) => {
      return `<span class="${className} ${style.tabs_button}">${buttonLabels[index]}</span>`;
    }
  };
  return (
    <div className={style.steps}>
      <article className={style.iconsSection_top}>
        <h2 className={style.title}>
          <TextApp labelID="steps.title" />
        </h2>
        <p>
          <TextApp labelID="steps.text" />
        </p>
      </article>
      {isMobile ? (
        <div className={style.steps_mobileLayout}>
          <Swiper
            spaceBetween={20}
            // centeredSlides={false}
            slidesPerView={1}
            pagination={pagination}
            onSwiper={(swiper) => {
              console.log(swiper);
              setSwiper(swiper);
            }}
            onSlideChange={() => console.log("slide change")}
            modules={[EffectFade, Pagination]}
            effect="fade"
          >
            <div className={style.tabs}>
              <SwiperSlide>
                <div className={`${style.tabs_content} ${style.item1}`}>
                  <div className={style.tabs_content__image}>
                    <Image src={""} alt={""} />
                  </div>
                  <div className={style.tabs_content__text}>
                    <div>
                      <h3>
                        <TextApp labelID="treatments.option1.label" />
                      </h3>
                      <p>
                        <TextApp labelID="treatments.option1.text" />
                      </p>
                    </div>
                    <div className={style.button}>
                      <ButtonApp
                        labelID="learnMore.button.label"
                        onClick={() => console.log("hola")}
                        iconAlign="right"
                      />
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
            </div>
          </Swiper>
        </div>
      ) : (
        <div className={style.steps_screenLayout}>
          <ul className={style.steps_list}>
            <li className={style.steps_list__step1}>
              <div className={style.content}>
                <h4>
                  <TextApp labelID="steps.option1.title" />
                </h4>
                <p>
                  <TextApp labelID="steps.option1.text" />
                </p>
              </div>
            </li>
            <li className={style.steps_list__step2}>
              <div className={style.content}>
                <h4>
                  <TextApp labelID="steps.option2.title" />
                </h4>
                <p>
                  <TextApp labelID="steps.option2.text" />
                </p>
              </div>
            </li>
            <li className={style.steps_list__step3}>
              <div className={style.content}>
                <h4>
                  <TextApp labelID="steps.option3.title" />
                </h4>
                <p>
                  <TextApp labelID="steps.option3.text" />
                </p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Steps;
