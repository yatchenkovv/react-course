import classNames from "classnames";
import styles from "./Button.module.css";

export const Button = ({ title, onClickHandle, theme }) => {
  return (
    <button
      type="button"
      className={classNames({
        [styles.defaultBtn]: theme === "default",
        [styles.highlightBtn]: theme === "highlight",
      })}
      onClick={onClickHandle}
    >
      {title}
    </button>
  );
};
