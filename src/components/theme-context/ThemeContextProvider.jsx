import { useState } from "react";
import { ThemeContext } from "./theme-context";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
