import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { Link } from "../link/Link";

export const RestaurantTabContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return <Link to={restaurantId}>{restaurant.name}</Link>;
};
