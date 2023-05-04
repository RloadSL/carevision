import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";
import Testimonials from "@/components/Testimonials";
import VideoConsultation from "@/components/VideoConsultation";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import style from "./clinic.module.scss";
import videoConsultationBg from "../../../../public/img/clinic_bg.jpg";
import TextApp from "@/components/TextApp";
import Footer from "@/components/Footer";
import ButtonApp from "@/components/ButtonApp";
import Steps from "@/components/Steps";

interface ClinicsProps {}

const Clinics: NextPage = (props: any) => {
  const [clinicData] = useState(props.clinic);
  useEffect(() => {
    //console.log(JSON.stringify(clinicData));
  }, [clinicData]);

  return (
    <div className={style.clinic}>
      <SEOHead title="CareVision" description="Here the SEO description of the page" />
      <main>
        <section className={style.clinic_hero}>
          <Hero />
        </section>
        <section className={style.clinic_maps}>
          <article className={style.iconsSection_top}>
            <h2 className={style.title}>
              <TextApp labelID="title" textData={clinicData} />
            </h2>
            <p>
              <TextApp labelID="description" textData={clinicData} />
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
        <div>slider</div>
      </main>

      <section className={style.clinic_testimonials}>
        <Testimonials />
      </section>
      <div className={style.clinic_information}>
        <div className={style.clinic_information_content}>
          <h3>
          <TextApp labelID="infoBanner.title" textData={clinicData} />
          </h3>
          <p>
          <TextApp labelID="infoBanner.description" textData={clinicData} />
          </p>
          <div>
            <ButtonApp labelID="loginNow.button.label" onClick={() => console.log("hola")} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clinics;
