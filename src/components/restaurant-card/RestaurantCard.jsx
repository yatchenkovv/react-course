import style from "./Restaurant-card.module.css";
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id";
import { useRequest } from "../../redux/hooks/use-request";
import { IDLE, PENDING } from "../../constants/request-status";
export const RestaurantCard = ({ restaurant }) => {
  const requestStatus = useRequest(getRestaurantById, restaurant.id);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <h3>Загрузка данных по ресторану...</h3>;
  }

  return (
    <div className={style.card}>
      <h1 style={{ color: "green" }}>{restaurant.name}</h1>
      <h2 style={{ color: "red" }}>{restaurant.description}</h2>
      <img className={style.picture} src={restaurant.img} alt="picture" />
    </div>
  );
};
