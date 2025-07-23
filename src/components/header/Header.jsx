import { ToggleThemeButton } from "../toggle-theme-button/ToggleThemeButton";
import styles from "./Header.module.css";
import { LoginButton } from "../login-button/LoginButton";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Рестораны</h1>
      <div className={styles.wrapperBtns}>
        <LoginButton />
        <ToggleThemeButton />
      </div>
    </header>
  );
};
