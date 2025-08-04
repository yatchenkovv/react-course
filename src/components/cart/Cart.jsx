import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.css";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (items.length === 0) {
    return <span className={styles.emptyCart}>В корзине пусто...</span>;
  }

  return (
    <div className={styles.cart}>
      <h3>Корзина</h3>
      <ul>
        {items.map(({ id, amount }) => (
          <li key={id}>
            <CartItem dishId={id} amount={amount} />
          </li>
        ))}
      </ul>
    </div>
  );
};
