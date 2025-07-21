import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { ReviewForm } from "../review-form/ReviewForm";
import style from "./Restaurant-card.module.css";
import { useUser } from "../user-context/use-user";
import { Fragment } from "react";

export const RestaurantCard = ({ restaurant }) => {
  const { userName } = useUser();

  return (
    <div className={style.card}>
      <h3 style={{ color: "green" }}>{restaurant.name}</h3>

      <h4>Меню</h4>
      <Menu menu={restaurant.menu} />
      <br />
      <h4>Отзывы</h4>
      <Reviews reviews={restaurant.reviews} />
      <br />
      {userName && (
        <Fragment>
          <h4>Форма отзыва</h4>
          <ReviewForm />
        </Fragment>
      )}
    </div>
  );
};
