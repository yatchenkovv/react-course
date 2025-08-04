import { useReducer } from "react";

const DEFAULT_STATE = {
  name: "",
  text: "",
  rating: 0,
};

const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_REVIEW_ACTION = "SET_REVIEW_ACTION";
const DECREMENT_RATING_ACTION = "SET_DECREMENT_RATING";
const INCREMENT_RATING_ACTION = "SET_INCREMENT_RATING";
const CLEAR_ACTION = "CLEAR_ACTION";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_REVIEW_ACTION:
      return { ...state, text: payload };
    case INCREMENT_RATING_ACTION:
      return { ...state, rating: Math.min(state.rating + 1, 5) };
    case DECREMENT_RATING_ACTION:
      return { ...state, rating: Math.max(state.rating - 1, 0) };
    case CLEAR_ACTION:
      return { ...DEFAULT_STATE };
    default:
      return state;
  }
};


export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_STATE);

    const setName = (name) => {
        dispatch({ type: SET_NAME_ACTION, payload: name });
    }

    const setReview = (reivew) => {
        dispatch({ type: SET_REVIEW_ACTION, payload: reivew });
    }

    const incrementRating = () => {
        dispatch({ type: INCREMENT_RATING_ACTION });
    }
    const decrementRating = () => {
        dispatch({ type: DECREMENT_RATING_ACTION });
    }
    const clear = () => {
        dispatch({ type: CLEAR_ACTION });
    }

    return {
        form,
        setName,
        setReview,
        incrementRating,
        decrementRating,
        clear,
    }
};