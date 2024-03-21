import { createAction, createReducer } from "@reduxjs/toolkit";

// Khai báo dùng chung
const initialState = {
    numbers: [12,41,23]
}

// Khai báo các action của reducer
const addItem = createAction('ADD_ITEM')
const removeItem = createAction('REMOVE_ITEM')

// Khai báo reducer
const numbersReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(addItem, (state, action) => {
                state.numbers.push(action.payload)
            })
            .addCase(removeItem, (state) => {
                state.numbers.pop()
            })

    }
)

export { addItem, removeItem, numbersReducer }
