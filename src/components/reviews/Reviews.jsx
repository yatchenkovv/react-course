import { ReviewItem } from "./ReviewItem";

export const Reviews = ({ reviewsIds }) => {
  return (
    <ul type="none">
      {reviewsIds.map((id) => (
        <li key={id}>
          <ReviewItem id={id} />
        </li>
      ))}
    </ul>
  );
};
