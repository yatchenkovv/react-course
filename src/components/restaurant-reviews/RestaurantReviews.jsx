import { Reviews } from "../reviews/Reviews.jsx";
import { ReviewForm } from "../review-form/ReviewForm.jsx";
import styles from "./RestaurantReviews.module.css";

export const RestaurantReviews = ({ restaurant, userName }) => {
  return (
    <div className={styles.content}>
      <Reviews reviewsIds={restaurant.reviews} />
      {userName && <ReviewForm />}
    </div>
  );
};
