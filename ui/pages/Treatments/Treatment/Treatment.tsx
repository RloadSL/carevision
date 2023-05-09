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


interface TreatmentProps {}

const Treatment: NextPage = (props: any) => {
  const { query } = useRouter();
  return (
    <div className={style.treatment}>
      <SEOHeader title="AugenLasern" description="Here the SEO description of the page" />
      {/* <TextApp labelID="title" textData={props.treatment[query.treatment as string]} /> */}
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
        <section className={style.home_treatments}>
          <Treatments />
        </section>
        <section className={style.treatment_consultation}>
          <VideoConsultation bgImage={videoConsultationBg} />
        </section>
        <section>chico rubio</section>
        <section>slider</section>
        <section className={style.home_doctor}>
          <OnlineInformation />
        </section>
      </main>
      <section className={style.treatment_testimonials}>
        <Testimonials />
      </section>
      <div className={style.treatment_information}>
        <div className={style.treatment_information_content}>
          <h3>
            <TextApp
              labelID="infoBanner.title"
              textData={props.treatment[query.treatment as string]}
            />
          </h3>
          <p>
            <TextApp
              labelID="infoBanner.description"
              textData={props.treatment[query.treatment as string]}
            />
          </p>
          <div>
            <ButtonApp labelID="loginNow.button.label" onClick={() => console.log("hola")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
