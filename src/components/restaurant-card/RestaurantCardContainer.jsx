import { RestaurantCard } from "./RestaurantCard";
import { useGetRestaurantByIdQuery } from "../../redux/services/api/api";

export const RestaurantCardContainer = ({ id }) => {
  const {
    data,
    isLoading: isRestaurantLoading,
    isError: isRestaurantError,
  } = useGetRestaurantByIdQuery(id);

  if (isRestaurantLoading) {
    return <h3>Загрузка данных по ресторану...</h3>;
  }

  if (isRestaurantError) {
    return <h3>ОШИБКА загрузки данных по ресторану</h3>;
  }

  if (!data) {
    return null;
  }

  return <RestaurantCard restaurant={data} />;
};
