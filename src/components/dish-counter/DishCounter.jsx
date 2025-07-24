import { useCounter } from "../counter/use-counter";
import { Counter } from "../counter/Counter";

export const DishCounter = ({ dishId }) => {
  const { value, increment, decrement } = useCounter({
    min: 0,
    max: 20,
    dishId,
  });

  return (
    <Counter
      value={value}
      onClickDecrement={decrement}
      onClickIncrement={increment}
    />
  );
};
