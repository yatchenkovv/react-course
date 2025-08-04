import { createContext } from "react";

export const UserContext = createContext({
  userName: undefined,
  userId: "a304959a-76c0-4b34-954a-b38dbf310360", 
  login: () => {},
  logout: () => {},
});