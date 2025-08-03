import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { useUser } from "../user-context/use-user.js";
import { RestaurantReviews } from "./RestaurantReviews.jsx";
import { useRequest } from "../../redux/hooks/use-request.js";
import { getReviewsById } from "../../redux/entities/reviews/get-reviews-by-restaurant-id.js";
import { IDLE, PENDING } from "../../constants/request-status.js";
import { getUsers } from "../../redux/entities/users/get-users.js";

export const RestaurantReviewsContainer = () => {
  const { restaurantId } = useParams();
  const { userName } = useUser();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const requestUsersStatus = useRequest(getUsers);

  const requestStatus = useRequest(getReviewsById, restaurantId);

  if (
    requestStatus === IDLE ||
    requestStatus === PENDING ||
    requestUsersStatus === IDLE ||
    requestUsersStatus === PENDING
  ) {
    return <h3>Загрузка отзывов...</h3>;
  }

  return (
    restaurant && (
      <RestaurantReviews userName={userName} restaurant={restaurant} />
    )
  );
};
