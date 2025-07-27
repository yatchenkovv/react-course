import { Link as RouterLink, NavLink } from "react-router";
import styles from "./link.module.css";
import classNames from "classnames";

export const Link = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.linkBtn, { [styles.linkBtnActive]: isActive })
      }
    >
      {children}
    </NavLink>
  );
};
