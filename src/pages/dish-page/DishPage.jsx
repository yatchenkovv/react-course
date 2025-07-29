import { useParams } from "react-router";
import { Cart } from "../../components/cart/Cart";
import { MenuItem } from "../../components/menu/MenuItem";
import { useUser } from "../../components/user-context/use-user";
export const DishPage = () => {
  const { dishId } = useParams();
  const { userName } = useUser();

  if (!dishId) {
    return null;
  }

  return (
    <>
      {userName && <Cart />}
      <MenuItem id={dishId} showCounter={true} />
    </>
  );
};
