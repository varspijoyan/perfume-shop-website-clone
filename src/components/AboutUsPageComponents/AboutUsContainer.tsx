import React from "react";
import { IStyle } from "../../types";
import image1 from "../../assets/img8.jpg";
import Services from "./Services";

interface IAboutUsContainerProps {
  styles: IStyle;
}

const AboutUsContainer: React.FC<IAboutUsContainerProps> = ({ styles }) => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.aboutTextContainer}>
        <h1 className={styles.title}>
          About <span className={styles.highlight}>us</span>
        </h1>
        <p className={styles.subtitle}>WHO ARE WE?</p>
        <p className={styles.description1}>
          Perfume is a mixture of fragrant essential oils or aroma compounds,
          fixatives and solvents, usually in liquid form, used to give the human
          body, animals, food, objects, and living-spaces an agreeable scent.
          The 1939 Nobel Laureate for Chemistry, Leopold Ružička stated in 1945
          that "right from the earliest days of scientific chemistry up to the
          present time perfumes have substantially contributed to the
          development of organic chemistry as regards methods, systematic
          classification, and theory."
        </p>
        <p className={styles.description2}>
          Ancient texts and archaeological excavations show the use of perfumes
          in some of the earliest human civilizations. Modern perfumery began in
          the late 19th century with the commercial synthesis of aroma compounds
          such as vanillin or coumarin, which allowed for the composition of
          perfumes with smells previously unattainable solely from natural
          aromatics.
        </p>
        <div className={styles.serviceContent}>
          <Services styles={styles}/>
        </div>
      </div>
      <div className={styles.aboutImageContainer}>
        <img src={image1} alt="about us image" />
      </div>
    </div>
  );
};

export default AboutUsContainer;
