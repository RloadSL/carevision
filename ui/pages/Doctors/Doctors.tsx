import React from "react";
import style from "./doctors.module.scss";
import { NextPage } from "next";
import InfoBanner from "@/components/InfoBanner";
import Hero from "@/components/Hero";
import RLDSEOHeader from "@/components/SEOHeader/SEOHeader";
import doctorsList from "../../../data/doctors.json";
import Image from "next/image";
import TextApp from "@/components/TextApp";

interface DoctorsProps {}

const Doctors: NextPage = ({}: DoctorsProps) => {
  return (
    <div className={`${style.doctors} doctors`}>
      <RLDSEOHeader title="CareVision" description="Here the SEO description of the page" />
      <main>
        <div className={style.doctors_hero}>
          <Hero
            bgImage="/public/img/doctors/home.jpg"
            title={"doctors.hero.title"}
            sliderTextList={[
              "home.hero.slider.text1",
              "home.hero.slider.text2",
              "home.hero.slider.text3",
              "home.hero.slider.text4"
            ]}
          />
        </div>
        <section className={style.doctors_description}>
          <article>
            <h2 className={style.title}>
              <TextApp labelID="doctors.title" />
            </h2>
            <p>
              <TextApp labelID="doctors.text" />
            </p>
          </article>
        </section>
        <section className={style.doctors_list}>
          <ul>
            {doctorsList.map((doctor: any, index: number) => {
              return (
                <li key={index}>
                  <div className={style.doctor}>
                    <div className={style.doctor_image}>
                      <Image src={doctor.imgSrc} alt="" width={337} height={392} />
                    </div>
                    <div className={style.doctor_info}>
                      <h4>{doctor.name}</h4>
                      <span>{doctor.position}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section className={style.doctors_infoBanner}>
          <InfoBanner titleLabelID="home.bannerInfo.title" textLabelID="home.bannerInfo.text" />
        </section>
      </main>
    </div>
  );
};

export default Doctors;
