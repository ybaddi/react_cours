import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        count: 0,
    };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducer : {
    increment: (state) => {
        state.count += 1;
    },
    decrement: (state) => {
        state.count -= 1;
    },
    incrementAvecPas: (state, action) => {
        state.count += action.payload;
    },
    decrementAvecPas: (state, action) => {
    state.count -= action.payload;
    },
},
});

export const { increment, decrement, incrementAvecPas, decrementAvecPas } = counterSlice.
actions;
export default counterSlice.reducer;