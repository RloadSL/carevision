import React, { useState } from "react";
import * as ReactDOMServer from "react-dom/server";
import style from "./visual-diseases-tabs.module.scss";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import arrow from "../../assets/img/arrow_icon.svg";
import "react-before-after-slider-component/dist/build.css";
import TextApp from "../TextApp";
import ButtonApp from "../ButtonApp";
import visualDiseases from "../../data/visualDiseases.json";

/**
 * Section component to render visual diseases slider
 * @returns
 */

const VisualDiseasesTabs = () => {
  const DISEASES = [
    {
      first: { imageUrl: `/kurzsichtig.jpg` },
      second: { imageUrl: `/kurzsichtig_2.jpg` }
    },
    {
      first: { imageUrl: `/lesebrille.jpg` },
      second: { imageUrl: `/lesebrille_2.jpg` }
    },
    {
      first: { imageUrl: `/weitsichtig.jpg` },
      second: { imageUrl: `/weitsichtig_2.jpg` }
    },
    {
      first: { imageUrl: `/hornhautverkrummung.jpg` },
      second: { imageUrl: `/hornhautverkrummung_2.jpg` }
    }
  ];

  const [swiper, setSwiper] = useState<any>();
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: any) => {
      return ReactDOMServer.renderToStaticMarkup(
        <button className={`${className} ${style.bullet}`}>
          {visualDiseases[index].buttonLabel}
        </button>
      );
    }
  };
  return (
    <div className={`${style.visualDiseases} visualDiseases`}>
      <h2 className={style.title}>
        <TextApp labelID="visualDiseases.title" />
      </h2>

      <div className={style.slider_content}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={pagination}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          modules={[EffectFade, Pagination]}
          effect="fade"
          allowTouchMove={false}
        >
          <div className={style.tabs}>
            <SwiperSlide>
              <div className={`${style.visualDiseases_bottom}`}>
                <ReactBeforeSliderComponent
                  firstImage={DISEASES[0].first}
                  secondImage={DISEASES[0].second}
                />
                <div className={style.visualDiseases_bottom_text}>
                  <ul>
                    <TextApp labelID={`visualDiseases.option1.text.list`} />
                    <ButtonApp
                      labelID="forTreatment.button.label"
                      onClick={() => console.log("hola")}
                      icon={arrow}
                      iconAlign="right"
                    />
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.visualDiseases_bottom}`}>
                <ReactBeforeSliderComponent
                  firstImage={DISEASES[1].first}
                  secondImage={DISEASES[1].second}
                />
                <div className={style.visualDiseases_bottom_text}>
                  <ul>
                    <TextApp labelID={`visualDiseases.option2.text.list`} />
                    <ButtonApp
                      labelID="forTreatment.button.label"
                      onClick={() => console.log("hola")}
                      icon={arrow}
                      iconAlign="right"
                    />
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.visualDiseases_bottom}`}>
                <ReactBeforeSliderComponent
                  firstImage={DISEASES[2].first}
                  secondImage={DISEASES[2].second}
                />
                <div className={style.visualDiseases_bottom_text}>
                  <ul>
                    <TextApp labelID={`visualDiseases.option3.text.list`} />
                    <ButtonApp
                      labelID="forTreatment.button.label"
                      onClick={() => console.log("hola")}
                      icon={arrow}
                      iconAlign="right"
                    />
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.visualDiseases_bottom}`}>
                <ReactBeforeSliderComponent
                  firstImage={DISEASES[3].first}
                  secondImage={DISEASES[3].second}
                />
                <div className={style.visualDiseases_bottom_text}>
                  <ul>
                    <TextApp labelID={`visualDiseases.option4.text.list`} />
                    <ButtonApp
                      labelID="learnMore.button.label"
                      onClick={() => console.log("hola")}
                      icon={arrow}
                      iconAlign="right"
                    />
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default VisualDiseasesTabs;
