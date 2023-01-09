import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavItem from "./NavItem";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import ThemeToggle from "./ThemeToggle";
import NavToggle from "./NavToggle";
const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Posts", href: "/posts" },
  { text: "Tags", href: "/tags" },
  { text: "About", href: "/about" },
  { text: "RSS", href: "/rss.xml" },
];

const Navbar = () => {
  const router = useRouter();
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(
    MENU_LIST.findIndex((menu) => menu.href === router.pathname)
  );

  useEffect(() => {
    setActiveIdx(MENU_LIST.findIndex((menu) => menu.href === router.pathname));
  }, [router.pathname]);

  return (
    <header className={`${styles.header} ${styles.glass}`}>
      <nav className={styles.nav}>
        <Link
          href={"/"}
          onClick={() => {
            setActiveIdx(0);
            setNavActive(false);
          }}
        >
          <h1 className="logo">Davy Tao</h1>
        </Link>
        <NavToggle setNavActive={setNavActive} navActive={navActive} />
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
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
