import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.css";
import { useUser } from "../user-context/use-user";

export const Cart = () => {
  const items = useSelector(selectCartItems);
  const { userName } = useUser();

  if (items.length === 0) {
    return (
      <>
        {userName && (
          <span className={styles.emptyCart}>В корзине пусто...</span>
        )}
      </>
    );
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
