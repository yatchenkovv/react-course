import { useCounter } from "../counter/use-counter";
import { Counter } from "../counter/Counter";

export const DishCounter = () => {
  const { value, increment, decrement } = useCounter({ min: 0, max: 20 });

  return (
    <Counter
      value={value}
      onClickDecrement={decrement}
      onClickIncrement={increment}
    />
  );
};
