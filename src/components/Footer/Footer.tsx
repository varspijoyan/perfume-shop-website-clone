import React from "react";
import logo from "../../assets/logo2x.png";
import styles from "../../styles/Footer.module.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <img src={logo} alt="logo" />
        <div className={styles.links}>
          <ul>
            <li>
              <Link to="/shop">Perfumes</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
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
