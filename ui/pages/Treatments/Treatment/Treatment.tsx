import React, { useEffect, useState } from "react";
import style from "./treatment.module.scss";
import TextApp from "@/components/TextApp";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { HTTP } from "@/services/http";
import SEOHeader from "@/components/SEOHeader/SEOHeader";
import Hero from "@/components/Hero";
import VideoConsultation from "@/components/VideoConsultation";
import videoConsultationBg from "../../../../public/img/treatment_bg.jpg";
import Treatments from "@/components/Treatments";
import OnlineInformation from "@/components/OnlineInformation";
import Testimonials from "@/components/Testimonials";
import ButtonApp from "@/components/ButtonApp";
import doctor from "../../../../public/img/girl_doctor.png";
import TreatmentPriceBlock from "./TreatmentPriceBlock";
import TreatmentSliderBlock from "./TreatmentSliderBlock";
import treatments from "../../../../data/treatments.json";
import InfoBanner from "@/components/InfoBanner";

interface TreatmentProps {}

const Treatment: NextPage = (props: any) => {
  const { query } = useRouter();
  // useEffect(() => {
  //   alert("cambia el texto")
  // }, [props])
  return (
    <div className={`${style.treatment} treatment`}>
      <SEOHeader title="AugenLasern" description="Here the SEO description of the page" />
      <main>
        <section className={style.treatment_hero}>
          <Hero
            textData={props.treatment[query.treatment as string]}
            bgImage=""
            title={"title"}
            sliderTextList={[
              "home.hero.slider.text1",
              "home.hero.slider.text2",
              "home.hero.slider.text3"
            ]}
          />
        </section>
        <section className={style.treatment_treatments}>
          <Treatments textData={treatments["treatment"]} />
        </section>
        <section className={style.treatment_consultation}>
          <VideoConsultation bgImage={videoConsultationBg} />
        </section>
        <section>
          <TreatmentPriceBlock textData={props.treatment[query.treatment as string]} />
          <TreatmentSliderBlock textData={props.treatment[query.treatment as string]} />
        </section>
        <section className={style.treatment_doctor}>
          <OnlineInformation
            bgImage={doctor}
            textLabelID="onlineInformation.description"
            titleLabelID="onlineInformation.title"
            textData={props.treatment[query.treatment as string]}
          />
        </section>
      </main>
      <section className={style.treatment_testimonials}>
        <Testimonials />
      </section>
      <section className={style.treatment_infoBanner}>
        <InfoBanner titleLabelID="home.bannerInfo.title" textLabelID="home.bannerInfo.text" />
      </section>
    </div>
  );
};

export default Treatment;
