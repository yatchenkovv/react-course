import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { getRestaurants } from "./get-restaurants";
import { IDLE } from "../../../constants/request-status";

const entityAdapter = createEntityAdapter({ requestStatus: IDLE });

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsIds: (state) => state.ids,
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => 
        builder
            .addCase(getRestaurants.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            }),
});

const selectRestaurantsSlice = (state) => state[restaurantsSlice.name];

export const {
    selectById: selectRestaurantById,
    selectIds: selectRestaurantsIds
} = entityAdapter.getSelectors(selectRestaurantsSlice);

export const {
    selectRequestStatus,
} = restaurantsSlice.selectors;