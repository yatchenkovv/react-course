import { useParams } from "react-router";
import { Cart } from "../../components/cart/Cart";
import { MenuItem } from "../../components/menu/MenuItem";
import { useUser } from "../../components/user-context/use-user";
import { useRequest } from "../../redux/hooks/use-request";
import { getDishById } from "../../redux/entities/dishes/get-dish-by-id";
import { IDLE, PENDING } from "../../constants/request-status";

export const DishPage = () => {
  const { dishId } = useParams();
  const { userName } = useUser();

  const requestStatus = useRequest(getDishById, dishId);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <h3>Загрузка описания по блюду...</h3>;
  }

  return (
    <>
      {userName && <Cart />}
      <MenuItem id={dishId} showCounter={true} />
    </>
  );
};
