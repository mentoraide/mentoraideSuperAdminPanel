import { createReducer } from "@reduxjs/toolkit";


const initialState = {
    dummy: [],
};

export const dummyReducer = createReducer(initialState, (builder) => {
    // builder
    // .addCase("DUMMY", (state, action) => {
    //     state.dummy = action.payload;
    // })
});
