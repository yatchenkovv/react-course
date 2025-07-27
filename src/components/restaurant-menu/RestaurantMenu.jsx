import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Menu } from "../menu/Menu";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";

export const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  if (!restaurantId) {
    return null;
  }

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Menu menuIds={restaurant.menu} showCounter={false} />;
};
