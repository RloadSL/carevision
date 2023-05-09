import React from "react";
import SEOHeader from "@/components/SEOHeader";
import { NextPage } from "next";
import style from "./home.module.scss";
import IconsSection from "@/components/IconsSection";
import TextApp from "@/components/TextApp";
import ButtonApp from "@/components/ButtonApp";
import Treatments from "@/components/Treatments";
import VideoConsultation from "@/components/VideoConsultation";
import VideoBlock from "@/components/VideoBlock";
import OnlineInformation from "@/components/OnlineInformation";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";
import VisualDiseasesTabs from "@/components/VisualDiseasesTabs/VisualDiseasesTabs";

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
      <SEOHeader title="CareVision" description="Here the SEO description of the page" />
      <main>
        <section className={style.home_hero}>
          <Hero
            bgImage=""
            title={"home.hero.title"}
            sliderTextList={[
              "home.hero.slider.text1",
              "home.hero.slider.text2",
              "home.hero.slider.text3"
            ]}
          />
        </section>
        <section className={style.home_icons}>
          <IconsSection />
        </section>
        <section className={style.home_video}>
          <VideoBlock />
        </section>
        <section className={style.home_treatments}>
          <Treatments />
        </section>
        <section className={style.home_consultation}>
          <VideoConsultation />
        </section>
        <section className={style.home_visualDiseases}>
          <VisualDiseasesTabs />
        </section>
        <section className={style.home_doctor}>
          <OnlineInformation />
        </section>
        <section className={style.home_testimonials}>
          <Testimonials />
        </section>
        <div className={style.home_information}>
          <div className={style.home_information_content}>
            <h3>
              <TextApp labelID="home.information.text" />
            </h3>
            <div>
              <ButtonApp labelID="loginNow.button.label" onClick={() => console.log("hola")} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
