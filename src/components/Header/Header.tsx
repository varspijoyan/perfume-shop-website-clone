import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo2x.png";
import styles from "../../styles/Header.module.css";
import HeaderNavLinks from "./HeaderNavLinks";

const Header: React.FC = () => {
  const navigateTo = useNavigate();
  return (
    <header>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src={logo}
          alt="logo image"
          onClick={() => navigateTo("/")}
        />
        <HeaderNavLinks />
      </div>
    </header>
  );
};

export default Header;
