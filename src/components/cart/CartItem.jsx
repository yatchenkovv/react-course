import styles from "./Cart.module.css";
import { useGetDishByIdQuery } from "../../redux/services/api/api";

export const CartItem = ({ dishId, amount }) => {
  const { data } = useGetDishByIdQuery(dishId);

  if (!data) {
    return null;
  }

  return (
    <>
      <strong>
        {data.name} х {amount}
      </strong>
      &nbsp;:&nbsp;
      <span className={styles.price}>{amount * data.price} RUB</span>
    </>
  );
};
