import { createSlice } from "@reduxjs/toolkit";
import { FULFILLED, IDLE, PENDING, REJECTED } from "../../../constants/request-status";

export const requestSlice = createSlice({
    name: "request",
    initialState: {},
    selectors: {
        selectRequestStatus: (state, requestId) => state[requestId] || IDLE,
        selectIsLoading: (state, requestId) => state[requestId] === PENDING,
    },
    extraReducers: (builder) => 
        builder.addMatcher(
        ({ type }) => type.endsWith(PENDING),
        (state, { meta }) => {
            state[meta.requestId] = PENDING
        }
    ).addMatcher(
        ({ type }) => type.endsWith(REJECTED),
        (state, { meta }) => {
            state[meta.requestId] = REJECTED
        }
    ).addMatcher(
        ({ type }) => type.endsWith(FULFILLED),
        (state, { meta }) => {
            state[meta.requestId] = FULFILLED
        }
    )
});

export const { selectIsLoading, selectRequestStatus } = requestSlice.selectors;