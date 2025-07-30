import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishesByRestaurantId = createAsyncThunk("dishes/getDishesById",
    async (id, { getState, dispatch, rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${id}`);
        const result = await response.json();

        if (!result.length) {
            return rejectWithValue("Нет данных по меню ресторана");
        }

        return result;
    },
)