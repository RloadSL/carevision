import React from "react";
import style from "./info-banner.module.scss";
import TextApp from "../TextApp";
import ButtonApp from "../ButtonApp";
import arrow from "../../assets/img/arrow_icon.svg";

interface InfoBannerProps {
  titleLabelID: string;
  textLabelID: string;
}

const InfoBanner = ({ titleLabelID, textLabelID }: InfoBannerProps) => {
  return (
    <div className={style.infoBanner}>
      <div className={style.infoBanner_content}>
        <h3>
          <TextApp labelID={titleLabelID} />
        </h3>
        <p>
          <TextApp labelID={textLabelID} />
        </p>
        <div>
          <ButtonApp
            labelID="loginNow.button.label"
            onClick={() => console.log("hola")}
            icon={arrow}
            iconAlign="right"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
