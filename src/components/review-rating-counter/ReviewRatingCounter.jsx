import { Counter } from "../counter/Counter";

export const ReviewRatingCounter = ({ rating, onDecrement, onIncrement }) => {
  return (
    <Counter
      value={rating}
      onClickDecrement={onDecrement}
      onClickIncrement={onIncrement}
    />
  );
};
