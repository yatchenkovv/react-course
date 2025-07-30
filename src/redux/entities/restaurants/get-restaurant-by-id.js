import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurantById = createAsyncThunk("restaurants/getRestaurantById",
    async (id, { getState, dispatch, rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/restaurant/${id}`);
        const result = await response.json();

        if (!result.length) {
            return rejectWithValue("Нет данных по ресторану");
        }

        return result;
    },
)