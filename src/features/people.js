import { createSlice } from "@reduxjs/toolkit";
import {personData} from "../FakeData"


export const peopleSlice = createSlice({
     name:"people",
     initialState: {value:personData},
     reducers: {
        addPerson: (state, action) => {
            state.value.push(action.payload);
        },
        deletePerson: (state, action) => {
            state.value = state.value.filter((person) => person.id !== action.payload.id);
        },
        updateUsername: (state, action) => {
             state.value.map((person) => {
                if (person.id === action.payload.id) {
                    person.username= action.payload.username;
                }
             })
        }
     },
});


export const {addPerson, deletePerson, updateUsername}= peopleSlice.actions;
export default peopleSlice.reducer