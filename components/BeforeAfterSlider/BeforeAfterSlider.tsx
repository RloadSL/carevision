import React from "react";
import style from "./before-after-slider.module.scss";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


interface BeforeAfterSliderProps {
  firstImage:any
  secondImage:any
}

const BeforeAfterSlider = ({firstImage,secondImage}: BeforeAfterSliderProps) => {

  return (
    <div>
      <ReactBeforeSliderComponent firstImage={firstImage} secondImage={secondImage} />
    </div>
  );
};

export default BeforeAfterSlider;
