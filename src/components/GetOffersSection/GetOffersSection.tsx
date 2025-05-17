import React from "react";
import styles from "../../styles/GetOffersSection.module.css";

const GetOffersSection: React.FC = () => {
  return (
    <section className={styles.getOffersSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Get Latest <span className={styles.highlightTitle}>Offers</span>
        </h1>
        <p className={styles.description}>
          Enter your email to get monthly special offers and great deals!
        </p>
        <div className={styles.inputContainer}>
          <input type="email" placeholder="ENTER EMAIL" />
          <button type="submit">SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default GetOffersSection;
