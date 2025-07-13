import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { ReviewForm } from "../review-form/ReviewForm";

export const RestaurantCard = ({ restaurant }) => {
  return (
    <div
      style={{
        margin: "0 15px",
      }}
    >
      <h3 style={{ color: "green" }}>{restaurant.name}</h3>

      <h4>Меню</h4>
      <Menu menu={restaurant.menu} />
      <br />
      <h4>Отзывы</h4>
      <Reviews reviews={restaurant.reviews} />
      <br />
      <h4>Форма отзыва</h4>
      <ReviewForm />
    </div>
  );
};
