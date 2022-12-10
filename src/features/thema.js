import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = "";

export const themaSlice = createSlice({
        name:"thema",
        initialState:{value: initialStateValue},
        reducers: {
            changeColor: (state, action) => {
                state.value=action.payload;
            },
        },
 });

 export const {changeColor} =themaSlice.actions

export default themaSlice.reducer;