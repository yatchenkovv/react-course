import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { getDishesByRestaurantId } from "./get-dishes-by-restaurant-id";
import { IDLE } from "../../../constants/request-status";

const entityAdapter = createEntityAdapter({ requestStatus: IDLE });

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectDishById: (state, id) => state.entities[id],
        selectRequestStatus: (state) => state.requestStatus,
        selectDishesByRestaurantId: (state) => state.entities,
    },
    extraReducers: (builder) => 
        builder
            .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            }),
});

const selectDishesSlice = (state) => state[dishesSlice.name];

export const {
  selectById: selectDishById,
  selectAll: selectDishesByRestaurantId,
} = entityAdapter.getSelectors(selectDishesSlice);

export const {
    selectRequestStatus,
} = dishesSlice.selectors;