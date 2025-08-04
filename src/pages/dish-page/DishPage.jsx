import { useParams } from "react-router";
import { Cart } from "../../components/cart/Cart";
import { MenuItem } from "../../components/menu/MenuItem";
import { useUser } from "../../components/user-context/use-user";
import { useGetDishByIdQuery } from "../../redux/services/api/api";

export const DishPage = () => {
  const { dishId } = useParams();
  const { userName } = useUser();
  const {
    data,
    isLoading: isDishLoading,
    isError: isDishError,
  } = useGetDishByIdQuery(dishId);

  if (isDishLoading) {
    return <h3>Загрузка данных по блюду...</h3>;
  }

  if (isDishError) {
    return <h3>ОШИБКА загрузки данных по блюду</h3>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      {userName && <Cart />}
      <MenuItem
        id={dishId}
        showCounter={true}
        name={data.name}
        ingredients={data.ingredients}
        price={data.price}
      />
    </>
  );
};
