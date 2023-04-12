import React, { useEffect } from "react";
import Image from "next/image";
import style from "./about-decoration.module.scss";
import blueSpot from "../../../assets/img/about/blue_spot.svg";
import boyGirl from "../../../assets/img/about/boy_girl.svg";
import city from "../../../assets/img/about/city2.svg";
import yellowSpot from "../../../assets/img/about/yellow_spot.svg";
import window from "../../../assets/img/about/window.svg";
import mobile from "../../../assets/img/about/mobile.svg";
import gsap, { Power2 } from "gsap";

interface AboutDecorationProps {}

/**
 * Component to handle the animated graphics of the section
 * @returns 
 */

const AboutDecoration = ({}: AboutDecorationProps) => {
  useEffect(() => {
    gsap.from(".blueSpot", {
      y: -80,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0
    });
    gsap.from(".boyGirl", {
      x: -30,
      ease: Power2.easeInOut,
      duration: .6,
    });
    gsap.from(".city", {
      y: 40,
      ease: Power2.easeInOut,
      duration: .6,
      opacity: 0
    });
    gsap.from(".mobile", {
      y: -50,
      ease: Power2.easeInOut,
      duration: .8,
      opacity: 0
    });
  }, []);
  return (
    <div className={style.wrapper}>
      <canvas width={770} height={740} />
      <div className={`${style.blueSpot} blueSpot`}>
        <Image src={blueSpot} alt={""} />
      </div>
      <div className={`${style.boyGirl} boyGirl`}>
        <Image src={boyGirl} alt={""} />
      </div>
      <div className={`${style.city} city`}>
        <Image src={city} alt={""} />
      </div>
      <div className={`${style.mobile} mobile`}>
        <Image src={mobile} alt={""} />
      </div>
      <div className={`${style.yellowSpot} graphic`}>
        <Image src={yellowSpot} alt={""} />
      </div>
      <div className={`${style.window} game`}>
        <Image src={window} alt={""} />
      </div>
    </div>
  );
};

export default AboutDecoration;
