import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "../styles/ThemeToggle.module.css";
import ToggleDark from "../public/dark.svg";
import ToggleLight from "../public/light.svg";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`${styles.theme_toggle}`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <ToggleLight /> : <ToggleDark />}
    </div>
  );
};

export default ThemeToggle;
