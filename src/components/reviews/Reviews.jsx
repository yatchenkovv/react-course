export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li type="none" key={review.id}>
          - <strong>{review.user}</strong>: {review.text}
        </li>
      ))}
    </ul>
  );
};
