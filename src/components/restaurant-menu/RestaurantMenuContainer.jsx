import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { RestaurantMenu } from "./RestaurantMenu.jsx";

export const RestaurantMenuContainer = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return restaurant && <RestaurantMenu restaurant={restaurant} />;
};
