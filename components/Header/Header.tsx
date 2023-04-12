import Link from "next/link";
import style from "./header.module.scss";
import Image from "next/image";
import logo from "../../assets/img/logo.svg";
import logoMobile from "../../assets/img/logo.svg";
// import useComponentUtils from "@/hooks/component.hooks";
// import useComponentAnimations from "@/hooks/animations.hooks";
import { useEffect, useState } from "react";
import HamburguerButton from "./HamburguerButton";
import useComponentUtils from "@/hooks/component.hooks";
import useComponentAnimations from "@/hooks/animations.hooks";
// import gsap, { Power2 } from "gsap";

/**
 * Component that includes the header with the menu
 * @returns 
 */

const Header = () => {
  const { useScrollDistance, useWindowSize } = useComponentUtils();
  const { mobileNavAnimation, toggleMobileNav } = useComponentAnimations();

  useEffect(() => {
    mobileNavAnimation();
  }, []);

  //checking mobile menu
  const isMobile = useWindowSize().width <= 768 ? true : false;

  //adding the formatted label Array for the top menu translation JSON
  const menuLabelIDs: Array<string> = ["services", "why-us", "about", "contact"];

  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <div
      className={`${style.navigation} ${style[isMobile ? "mobile" : "pc"]} navigation `}
      style={
        useScrollDistance() >= 100
          ? { backgroundColor: "white" }
          : { backgroundColor: "transparent" }
      }
    >
      <header
        className={`${style.navigation_content} ${
          scroll ? style.navigation_content__scrolled : ""
        }`}
      >
        <div className={style.navigation_content__top}>
          <Link href={"/"}>
            <div className={`${style.navigation_logo} logo`}>
              <Image src={isMobile ? logoMobile : logo} alt={"Definitio logo"} />
            </div>
          </Link>
          {isMobile && <HamburguerButton onClick={toggleMobileNav} />}
        </div>

        <nav className={style.menu}>
          <ul className="ul-menu">
            {menuLabelIDs.map((item, index: number) => {
              return (
                <li className={`${style.navigation_menu__item} li-menu`} key={index}>
                  <Link href={`/${item}`} className={style[item]} onClick={toggleMobileNav}>
                    <span>
                      menu
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
