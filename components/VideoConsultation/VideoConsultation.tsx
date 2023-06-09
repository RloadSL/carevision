import React from "react";
import ButtonApp from "../ButtonApp";
import TextApp from "../TextApp";
import style from "./video-consultation.module.scss";
import arrow from "../../assets/img/arrow_icon.svg";
import peopleRunning from "../../assets/img/videoConsultation.jpg";
import Image from "next/image";
import useComponentUtils from "@/ui/hooks/component.hooks";

interface VideoConsultationProps {
  bgImage?: any;
}

const VideoConsultation = ({ bgImage = peopleRunning }: VideoConsultationProps) => {
  const { useWindowSize } = useComponentUtils();

  //checking mobile size
  const isMobile = useWindowSize().width < 768 ? true : false;

  return (
    <div
      className={style.videoConsultation}
      style={{ backgroundImage: !isMobile ? `url(${bgImage.src})` : "none" }}
    >
      <div className={style.videoConsultation_text}>
        <h2 className={style.title}>
          <TextApp labelID="videoConsultation.title" />
        </h2>
        <p>
          <TextApp labelID="videoConsultation.text.p" />
        </p>
        {isMobile && (
          <div className={style.img}>
            <Image src={bgImage} alt={"People running on the beach"} />
          </div>
        )}
        <div className={style.videoConsultation_text_list}>
          <TextApp labelID="videoConsultation.text.list" />
        </div>
        <div className={style.buttonContainer}>
          <ButtonApp
            labelID="arrangeVideoConsultation.button.label"
            onClick={() => console.log("hola")}
            icon={arrow}
            iconAlign="right"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoConsultation;
