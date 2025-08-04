import { ReviewItem } from "./ReviewItem";
import { Button } from "../Button/Button";

export const Reviews = ({ reviews, onEditHandle }) => {
  return (
    <ul type="none">
      {reviews.map(({ id, name, text }) => (
        <li key={id}>
          <ReviewItem name={name} text={text} />
          <Button title={"Edit"} onClickHandle={() => onEditHandle(id)} />
          <br />
        </li>
      ))}
    </ul>
  );
};
