import { useCounter } from "../counter/use-counter";
import { Counter } from "../counter/Counter";
import { useEffect } from "react";

export const ReviewRatingCounter = ({
  onChangeRatingValue,
  onGetResetFnCounter,
}) => {
  const { value, increment, decrement, reset } = useCounter({ min: 0, max: 5 });

  useEffect(() => {
    onChangeRatingValue(value);
    onGetResetFnCounter(reset);
  }, [value]);

  return (
    <Counter
      value={value}
      onClickDecrement={decrement}
      onClickIncrement={increment}
    />
  );
};
