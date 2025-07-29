import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { Menu } from "../menu/Menu";

export const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return restaurant && <Menu menuIds={restaurant.menu} showCounter={false} />;
};
