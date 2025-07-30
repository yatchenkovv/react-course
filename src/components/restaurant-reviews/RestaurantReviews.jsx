import { Reviews } from "../reviews/Reviews.jsx";
import { ReviewForm } from "../review-form/ReviewForm.jsx";
import styles from "./RestaurantReviews.module.css";
import { getUsers } from "../../redux/entities/users/get-users.js";
import { useRequest } from "../../redux/hooks/use-request.js";
import { PENDING, IDLE } from "../../constants/request-status.js";

export const RestaurantReviews = ({ restaurant, userName }) => {
  const requestStatus = useRequest(getUsers);
  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <h3>Загрузка данных по пользователям...</h3>;
  }
  return (
    <div className={styles.content}>
      <Reviews reviewsIds={restaurant.reviews} />
      {userName && <ReviewForm />}
    </div>
  );
};
