import { Tabs } from "../tabs/Tabs";
import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice";
export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  return (
    <>
      <Tabs>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer key={id} restaurantId={id} />
        ))}
      </Tabs>
    </>
  );
};
