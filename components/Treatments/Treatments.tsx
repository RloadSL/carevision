import React, { useState } from "react";
import style from "./treatments.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import TextApp from "../TextApp";
import Image from "next/image";
import arrow from "../../assets/img/arrow_icon.svg";
import ButtonApp from "../ButtonApp";

interface TreatmentsProps {
  textData: any;
}

const Treatments = ({ textData }: TreatmentsProps) => {
  console.log(textData);
  const [swiper, setSwiper] = useState<any>();
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: any) => {
      return `<span class="${className} ${style.tabs_button}">${textData.options[index].label}</span>`;
    }
  };

  return (
    <div className={`${style.treatments} treatments`}>
      <h2 className={style.title}>
        <TextApp labelID="title" textData={textData} />
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
        >
          <div className={style.tabs}>
            {textData.options.map((item: any, index: number) => {
              console.log(textData);
              return (
                <SwiperSlide key={index}>
                  <div className={`${style.tabs_content} ${style.item1}`}>
                    <div className={style.tabs_content__image}>
                      {!item.imgSrc ? (
                        <div className="videoPlayer">
                          <iframe
                            className="videoPlayer_iframe"
                            src={item.videoSrc}
                            title="CareVision"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          />
                        </div>
                      ) : (
                        <Image src={item.imgSrc} alt={"Person smiling"} width={700} height={400} />
                      )}
                    </div>
                    <div className={style.tabs_content__text}>
                      <div>
                        <h3>
                          <TextApp labelID="label" textData={item} />
                        </h3>
                        <p>
                          <TextApp labelID="text" textData={item} />
                        </p>
                        {item.list && (
                          <ul>
                            <TextApp labelID="list" textData={item} />
                          </ul>
                        )}
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
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Treatments;
