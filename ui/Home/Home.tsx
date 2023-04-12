import SEOHead from "@/components/SEOHead";
import { NextPage } from "next";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./home.module.scss";
import Footer from "@/components/Footer";

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
      home carevision
      <Footer />
    </div>
  );
};

export default Home;
