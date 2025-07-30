import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { getReviewsById } from "./get-reviews-by-restaurant-id";
import { IDLE } from "../../../constants/request-status";

const entityAdapter = createEntityAdapter({ requestStatus: IDLE });

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectReviewById: (state, id) => state.entities[id],
        selectReviewsIds: (state) => state.ids,
        selectReviews: (state) => state.entities,
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => 
        builder
            .addCase(getReviewsById.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            }),
});

const selectReviewsSlice = (state) => state[reviewsSlice.name];

export const {
    selectById: selectReviewById,
    selectAll: selectReviews,
    selectIds: selectReviewsIds,
} = entityAdapter.getSelectors(selectReviewsSlice);

export const {
    selectRequestStatus
} = reviewsSlice.selectors;