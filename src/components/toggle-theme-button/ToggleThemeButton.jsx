import { useTheme } from "../theme-context/use-theme";
import styles from "./ToggleThemeButton.module.css";

export const ToggleThemeButton = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button className={styles.btnTheme} type="button" onClick={toggleTheme}>
      {theme === "dark" ? "switch to light" : "switch to dark"}
    </button>
  );
};
