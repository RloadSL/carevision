import React from "react";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

interface BeforeAfterSliderProps {
  firstImage:any
  secondImage:any
}

/** Sliding component to show two images, before and after the medical intervention
 * @returns
 */

const BeforeAfterSlider = ({firstImage,secondImage}: BeforeAfterSliderProps) => {

  return (
    <div>
      <ReactBeforeSliderComponent firstImage={firstImage} secondImage={secondImage} />
    </div>
  );
};

export default BeforeAfterSlider;
