import { createSlice } from '@reduxjs/toolkit';

// Slice
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        addItem: (state, action) => {
            const { name, price } = action.payload;
            const quantity = state[name] ? state[name].quantity + 1 : 1;
            const newItem = { price, quantity };
            return {...state, [name]: newItem};
        },
        changeItemQuantity: (state, action) => {
            const { name, price, quantity } = action.payload;
            const changeItem = { name, price, quantity };
            return {...state, [name]: changeItem}
        },
    }
});

// Selector
export const selectCart = (state) => state.cart;

// Exports
export const { addItem, changeItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;