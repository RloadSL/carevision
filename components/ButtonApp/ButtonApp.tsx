import Image from "next/image";
import { type } from "os";
import React from "react";
import TextApp from "../TextApp";
import style from "./button-app.module.scss";

interface ButtonAppProps {
  labelID: string;
  onClick: Function;
  icon?: string;
  iconAlign?: "left" | "right";
  buttonType?: "button" | "submit" | "reset";
}

/** Button component for web
 * @param labelID ID for JSON translations
 * @param onClick onClick function
 * @param icon Optional image for the icon of the button
 * @param iconAlign left | right position of the icon with the button label
 * @param buttonType Button type
 * @returns
 */

const ButtonApp = ({
  labelID,
  onClick,
  icon,
  iconAlign = "right",
  buttonType = "button"
}: ButtonAppProps) => {
  return (
    <button
      style={iconAlign !== "right" ? { flexDirection: "row" } : { flexDirection: "row-reverse" }}
      type={buttonType}
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
