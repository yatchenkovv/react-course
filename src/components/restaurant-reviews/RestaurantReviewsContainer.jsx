import { useParams } from "react-router";
import { useUser } from "../user-context/use-user.js";
import { ReviewForm } from "../review-form/ReviewForm.jsx";
import { Reviews } from "../reviews/Reviews.jsx";
import {
  useAddReviewMutation,
  useEditReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../../redux/services/api/api.js";
import { useState } from "react";

export const RestaurantReviewsContainer = () => {
  const [editableReview, setEditableReview] = useState(null);
  const { restaurantId } = useParams();
  const { userName, userId } = useUser();
  const responseUsers = useGetUsersQuery();
  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();
  const [editReview] = useEditReviewMutation();
  const responseReviews = useGetReviewsByRestaurantIdQuery(restaurantId);
  const hadleAddReview = (form) => {
    addReview({
      restaurantId,
      review: {
        ...form,
        userId,
      },
    });
  };
  const handleEditableReview = (form) => {
    const { reviewId, text } = form;
    editReview({
      reviewId,
      review: {
        text,
      },
    });
  };

  const edit = (id) => {
    const review = responseReviews.data.find((review) => review.id === id);
    setEditableReview(review);
  };

  if (responseUsers.isLoading || responseReviews.isLoading) {
    return <h3>Загрузка отзывов...</h3>;
  }

  if (!responseReviews.data || !responseUsers.data) {
    return null;
  }

  return (
    <div>
      <Reviews reviews={responseReviews.data} onEditHandle={edit} />
      {userName && (
        <ReviewForm
          editableReview={editableReview}
          onSubmit={hadleAddReview}
          onEditable={handleEditableReview}
          disabledSubmit={isAddReviewLoading}
        />
      )}
    </div>
  );
};
