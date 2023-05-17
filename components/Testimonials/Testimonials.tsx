import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import ButtonApp from "../ButtonApp";
import TextApp from "../TextApp";
import style from "./testimonials.module.scss";
import woman from "../../public/img/home/woman.jpg";
import man from "../../public/img/home/man.jpg";
import oldWoman from "../../public/img/home/old_woman.jpg";

import testimonials from "../../data/testimonials.json";
import helenThumb from "../../assets/img/testimonials/testi_thumb1.png";
import charlieThumb from "../../assets/img/testimonials/testi_thumb2.png";
import CarlaThumb from "../../assets/img/testimonials/testi_thumb3.png";
import useComponentUtils from "@/ui/hooks/component.hooks";

interface TestimonialsProps {}

const Testimonials = ({}: TestimonialsProps) => {
  const { useWindowSize } = useComponentUtils();

  //checking mobile
  const isMobile = useWindowSize().width <= 768 ? true : false;

  const renderPatientText = (option: number) => {
    if (isMobile) {
      return (
        <div className={style.tabs_content__text}>
          <h3>
            <TextApp labelID={`treatments.option${option}.label`} />
          </h3>
          <p>
            <TextApp labelID={`treatments.option${option}.text`} />
          </p>
        </div>
      );
    }
  };
  const [swiper, setSwiper] = useState<any>();
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: any) => {
      return `<div class="${className} ${style.tabs_button}">
          <div style="background-image:url(/testimonials/${testimonials[index].thumb})" aria-hidden="true" class="${style.tabs_button__thumb}">
          </div>
          <div class="${style.tabs_button__text}">
            <span>${testimonials[index].name}</span>
            <span>${testimonials[index].profession}</span>
          </div>
        </div>`;
    }
  };

  return (
    <div className={`${style.testimonials} testimonials`}>
      <div className={style.testimonials_top}>
        <h2 className={style.title}>
          <TextApp labelID="testimonials.title" />
        </h2>
        <p>
          <TextApp labelID="testimonials.text" />
        </p>
      </div>

      <div className={style.slider}>
        <Swiper
          spaceBetween={20}
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
                <div className={`${style.tabs_content__image} videoPlayer`}>
                  <iframe
                    className="videoPlayer_iframe"
                    src="https://www.youtube.com/embed/jqHbroucyQY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                </div>
                {renderPatientText(1)}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.tabs_content} ${style.item2}`}>
                <div className={`${style.tabs_content__image} videoPlayer`}>
                  <iframe
                    className="videoPlayer_iframe"
                    src="https://www.youtube.com/embed/n9GFtefKWN4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                {renderPatientText(2)}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.tabs_content} ${style.item3}`}>
                <div className={`${style.tabs_content__image} videoPlayer`}>
                  <iframe
                    className="videoPlayer_iframe"
                    src="https://www.youtube.com/embed/icBBhqwzoIY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                {renderPatientText(3)}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.tabs_content} ${style.item4}`}>
                <div className={`${style.tabs_content__image} videoPlayer`}>
                  <iframe
                    className="videoPlayer_iframe"
                    src="https://www.youtube.com/embed/iu_oOxigxCg"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                {renderPatientText(4)}
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
