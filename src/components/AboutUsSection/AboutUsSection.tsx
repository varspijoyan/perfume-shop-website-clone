import React from "react";
import image from "../../assets/img1.jpg";
import styles from "../../styles/AboutUsSection.module.css";
import { useNavigate } from "react-router-dom";

const AboutUsSection: React.FC = () => {
  const navigateTo = useNavigate();
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.backgroundImage}></div>
          <img src={image} alt="about us section image" />
          <p className={styles.imageText}>About us</p>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Perfume <br />
            <span className={styles.highlightText}>Matters</span>
          </h1>
          <p className={styles.description}>
            Perfume is a mixture of fragrant essential oils or aroma compounds,
            fixatives and solvents, usually in liquid form, used to give the
            human body, animals, food, objects, and living-spaces an agreeable
            scent.
          </p>
          <button className={styles.btn} onClick={() => navigateTo('/about')}>OUR STORY</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
