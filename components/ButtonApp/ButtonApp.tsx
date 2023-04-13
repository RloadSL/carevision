import Image from "next/image";
import React from "react";
import TextApp from "../TextApp";
import style from "./button-app.module.scss";

interface ButtonAppProps {
  labelID: string;
  onClick: Function;
  icon?: string;
}

/** Button component for web
 * @param labelID ID for JSON translations
 * @param onClick onClick function
 * @param icon Optional image for the icon of the button
 * @returns
 */

const ButtonApp = ({ labelID, onClick, icon }: ButtonAppProps) => {
  return (
    <button
      className={style.button}
      onClick={() => {
        onClick();
      }}
    >
      {icon && (
        <span aria-hidden={true} className={style.button_icon}>
          <Image src={icon} alt={""} />
        </span>
      )}
      <span className={style.button_label}>
        <TextApp labelID={labelID} />
      </span>
    </button>
  );
};

export default ButtonApp;
