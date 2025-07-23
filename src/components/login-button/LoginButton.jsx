import { useUser } from "../user-context/use-user";
import { Button } from "../Button/Button";
import style from "./Login-button.module.css";

export const LoginButton = () => {
  const { userName, login, logout } = useUser();
  return (
    <div className={style.wrapper}>
      {userName && <span>{userName}</span>}
      <Button
        title={userName ? "Logout" : "Login"}
        onClickHandle={userName ? logout : login}
      />
    </div>
  );
};
