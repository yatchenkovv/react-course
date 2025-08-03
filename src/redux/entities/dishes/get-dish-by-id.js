import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishById = createAsyncThunk("dish/getDishById",
    async (id, { getState, dispatch, rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/dish/${id}`);
        const result = await response.json();

        if (!result.length) {
            return rejectWithValue("Нет данных по блюду");
        }

        return result;
    },
)