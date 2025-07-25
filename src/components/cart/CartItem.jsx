import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import styles from "./Cart.module.css";

export const CartItem = ({ dishId, amount }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <>
      <strong>
        {dish.name} х {amount}
      </strong>
      &nbsp;:&nbsp;
      <span className={styles.price}>{amount * dish.price} RUB</span>
    </>
  );
};
