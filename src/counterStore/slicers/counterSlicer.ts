import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // Aqui vai os reducers (funções) que vão manipular os estados
        increment: (state) => {
            state.value += 1;
        },
        decremenet: (state) => {
            state.value -= 1;
        },
    },
});

// Criação das actions para cada caso de reducer function

export const { increment, decremenet } = counterSlice.actions;

export default counterSlice.reducer;
