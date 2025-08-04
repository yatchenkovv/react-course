import style from "./Restaurant-card.module.css";

export const RestaurantCard = ({ restaurant }) => {
  return (
    <div className={style.card}>
      <h1 style={{ color: "green" }}>{restaurant.name}</h1>
      <h2 style={{ color: "red" }}>{restaurant.description}</h2>
      <img className={style.picture} src={restaurant.img} alt="picture" />
    </div>
  );
};
