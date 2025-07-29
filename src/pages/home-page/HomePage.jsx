import { Link } from "../../components/link/Link";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <div className={styles.content}>
        <h1>В нашем городе самы лучшие рестораны!</h1>
        <h3>Нажмите на кнопку что бы пререйти на страницу с ресторанами</h3>
        <br />
        <Link to={"restaurants"}>Рестораны</Link>
      </div>
    </>
  );
};
