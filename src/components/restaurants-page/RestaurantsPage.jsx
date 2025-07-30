import { Tabs } from "../tabs/Tabs";
import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { useRequest } from "../../redux/hooks/use-request";
import { IDLE, PENDING } from "../../constants/request-status";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <h3>Загрузка ресторанов...</h3>;
  }

  if (!restaurantsIds.length) {
    return null;
  }

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
