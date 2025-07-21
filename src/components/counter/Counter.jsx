import { Button } from "../Button/Button";

export const Counter = ({ onClickDecrement, onClickIncrement, value }) => {
  return (
    <div>
      <Button title={"-"} onClickHandle={onClickDecrement} />
      {value}
      <Button title={"+"} onClickHandle={onClickIncrement} />
    </div>
  );
};
