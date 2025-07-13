import { useCounter } from "./use-counter";

export const Counter = () => {
  const { value, increment, decrement } = useCounter({ min: 0, max: 5 });

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
