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


const Clinics: NextPage = (props: any) => {
  const { query } = useRouter();

  return (
    <div className={style.clinic}>
      <SEOHeader title="CareVision" description="Here the SEO description of the page" />
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
      <div className={style.clinic_information}>
        <div className={style.clinic_information_content}>
          <h3>
            <TextApp labelID="infoBanner.title" textData={props.clinic[query.clinic as string]} />
          </h3>
          <p>
            <TextApp labelID="infoBanner.description" textData={props.clinic[query.clinic as string]} />
          </p>
          <div>
            <ButtonApp labelID="loginNow.button.label" onClick={() => console.log("hola")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinics;
