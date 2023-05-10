import React, { useState } from "react";
import style from "./steps.module.scss";
import ButtonApp from "../ButtonApp";
import TextApp from "../TextApp";
import Image from "next/image";
import useComponentUtils from "@/ui/hooks/component.hooks";
import arrow from "../../assets/img/arrow_icon.svg";

interface StepsProps {
  // textData: any
}

const Steps = ({}: StepsProps) => {
  //checking mobile menu
  // const { useWindowSize } = useComponentUtils();

  // const isMobile = useWindowSize().width <= 768 ? true : false;
  // const buttonLabels = ["Augenlasern", "Multifokallinsen", "ICL Linsenbehandlung"];

  // const [swiper, setSwiper] = useState<any>();
  // const pagination = {
  //   clickable: true,
  //   renderBullet: (index: number, className: any) => {
  //     return `<span class="${className} ${style.tabs_button}">${buttonLabels[index]}</span>`;
  //   }
  // };
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

      <div className={style.steps_screenLayout}>
        <ul className={style.list}>
          <li className={style.list__step1}>
            <div className={style.content}>
              <div className={style.content_text}>
                <h4>
                  <TextApp labelID="steps.option1.title" />
                </h4>
                <p>
                  <TextApp labelID="steps.option1.text" />
                </p>
              </div>
            </div>
          </li>
          <li className={style.list__step2}>
            <div className={style.content}>
              <div className={style.content_text}>
                <h4>
                  <TextApp labelID="steps.option2.title" />
                </h4>
                <p>
                  <TextApp labelID="steps.option2.text" />
                </p>
              </div>
            </div>
          </li>
          <li className={style.list__step3}>
            <div className={style.content}>
              <div className={style.content_text}>
                <h4>
                  <TextApp labelID="steps.option3.title" />
                </h4>
                <p>
                  <TextApp labelID="steps.option3.text" />
                </p>
              </div>
            </div>
          </li>
        </ul>
        <ButtonApp
          labelID="getDateNow.button.label"
          onClick={() => console.log("hola")}
          iconAlign="right"
          icon={arrow}
        />
      </div>
    </div>
  );
};

export default Steps;
