import { Tabs } from "../tabs/Tabs";
import { useGetRestaurantsQuery } from "../../redux/services/api/api";
import { Link } from "../link/Link";

export const RestaurantsPage = () => {
  const {
    data,
    isLoading: isRestaurantsLoading,
    isError: isRestaurantsError,
  } = useGetRestaurantsQuery();

  if (isRestaurantsLoading) {
    return <h3>Загрузка ресторанов...</h3>;
  }

  if (isRestaurantsError) {
    return <h3>ОШИБКА загрузки списка ресторанов</h3>;
  }

  if (!data.length) {
    return null;
  }

  return (
    <>
      <Tabs>
        {data.map(({ id, name }) => {
          return (
            <Link key={id} to={id}>
              {name}
            </Link>
          );
        })}
      </Tabs>
    </>
  );
};
