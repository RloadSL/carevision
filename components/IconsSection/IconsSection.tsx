import React from "react";
import TextApp from "../TextApp";
import style from "./icons-section.module.scss";

interface IconBlock {
  iconText: string;
}

/**
Component to an icon item with text and image
 * @param iconText Text of the block item
 */

const IconBlock = ({ iconText }: IconBlock) => {
  console.log(iconText);
  return (
    <div className={style.itemBlock}>
      <div className={style.itemBlock_content}>
        <div className={style.itemBlock_text}>
          <span>
            <TextApp labelID={iconText} />
          </span>
          <span>lorem</span>
        </div>
      </div>
    </div>
  );
};

interface IconsSectionProps {}

/**
Component to render the list of icons 
 */

const IconsSection = ({}: IconsSectionProps) => {
  return (
    <div className={style.iconsSection}>
      <article className={style.iconsSection_top}>
        <h2 className={style.title}>
          <TextApp labelID="iconsSection.title" />
        </h2>
        <p>
          <TextApp labelID="iconsSection.text" />
        </p>
      </article>
      <div className={style.iconsSection_bottom}>
        <ul>
          <li className={style.option1}>
            <IconBlock iconText={"iconsSection.option1.title"} />
          </li>
          <li className={style.option2}>
            <IconBlock iconText={"iconsSection.option2.title"} />
          </li>
          <li className={style.option3}>
            <IconBlock iconText={"iconsSection.option3.title"} />
          </li>
          <li className={style.option4}>
            <IconBlock iconText={"iconsSection.option4.title"} />
          </li>
          <li className={style.option5}>
            <IconBlock iconText={"iconsSection.option5.title"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IconsSection;
