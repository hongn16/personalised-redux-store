import { createSlice } from '@reduxjs/toolkit';

// Slice
export const currencyFilterSlice = createSlice({
    name: 'currencyFilter',
    initialState: 'GBP',
    reducers: {
        setCurrency: (state, action) => {
            return state = action.payload;
        }
    }
});

// Selector
export const selectCurrencyFilter = (state) => state.currencyFilter;

// Export
export const { setCurrency } = currencyFilterSlice.actions;
export default currencyFilterSlice.reducer;

