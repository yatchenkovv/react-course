import { Outlet, useParams } from "react-router";
import { RestaurantCardContainer } from "../../components/restaurant-card/RestaurantCardContainer";
import { Link } from "../../components/link/Link";
import styles from "./RestaurantPage.module.css";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  if (!restaurantId) {
    return null;
  }
  return (
    <>
      <RestaurantCardContainer id={restaurantId} />
      <div className={styles.content}>
        <Link to="menu">Меню</Link>
        <Link to="reviews">Отзывы</Link>
      </div>
      <Outlet />
    </>
  );
};
