import React, { useState } from "react";
import style from "./visual-diseases.module.scss";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import TextApp from "../TextApp";
import visualDiseases from "../../data/visualDiseases.json";
import ButtonApp from "../ButtonApp";
import arrow from "../../assets/img/arrow_icon.svg";


const VisualDiseases = () => {
  const [active, setActive] = useState({
    buttonLabel: "",
    img: "kurzsichtig",
    img2: "kurzsichtig_2",
    text: "option1"
  });
  const [isActive, setisActive] = useState("");

  const DISEASE = {
    imageUrl: `/${active.img}.jpg`
  };
  const DISEASE_BLURRY = {
    imageUrl: `/${active.img2}.jpg`
  };

  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <TextApp labelID="visualDiseases.title" />
      </h2>
      <div className={style.content_top}>
        {visualDiseases.map((type: any, index: number) => (
          <button
            key={index}
            className={isActive === type.img ? style.active : ""}
            onClick={() => {
              setActive(type);
              setisActive(type.img);
            }}
          >
            {type.buttonLabel}
          </button>
        ))}
      </div>
      <div className={`${style.content_bottom} ${active.img}`}>
        <ReactBeforeSliderComponent firstImage={DISEASE} secondImage={DISEASE_BLURRY} />
        <div className={style.content_bottom_text}>
          <ul>
            <TextApp labelID={`visualDiseases.${active.text}.text.list`} />
            <ButtonApp
                      labelID="learnMore.button.label"
                      onClick={() => console.log("hola")}
                      icon={arrow}
                      iconAlign="right"
                    />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisualDiseases;
