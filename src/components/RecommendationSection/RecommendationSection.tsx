import React from "react";
import image from "../../assets/img5.png";
import styles from "../../styles/RecommendationSection.module.css";
import { Link, useNavigate } from "react-router-dom";

const RecommendationSection: React.FC = () => {
  const navigateTo = useNavigate();
  return (
    <section className={styles.recommendationSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={image} alt="section image" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Get your own <br />
            special perfume
          </h1>
          <p className={styles.description}>
            Perfume is a mixture of fragrant essential oils or aroma compounds,
            fixatives and solvents, usually in liquid form, used to give the
            human body, animals, food, objects, and living-spaces an agreeable
            scent.
          </p>
          <div className={styles.recommendations}>
            <div>
              <div className={styles.recommendation}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="orange"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z" />
                  </svg>
                  <span>Special Perfume</span>
                </span>
              </div>
              <div className={styles.recommendation}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="orange"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z" />
                  </svg>
                  <span>For Women</span>
                </span>
              </div>
            </div>
            <div>
              <div className={styles.recommendation}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="orange"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z" />
                  </svg>
                  <span>Made from best flowers</span>
                </span>
              </div>
              <div className={styles.recommendation}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="orange"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z" />
                  </svg>
                  <span>High Durability</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.btn} onClick={() => navigateTo('/shop')}>SHOP NOW</button>
            <Link to="/about" className={styles.link}>
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
