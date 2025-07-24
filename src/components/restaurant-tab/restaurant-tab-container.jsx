import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";

export const RestaurantTabContainer = ({ restaurantId, onClick, disabled }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return (
    <Button
      title={restaurant.name}
      onClickHandle={onClick}
      disabled={disabled}
    />
  );
};
