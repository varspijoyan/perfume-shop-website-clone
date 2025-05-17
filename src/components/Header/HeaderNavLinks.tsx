import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import { Link, useLocation } from "react-router-dom";

enum NavLink {
  HOME = "HOME",
  SHOP = "SHOP",
  CATEGORY = "CATEGORY",
  FAQ = "FAQ",
  BLOG = "BLOG",
  ABOUT = "ABOUT",
  CONTACT = "CONTACT",
}

const linkPaths: Record<NavLink, string> = {
  [NavLink.HOME]: "/",
  [NavLink.SHOP]: "/shop",
  [NavLink.CATEGORY]: "/category",
  [NavLink.FAQ]: "/faq",
  [NavLink.BLOG]: "/blog",
  [NavLink.ABOUT]: "/about",
  [NavLink.CONTACT]: "/contact",
};

const HeaderNavLinks: React.FC = () => {
  const navLinks = Object.values(NavLink);
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState<NavLink>(NavLink.HOME);

  // Highlight current link based on path
  useEffect(() => {
    const foundLink = Object.entries(linkPaths).find(
      ([_, path]) => path === location.pathname
    );
    if (foundLink) {
      setSelectedLink(foundLink[0] as NavLink);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return (
    <nav className={styles.navLinks}>
      <ul className={styles.ulLinks}>
        {navLinks.map((link) => (
          <li key={link}>
            <Link
              to={linkPaths[link]}
              className={selectedLink === link ? styles.liActive : ""}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavLinks;
