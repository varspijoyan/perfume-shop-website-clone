import React from "react";
import image from "../../assets/p1.png";
import styles from "../../styles/MainSection.module.css";
import { useNavigate } from "react-router-dom";

const MainSection: React.FC = () => {
  const navigateTo = useNavigate();
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Aroma <br />
            <span className={styles.highlightTitle}>Xtra Perfume</span>
          </h1>
          <p className={styles.description}>
            Perfume is a mixture of fragrant essential oils or aroma compounds,
            fixatives and solvents, usually in liquid form, used to give the
            human body, animals, food, objects, and living-spaces and agreeable
            scent.
          </p>
          <div className={styles.addToCartContent}>
            <div className={styles.price}>
              <span>PRICE</span>
              <span>$480</span>
            </div>
            <div className={styles.buttons}>
              <button className={styles.shopCartBtn} onClick={() => navigateTo('/shop')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="white"
                >
                  <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
                </svg>
                <span>SHOP NOW</span>
              </button>
              <button className={styles.exploreBtn} onClick={() => navigateTo('/shop')}>EXPLORE MORE</button>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imgBackground}></div>
          <img src={image} alt="main section image" />
        </div>
      </div>
    </main>
  );
};

export default MainSection;
