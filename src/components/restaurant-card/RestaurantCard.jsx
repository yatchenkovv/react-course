import style from "./Restaurant-card.module.css";

export const RestaurantCard = ({ restaurant }) => {
  return (
    <div className={style.card}>
      <h3 style={{ color: "green" }}>{restaurant.name}</h3>
    </div>
  );
};
