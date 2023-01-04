import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.copyright}>
        <span>
          © 2022-{new Date().getFullYear()} Davy Tao. All rights reserved.
        </span>
      </div>
    </>
  );
};

export default Footer;
