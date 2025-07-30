import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { getUsers } from "./get-users";
import { IDLE } from "../../../constants/request-status";

const entityAdapter = createEntityAdapter({ requestStatus: IDLE });

export const usersSlice = createSlice({
    name: "users",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectUserById: (state, id) => state.entities[id],
        selectUsersIds: (state) => state.ids,
        selectUsers: (state) => state.entities,
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => 
        builder
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            }),
});

const selectUsersSlice = (state) => state[usersSlice.name];

export const {
    selectById: selectUserById,
    selectAll: selectUsers,
    selectIds: selectUsersIds,
} = entityAdapter.getSelectors(selectUsersSlice);

export const {
    selectRequestStatus
} = usersSlice.selectors;