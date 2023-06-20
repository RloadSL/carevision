import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import VideoConsultation from "@/components/VideoConsultation";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import style from "./clinic.module.scss";
import videoConsultationBg from "../../../../public/img/clinic_bg.jpg";
import TextApp from "@/components/TextApp";
import ButtonApp from "@/components/ButtonApp";
import Steps from "@/components/Steps";
import ImpressionsSlider from "@/components/ImpressionsSlider";
import SEOHeader from "@/components/SEOHeader/SEOHeader";
import { useRouter } from "next/router";
import InfoBanner from "@/components/InfoBanner";

const Clinics: NextPage = (props: any) => {
  const { query } = useRouter();

  return (
    <div className={`${style.clinic} clinic`}>
      <SEOHeader
        title={props.clinic[query.clinic as string].metaTitle}
        description={props.clinic[query.clinic as string].metaDescription}
      />
      <main>
        <section className={style.clinic_hero}>
          <Hero
            textData={props.clinic[query.clinic as string]}
            bgImage=""
            title={"title"}
            sliderTextList={[
              "home.hero.slider.text1",
              "home.hero.slider.text2",
              "home.hero.slider.text3"
            ]}
          />{" "}
        </section>
        <section className={style.clinic_maps}>
          <article className={style.iconsSection_top}>
            <h2 className={style.title}>
              <TextApp labelID="title" textData={props.clinic[query.clinic as string]} />
            </h2>
            <p>
              <TextApp labelID="description" textData={props.clinic[query.clinic as string]} />
            </p>
          </article>
          <div>
            <div id="map"></div>
          </div>
        </section>
        <section className={style.clinic_consultation}>
          <VideoConsultation bgImage={videoConsultationBg} />
        </section>
        <section className={style.clinic_steps}>
          <Steps />
        </section>
        <section className={style.clinic_impressions}>
          <ImpressionsSlider textData={props.clinic[query.clinic as string]} />
        </section>
      </main>
      <section className={style.clinic_testimonials}>
        <Testimonials />
      </section>
      <InfoBanner titleLabelID="home.bannerInfo.title" textLabelID="home.bannerInfo.text" />
    </div>
  );
};

export default Clinics;
