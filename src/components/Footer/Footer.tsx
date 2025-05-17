import React from "react";
import logo from "../../assets/logo2x.png";
import styles from "../../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <img src={logo} alt="logo" />
        <div className={styles.links}>
          <ul>
            <li>
              <a href="#">Perfumes</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Stores</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
