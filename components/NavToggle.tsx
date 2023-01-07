import React, { SetStateAction } from "react";
import styles from "../styles/NavToggle.module.css";

const NavToggle = ({
  setNavActive,
  navActive,
}: {
  setNavActive: React.Dispatch<SetStateAction<boolean>>;
  navActive: boolean;
}) => {
  return (
    <div
      onClick={() => setNavActive(!navActive)}
      className={`${styles.nav__menu_bar} ${
        navActive ? styles.nav__menu_bar_active : ""
      }`}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default NavToggle;
