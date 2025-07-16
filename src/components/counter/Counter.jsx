export const Counter = ({ onClickDecrement, onClickIncrement, value }) => {
  return (
    <div>
      <button type="button" onClick={onClickDecrement}>
        -
      </button>
      <span>{value}</span>
      <button type="button" onClick={onClickIncrement}>
        +
      </button>
    </div>
  );
};
