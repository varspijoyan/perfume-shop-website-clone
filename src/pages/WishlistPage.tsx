import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/WishlistPage.module.css";

const WishlistPage: React.FC = () => {
  const navigateTo = useNavigate();
  return (
    <div className={styles.wishlistPageContainer}>
      <div className={styles.navigation}>
        <span onClick={() => navigateTo("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="black"
            style={{ cursor: "pointer" }}
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="black"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </span>
        <p>Wishlist</p>

      </div>
    </div>
  );
};

export default WishlistPage;
