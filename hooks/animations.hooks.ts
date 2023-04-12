import { useEffect, useRef, useState } from "react";
import gsap, { Power2, Power0 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const useComponentAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const fadeInAnim = (className: string, duration:number,yAxis?: number,xAxis?: number) => {
    gsap.from(className, {
      y: yAxis,
      x: xAxis,
      ease: Power2.easeInOut,
      duration: duration,
      opacity: 0,
    });
  };

  let tlMobile = useRef(gsap.timeline({ paused: true })).current;

  const toggleMobileNav = () => {
    tlMobile.reversed(!tlMobile.reversed());
    // tlMobile.reversed() ? tlMobile.play() : tlMobile.reverse();
  };

  const mobileNavAnimation = () => {
    tlMobile.to(".ul-menu", {
      duration: .3,
      opacity: 1,
      width: "90vw", // change this to 100vh for full-height menu
      ease: Power2.easeOut,
    });
    // tlMobile.from(
    //   ".li-menu",
    //   {
    //     duration: .6,
    //     //opacity: 0,
    //     //x: 20,
    //     //stagger: 0.1,
    //     ease: "expo.inOut",
    //   },
    //   //"-=0.5"
    // );

    tlMobile.reverse();
  };

  return { mobileNavAnimation, toggleMobileNav, fadeInAnim };
};

export default useComponentAnimations;
