import Link from "next/link";
import style from "./header.module.scss";
import Image from "next/image";
import logo from "../../assets/img/logo.svg";
import stars from "../../assets/img/stars.svg";
import logoMobile from "../../assets/img/logo.svg";
// import useComponentUtils from "@/hooks/component.hooks";
// import useComponentAnimations from "@/hooks/animations.hooks";
import { useEffect, useState } from "react";
import useComponentUtils from "@/hooks/component.hooks";
import useComponentAnimations from "@/hooks/animations.hooks";
import menuData from "../../data/menu.json";
import ButtonApp from "../ButtonApp";
import TextApp from "../TextApp";
import calendarIcon from "../../assets/img/calendar.svg";
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

  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <div
      className={`${style.header} ${style[isMobile ? "mobile" : "pc"]} navigation`}
      style={
        useScrollDistance() >= 100 ? { backgroundColor: "white" } : { backgroundColor: "white" }
      }
    >
      <header className={`${scroll ? style.header_content__scrolled : ""}`}>
        <div className={style.header_top}>
          <div className={`${style.header_logo} logo`}>
            <Link href={"/"}>
              <Image src={isMobile ? logoMobile : logo} alt={"Definitio logo"} />
            </Link>
          </div>
          <div className={style.rating}>
            <Image src={stars} alt={"5 stars rating "} />
          </div>
          <div className={style.phone}>
            <TextApp labelID="phoneNumber.button.label" />
          </div>
          <div>
            <ButtonApp
              icon={calendarIcon}
              iconAlign="left"
              labelID="onlineDate.button.label"
              onClick={() => console.log("hola")}
            />
          </div>

          {isMobile && (
            <button className={style.mobileButton} onClick={toggleMobileNav}>
              <span className="only-readers">menu</span>
            </button>
          )}
        </div>
        <div className={style.header_bottom}>
          <nav className={`${style.menu} sidemenu`}>
            {isMobile && (
              <button className={style.closeButton} onClick={toggleMobileNav}>
                <span className="only-readers">menu</span>
              </button>
            )}
            <ul>
              {menuData.map((item, index: number) => {
                return (
                  <li className={`${style.header_menu__item} li-menu`} key={index}>
                    <Link href={`/${item}`} onClick={toggleMobileNav}>
                      <span>{item}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={`${style.overlay} overlay`} aria-hidden={true}></div>
        </div>
        {isMobile && (
          <div className={style.submenu}>
            <ul>
              <li>
                <div>
                  <TextApp labelID="customerService.submenu.label" />
                </div>
              </li>
              <li>
                <div>
                  <TextApp labelID="emailContact.submenu.label" />
                </div>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
