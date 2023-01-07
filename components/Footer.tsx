import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.copyright}>
        <span>
          © 2022-{new Date().getFullYear()} Davy Tao. All rights reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
