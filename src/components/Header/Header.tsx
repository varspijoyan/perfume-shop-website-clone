import React from "react";
import logo from "../../assets/logo2x.png";
import styles from "../../styles/Header.module.css";
import Cart from "./Cart";
import HeaderNavLinks from "./HeaderNavLinks";
import WishList from "./WishList";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="logo image" />
        <HeaderNavLinks />
        <div className={styles.wishListAndCartContent}>
          <WishList />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
