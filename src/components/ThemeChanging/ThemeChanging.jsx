import IconSun from "@components/Icons/IconSun/IconSun";
import styles from "./themeChanging.module.scss";
import { useEffect, useState } from "react";
import IconMoon from "@components/Icons/IconMoon/IconMoon";

export default function ThemeChanging() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.setAttribute("data-theme", "dark");
        setIsLightTheme(false);
    }
  }, [])

  useEffect(() => {
    const theme = isLightTheme ? "light" : "dark";
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [isLightTheme])

  const changeTheme = () => {
    setIsLightTheme(prev => !prev);
    document.body.setAttribute("data-theme",
      isLightTheme ? "light" : "dark"
    );
  }

  return (
    <div className={styles.top}>
      <button className={styles.btnTheme} onClick={changeTheme}>
        {isLightTheme ? <IconSun/> : <IconMoon/>}
      </button>
    </div>
  )
}