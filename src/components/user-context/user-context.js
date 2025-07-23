import { createContext } from "react";

export const UserContext = createContext({
  userName: undefined,
  login: () => {},
  logout: () => {},
});