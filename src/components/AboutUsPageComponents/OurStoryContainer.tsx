import React from "react";
import { IStyle } from "../../types";
import image2 from "../../assets/img7.jpg";
import Amount from "./Amount";

interface IOurStoryProps {
  styles: IStyle;
}

const OurStoryContainer: React.FC<IOurStoryProps> = ({ styles }) => {
  return (
    <div className={styles.ourStory}>
      <div className={styles.ourStoryImageContainer}>
        <img src={image2} alt="about us image" />
      </div>
      <div className={styles.ourStoryTextContainer}>
        <h1 className={styles.title}>
          Our <span className={styles.highlight}>History</span>
        </h1>
        <p className={styles.subtitle}>WHAT WE DONE?</p>
        <p className={styles.description}>
          People have been using natural objects, such as tree stumps, rocks and
          moss, as furniture since the beginning of human civilisation.
          Archaeological research shows that from around 30,000 years ago,
          people began constructing and carving their own furniture, using wood,
          stone, and animal bones.
        </p>
        <Amount styles={styles} />
      </div>
    </div>
  );
};

export default OurStoryContainer;
