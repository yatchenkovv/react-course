import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice";
import { RestaurantsPage } from "./RestaurantsPage";

export const RestaurantsPageContainer = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  return <RestaurantsPage restaurantsIds={restaurantsIds} />;
};
