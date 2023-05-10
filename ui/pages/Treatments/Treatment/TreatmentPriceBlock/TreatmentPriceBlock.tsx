import React, { useEffect, useState } from "react";
import style from "./treatment-price-block.module.scss";
import Image from "next/image";
import smilingBoy from "../../../../../public/img/augenlasern.jpg";
import TextApp from "@/components/TextApp";
import ButtonApp from "@/components/ButtonApp";

interface TreatmentPriceBlockProps {
  textData?: string;
}

const TreatmentPriceBlock = ({ textData }: TreatmentPriceBlockProps) => {

  return (
    <div className={style.treatmentPriceBlock}>
      <div className={style.treatmentPriceBlock_price}>
        <div className={style.content}>
          <div className={style.content_image}>
            <Image src={smilingBoy} alt="Boy pointing to the the tratment price" />
          </div>
          <div className={style.content_text}>
            <h2>
              <TextApp labelID="priceBlock.title" textData={textData} />
            </h2>
            <p>
              <TextApp labelID="priceBlock.description" textData={textData} />
            </p>
            <ButtonApp
              labelID="learnMore.button.label"
              onClick={() => console.log("hola")}
              icon={""}
              iconAlign="right"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default TreatmentPriceBlock;
