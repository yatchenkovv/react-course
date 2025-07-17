import { Button } from "../Button/Button";

export const Counter = ({ onClickDecrement, onClickIncrement, value }) => {
  return (
    <div>
      <Button title={"-"} theme={"default"} onClickHandle={onClickDecrement} />
      {value}
      <Button title={"+"} theme={"default"} onClickHandle={onClickIncrement} />
    </div>
  );
};
