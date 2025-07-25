import classNames from "classnames";
import styles from "./Button.module.css";
import { useTheme } from "../theme-context/use-theme";

export const Button = ({ title, onClickHandle, disabled }) => {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      className={classNames(styles.button, {
        [styles.dark]: theme === "dark",
        [styles.light]: theme === "light",
      })}
      onClick={onClickHandle}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
