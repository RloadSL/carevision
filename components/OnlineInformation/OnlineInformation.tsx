import Image from "next/image";
import React from "react";
import ButtonApp from "../ButtonApp";
import TextApp from "../TextApp";
import style from "./online-information.module.scss";
import doctor from "../../public/img/home/doctor_carevision.png";
import arrow from "../../assets/img/arrow_icon.svg";
import useComponentUtils from "@/ui/hooks/component.hooks";

interface OnlineInformationProps {
  bgImage?: any;
  textData?: any;
  titleLabelID: string;
  textLabelID: string;
}

const OnlineInformation = ({
  bgImage,
  textData,
  titleLabelID,
  textLabelID
}: OnlineInformationProps) => {
  const { useWindowSize } = useComponentUtils();
  console.log(textData);

  //checking mobile
  const isMobile = useWindowSize().width <= 768 ? true : false;

  return (
    <div className={style.onlineInformation}>
      <div className={style.onlineInformation_image}>
        {isMobile && (
          <h2>
            <TextApp labelID={titleLabelID} />
          </h2>
        )}
        <div className={`${style.onlineInformation_image__bubble} ${style.bubble1} bubble`}>
          <p className={style.title}>Save the date</p>
          <p>22.04 18:00 Uhr</p>
        </div>
        <div className={`${style.onlineInformation_image__bubble} ${style.bubble2} bubble`}>
          <p className={style.title}>InfoabendAugenlasern</p>
          <p>Mit Mohamad Bdoura, fachart fur augenheilkinde</p>
        </div>
        <div className={style.onlineInformation_image__doctor}>
          <Image src={bgImage} alt={"Doctor Mohamad Bdoura"} />
        </div>
      </div>
      <div className={style.onlineInformation_text}>
        {!isMobile && (
          <h2>
            <TextApp labelID={titleLabelID} textData={textData}/>
          </h2>
        )}
        <div>
          <TextApp labelID={textLabelID} textData={textData}/>
        </div>
        <ButtonApp
          icon={arrow}
          labelID="registerNow.button.label"
          onClick={() => console.log("hola")}
        />
      </div>
    </div>
  );
};

export default OnlineInformation;
