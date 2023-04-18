import React, { useState } from "react";
import style from "./treatments.module.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// import image1 from "../../assets/img/slider/01.jpg";
// import image2 from "../../assets/img/slider/02.jpg";
// import image3 from "../../assets/img/slider/03.jpg";
// import image4 from "../../assets/img/slider/04.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import * as ReactDOMServer from "react-dom/server";
import TextApp from "../TextApp";
import Image from "next/image";
import woman from "../../assets/img/treatments.jpg";
import arrow from "../../assets/img/arrow_icon.svg";
import ButtonApp from "../ButtonApp";

interface TreatmentsProps {}

const Treatments = ({}: TreatmentsProps) => {
  const buttonLabels = ["Augenlasern", "Multifokallinsen", "ICL Linsenbehandlung"];
  const [swiper, setSwiper] = useState<any>();
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: any) => {
      return `<span class="${className} ${style.tabs_button}">${buttonLabels[index]}</span>`;
    }
  };

  return (
    <div className={`${style.treatments} treatments`}>
      <h2 className={style.title}>
        <TextApp labelID="treatments.title" />
      </h2>
      <div className={style.slider_content}>
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
                  <Image src={woman} alt={""} />
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
                      icon={arrow}
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
    </div>
  );
};

export default Treatments;
