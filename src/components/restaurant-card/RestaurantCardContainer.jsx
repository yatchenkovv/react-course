import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { RestaurantCard } from "./RestaurantCard";
import { useRequest } from "../../redux/hooks/use-request";
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id";
export const RestaurantCardContainer = ({ id }) => {
  const selectedRestaurant = useSelector((state) =>
    selectRestaurantById(state, id)
  );
  return <RestaurantCard restaurant={selectedRestaurant} />;
};
