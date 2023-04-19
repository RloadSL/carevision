import React from "react";
import TextApp from "../TextApp";
import style from "./video-block.module.scss";

interface VideoBlockProps {}

const VideoBlock = ({}: VideoBlockProps) => {
  return (
    <div className={style.videoBlock}>
      <div className={style.videoBlock_content}>
        <h2>
          <TextApp labelID="videoBlock.title" />
        </h2>
        <video controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoBlock;
