import React, { useEffect } from "react";
import BottomSection from "@/components/BottomSection";
import SEOHead from "@/components/SEOHead";
import { NextPage } from "next";
import style from "./about.module.scss";
import { FormattedMessage } from "react-intl";
import ButtonApp from "@/components/ButtonApp";
import AboutDecoration from "./AboutDecoration";
import SliderApp from "@/components/SliderApp";
import gsap, { Power2 } from "gsap";
import Image from "next/image";
import cube1 from "../../assets/img/cube.svg"


/**
 * About page structure component. Includes the SEO header and each of the sections that build the UI of the page
 * @returns
 */

const About: NextPage = () => {
  const onClick = () => {
    alert("hola");
  };

  useEffect(() => {
    gsap.from(".title", {
      y: -80,
      ease: Power2.easeInOut,
      duration: 1,
      opacity: 0
    });
    gsap.from(".text", {
      y: -40,
      ease: Power2.easeInOut,
      duration: .6,
      opacity: 0
    });
  }, []);

  return (
    <div className={`${style.about} about`}>
      <SEOHead title="About" description="" />
      <div className={`${style.cube1} cube1`}>
        <Image src={cube1} alt={""} />
      </div>
      <div className={`${style.cube2} cube2`}>
        <Image src={cube1} alt={""} />
      </div>
      <div>
        <div className={style.content}>
          <div className={style.about_info}>
            <article>
              <h1 className="title">
                <FormattedMessage id="page.about.h1" />
              </h1>
              <div className={`${style.about_info__text} text`}>
                <FormattedMessage
                  id="page.about.text"
                  values={{
                    p: (children) => <p>{children}</p>
                  }}
                />
              </div>
              <ButtonApp labelID="btn.label.contact" onClick={onClick} />
            </article>
          </div>
          <div className={style.about_decoration}>
            <AboutDecoration />
          </div>
        </div>
        <div className={style.about_slider}>
          <SliderApp/>
        </div>
      </div>
      <BottomSection />
    </div>
  );
};

export default About;
