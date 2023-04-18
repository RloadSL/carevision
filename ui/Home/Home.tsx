import SEOHead from "@/components/SEOHead";
import { NextPage } from "next";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./home.module.scss";
import Footer from "@/components/Footer";
import IconsSection from "@/components/IconsSection";
import TextApp from "@/components/TextApp";
import ButtonApp from "@/components/ButtonApp";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SwiperSlide } from "swiper/react";
import VisualDiseases from "@/components/VisualDiseases";
import Treatments from "@/components/Treatments";
// import RLDTabs from "@/components/DD_RLDTabs";
// import VisualDiseasesTabs from "@/components/DD-VisualDiseasesTabs/VisualDiseasesTabs";

/**
 * Home page structure component. Includes the SEO header and each of the sections that build the UI of the page
 * @returns
 */

const Home: NextPage = () => {
  const onClick = () => {
    alert("hola");
  };

  return (
    <div className={style.home}>
      <SEOHead title="CareVision" description="Here the SEO description of the page" />
      <main>
        <section className={style.home_hero}>hero</section>
        <section className={style.home_icons}>
          <IconsSection />
        </section>
        <section className={style.home_video}>video</section>
        <section className={style.home_treatments}>
          <Treatments/>
        </section>
        <section className={style.home_consultation}>consultation</section>
        <section className={style.home_visualDiseases}>
          <VisualDiseases />
        </section>
        <section className={style.home_doctor}>doctor</section>
        <section className={style.home_comments}>comments</section>
        <div className={style.home_information}>
          <div className={style.home_information_content}>
            <h3>
              <TextApp labelID="home.information.text" />
            </h3>
            <div>
              <ButtonApp labelID="loginNow.button.label" onClick={() => console.log("hola")} />
            </div>
          </div>
          <div></div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
