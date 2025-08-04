import { useState } from "react";
import { UserContext } from "./user-context";

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState();

  const login = () => {
    setUserName("mock_name");
  };

  const logout = () => {
    setUserName(undefined);
  };

  return (
    <UserContext
      value={{
        userName,
        login,
        logout,
        userId: UserContext._currentValue.userId,
      }}
    >
      {children}
    </UserContext>
  );
};
