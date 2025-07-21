import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

export const useTheme = () => useContext(ThemeContext);