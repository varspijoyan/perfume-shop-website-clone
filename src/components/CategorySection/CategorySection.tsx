import React from "react";
import image2 from "../../assets/img2.jpg";
import image1 from "../../assets/img3.jpg";
import styles from "../../styles/CategorySection.module.css";

const CategorySection: React.FC = () => {
  return (
    <section className={styles.categorySection}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.highlightTitle}>Categories</h1>
          <h1 className={styles.title}>For Both Genders</h1>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img src={image1} alt="category section image" />
            <div className={styles.imageDescription}>
              <div className={styles.text}>
                <h1 className={styles.imgTitle}>Men</h1>
                <p className={styles.availableItem}>125 items available</p>
              </div>
              <button className={styles.exploreBtn}>EXPLORE</button>
            </div>
          </div>
          <div className={styles.image}>
            <img src={image2} alt="category section image" />
            <div className={styles.imageDescription}>
              <div className={styles.text}>
                <h1 className={styles.imgTitle}>Women</h1>
                <p className={styles.availableItem}>123 items available</p>
              </div>
              <button className={styles.exploreBtn}>EXPLORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
