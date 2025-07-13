import { useReducer } from "react";
import { ReviewRatingCounter } from "../review-rating-counter/ReviewRatingCounter";

const DEFAULT_STATE = {
  name: "",
  text: "",
  rating: 0,
};

const SET_NAME_ACTION = "setName";
const SET_REVIEW_ACTION = "setReview";
const SET_RATING_ACTION = "setRating";
const SET_DEFAULT_STATE = "setDefaultState";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...DEFAULT_STATE, name: payload };
    case SET_REVIEW_ACTION:
      return { ...state, text: payload };
    case SET_RATING_ACTION:
      return { ...state, rating: payload };
    case SET_DEFAULT_STATE:
      return { ...DEFAULT_STATE, rating: 0 };

    default:
      return state;
  }
};

let resetCounterFn = () => {};

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_STATE);
  const { name, text } = form;

  return (
    <form
      style={{
        display: "flex",
        gap: "5px",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <label style={{ fontWeight: "bold" }}>Имя</label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            dispatch({ type: SET_NAME_ACTION, payload: event.target.value });
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <label style={{ fontWeight: "bold" }}>Отзыв</label>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            dispatch({ type: SET_REVIEW_ACTION, payload: event.target.value });
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <label style={{ fontWeight: "bold" }}>Рейтинг</label>
        <ReviewRatingCounter
          onGetResetFnCounter={(resetFn) => (resetCounterFn = resetFn)}
          onChangeRatingValue={(payload) =>
            dispatch({ type: SET_RATING_ACTION, payload })
          }
        />
      </div>

      <button
        type="button"
        style={{
          marginTop: "10px",
          width: "150px",
          padding: "10px",
          backgroundColor: "#F44336",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          resetCounterFn();
          dispatch({ type: SET_DEFAULT_STATE, payload: undefined });
        }}
      >
        Очистить
      </button>
      <br />
    </form>
  );
};
