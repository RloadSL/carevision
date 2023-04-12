import SEOHead from "@/components/SEOHead";
import { NextPage } from "next";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./home.module.scss";
import BottomSection from "@/components/BottomSection";

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
      <SEOHead
        title="CareVision"
        description="Here the SEO description of the page"
      />
home carevision
    </div>
  );
};

export default Home;
