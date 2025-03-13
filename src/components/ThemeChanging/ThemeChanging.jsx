import IconSun from "@components/Icons/IconSun/IconSun";
import styles from "./themeChanging.module.scss";
import { useState } from "react";
import IconMoon from "@components/Icons/IconMoon/IconMoon";

export default function ThemeChanging() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const changeTheme = () => {
    document.body.setAttribute("data-theme",
      !isLightTheme ? "light" : "dark"
    );
    setIsLightTheme(prev => !prev);
  }

  return (
    <div class={styles.top}>
      <button class={styles.btnTheme} onClick={changeTheme}>
        {isLightTheme ? <IconSun/> : <IconMoon/>}
      </button>
    </div>
  )
}