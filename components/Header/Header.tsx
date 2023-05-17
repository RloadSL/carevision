import Link from "next/link";
import style from "./header.module.scss";
import Image from "next/image";
import logo from "../../assets/img/logo.svg";
import stars from "../../assets/img/stars.svg";
import logoMobile from "../../assets/img/logo.svg";
// import useComponentUtils from "@/hooks/component.hooks";
// import useComponentAnimations from "@/hooks/animations.hooks";
import { useEffect, useState } from "react";
import useComponentUtils from "@/ui/hooks/component.hooks";
import useComponentAnimations from "@/ui/hooks/animations.hooks";
import menuData from "../../data/menu.json";
import ButtonApp from "../ButtonApp";
import TextApp from "../TextApp";
import calendarIcon from "../../assets/img/calendar.svg";
// import gsap, { Power2 } from "gsap";

interface HeaderProps {
  displayModal: Function;
}

/**
 * Component that includes the header with the menu
 * @returns
 */

const Header = ({ displayModal }: HeaderProps) => {
  const { useScrollDistance, useWindowSize } = useComponentUtils();
  const { mobileNavAnimation, toggleMobileNav } = useComponentAnimations();

  useEffect(() => {
    console.log(menuData);
    mobileNavAnimation();
  }, []);

  //checking mobile menu
  const isMobile = useWindowSize().width <= 768 ? true : false;

  // console.log(useScrollDistance())

  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <div className={`${style.header} ${style[isMobile ? "mobile" : "pc"]} navigation`}>
      <button
        className={style.fixedButton}
        style={
          useScrollDistance() > 400
            ? { transform: "translateX(-100px)" }
            : { transform: "translateX(0px)" }
        }
      >
        online termin
      </button>
      <header>
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
          <div className={style.onlineDate}>
            <ButtonApp
              icon={calendarIcon}
              iconAlign="left"
              labelID="getDate.button.label"
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
              <>
                <div className={style.menu_logo}>
                  <Image src={logoMobile} alt={"CareVision logo"} />
                </div>
                <button className={style.closeButton} onClick={toggleMobileNav}>
                  <span className="only-readers">menu</span>
                </button>
              </>
            )}
            <ul>
              {menuData.map((item, index: number) => {
                return (
                  <li className={`${style.header_menu__item} li-menu`} key={index}>
                    <Link href={`${item.url}`} onClick={toggleMobileNav}>
                      <span>{item.label}</span>
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
                <button
                  className={style.submenu_button__phone}
                  type="button"
                  onClick={() => alert("hola")}
                >
                  <span>
                    <TextApp labelID="customerService.submenu.label" />
                  </span>
                </button>
              </li>
              <li>
                <button
                  className={style.submenu_button__form}
                  type="button"
                  onClick={() => displayModal()}
                >
                  <span>
                    <TextApp labelID="emailContact.submenu.label" />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
