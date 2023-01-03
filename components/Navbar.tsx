import React, { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
const MENU_LIST = [
  { text: "Posts", href: "/" },
  { text: "Tags", href: "/" },
  { text: "About", href: "/" },
  { text: "RSS", href: "/" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          href={"/"}
          onClick={() => {
            setActiveIdx(-1);
            setNavActive(false);
          }}
        >
          <h1 className="logo">Davy&apos;s Blog</h1>
        </Link>
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
        <div
          className={`${styles.nav__menu_list} ${
            navActive
              ? styles.nav__menu_list_active
              : styles.nav__menu_list_inactive
          }`}
        >
          {MENU_LIST.map((menu, idx) => {
            return (
              <div
                key={menu.text}
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
              >
                <NavItem {...menu} active={activeIdx === idx} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
