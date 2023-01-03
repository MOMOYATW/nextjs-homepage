import Link from "next/link";
import React from "react";
import styles from "../styles/NavItem.module.css";

const NavItem = ({
  href,
  text,
  active,
}: {
  href: string;
  text: string;
  active: boolean;
}) => {
  return (
    <Link
      href={href}
      className={styles.nav__link + ` ${active ? styles.nav__link_active : ""}`}
    >
      {text}
    </Link>
  );
};

export default NavItem;
