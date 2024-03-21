import { createAction, createReducer } from "@reduxjs/toolkit";

// Khai báo dùng chung
const initialState = {
    count: 0
}

// Khai báo các action của reducer
const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')
const incrementByAmount = createAction('INCREMENT_BY_AMOUNT')

// Khai báo reducer
const counterReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(increment, (state) => {
                state.count += 1
            })
            .addCase(decrement, (state) => {
                state.count -= 1
            })
            .addCase(incrementByAmount, (state, action) => {
                state.count += action.payload
            })
    }
)

export { increment, decrement, incrementByAmount, counterReducer }
