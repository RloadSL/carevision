import React from "react";
import Image from "next/image";
import style from "./footer.module.scss";
import logo from "../../assets/img/logo.svg";
import instagram from "../../assets/img/instagram.svg";
import facebook from "../../assets/img/facebook.svg";
import linkedin from "../../assets/img/linked.svg";
import youtube from "../../assets/img/youtube.svg";
import xing from "../../assets/img/xing.svg";
import ekomi from "../../assets/img/ekomi.png";
import tuv from "../../assets/img/tuv.png";
import Link from "next/link";

/**
 * Footer component of our website, includes social networks and links to legal texts
 * @returns
 */

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content}>
        <div className={style.footer_logo}>
          <div className={style.footer_logo__wrapper}>
            <Image src={logo} alt={"CareVision logo"} />
          </div>
        </div>
        <div className={style.footer_social}>
          <ul>
            <li>
              <Link href={"#"}>
                <Image src={instagram} alt={"Instagram"} />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image src={facebook} alt={"Facebook"} />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image src={linkedin} alt={"LinkedIn"} />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image src={xing} alt={"Xing"} />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image src={youtube} alt={"Youtube"} />
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.footer_quality}>
          <div className={`${style.tuv} flex`}>
            <div className={style.tuv_text}>
              <p>ZERTIFIZIERTE</p>
              <p>SERVICEQUALITÄT</p>
            </div>
            <div className={style.tuv_img}>
              <Image src={tuv} alt={"Tuv"} />
            </div>
          </div>
          <div className={style.ekomi}>
            <Image src={ekomi} alt={"ekomi"} />
          </div>
        </div>
        <div className={style.footer_phone}>
          <div className={style.contact}>
            <div className={style.contact_text}>
              <p>0800 8888 474</p>
              <p>Deutschland, gebuhrenfrei</p>
            </div>
          </div>
        </div>

        <div className={style.footer_legal}>
          <p>
            In Regensburg, Würzburg und Ingolstadt; Behandlungsverträge, ärztliche Leistungen und
            Abrechnung durch ausgewählte, rechtlich selbständige Augenärztinnen und Augenärzte.
          </p>
          <ul>
            <li>
              <Link href={"#"}>Datenschutzbestimmungen</Link>
            </li>
            <li>
              <Link href={"#"}>Impressum</Link>
            </li>
            {/* <li>
              <Link href={"#"}>Cookie Policy</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
