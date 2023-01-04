import { useState } from "react";
import { useTheme } from "next-themes";
import NavItem from "./NavItem";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
const MENU_LIST = [
  { text: "Posts", href: "/posts" },
  { text: "Tags", href: "/tags" },
  { text: "About", href: "/about" },
  { text: "RSS", href: "/rss.xml" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const { theme, setTheme } = useTheme();

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
          <h1 className="logo">Davy Tao</h1>
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
          <div>
            <button
              className={`${styles.theme_toggle}`}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            ></button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
