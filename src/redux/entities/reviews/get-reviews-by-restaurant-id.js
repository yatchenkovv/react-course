import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviewsById = createAsyncThunk("reviews/getReviewsById",
    async (id, { getState, dispatch, rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${id}`);
        const result = await response.json();

        if (!result.length) {
            return rejectWithValue("Нет данных по отзывам");
        }

        return result;
    },
)