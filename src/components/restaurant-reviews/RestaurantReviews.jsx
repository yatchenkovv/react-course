import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { Reviews } from "../reviews/Reviews.jsx";
import { useUser } from "../user-context/use-user.js";
import { ReviewForm } from "../review-form/ReviewForm.jsx";
import styles from "./RestaurantReviews.module.css";

export const RestaurantReviews = () => {
  const { restaurantId } = useParams();
  const { userName } = useUser();

  if (!restaurantId) {
    return null;
  }

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <div className={styles.content}>
      <Reviews reviewsIds={restaurant.reviews} />
      {userName && <ReviewForm />}
    </div>
  );
};
