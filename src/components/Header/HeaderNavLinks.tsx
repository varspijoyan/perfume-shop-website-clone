import React, { useState } from "react";
import styles from "../../styles/Header.module.css";

enum NavLink {
  HOME = "HOME",
  SHOP = "SHOP",
  CATEGORY = "CATEGORY",
  FAQ = "FAQ",
  BLOG = "BLOG",
  ABOUT = "ABOUT",
  CONTACT = "CONTACT",
}

const HeaderNavLinks: React.FC = () => {
  const navLinks = Object.values(NavLink);
  const [selectedLink, setSelectedLink] = useState<NavLink>(NavLink.HOME);

  return (
    <nav className={styles.navLinks}>
      <ul className={styles.ulLinks}>
        {navLinks.map((link) => {
          return (
            <li key={link}>
              <a
                href="#"
                className={selectedLink === link ? styles.liActive : ""}
                onClick={() => {
                  setSelectedLink(link);
                }}
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNavLinks;
