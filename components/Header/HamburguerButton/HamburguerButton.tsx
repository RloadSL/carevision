import React, { useState } from "react";
import "./hamburguer-button.module.scss";
import style from "./hamburguer-button.module.scss";

/**
 * Button component for the mobile menu
 * @returns 
 */

const HamburguerButton = ({ onClick }: { onClick: Function }) => {
  const [isActive, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive(!isActive);
    onClick();
  };

  return (
    <div className={style.hamburguerButton}>
      <button aria-hidden={true} onClick={handleClick} className={isActive ? style.open : ""}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default HamburguerButton;
