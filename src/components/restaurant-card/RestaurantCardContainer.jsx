import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { RestaurantCard } from "./RestaurantCard";
export const RestaurantCardContainer = ({ id }) => {
  const selectedRestaurant = useSelector((state) =>
    selectRestaurantById(state, id)
  );
  return <RestaurantCard restaurant={selectedRestaurant} />;
};
