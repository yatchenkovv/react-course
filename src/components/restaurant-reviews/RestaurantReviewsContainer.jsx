import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { useUser } from "../user-context/use-user.js";
import { RestaurantReviews } from "./RestaurantReviews.jsx";

export const RestaurantReviewsContainer = () => {
  const { restaurantId } = useParams();
  const { userName } = useUser();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    restaurant && (
      <RestaurantReviews userName={userName} restaurant={restaurant} />
    )
  );
};
