// Import inventoryData.
import { inventoryData } from '../../data.js';

import { createSlice } from '@reduxjs/toolkit';

// Slice
export const inventorySlice = createSlice({
    name: 'inventory',
    initialState: [],
    reducers: {
        loadData: () => {
           return inventoryData;
        }
    }
});

// Selector
export const selectInventory = (state) => state.inventory;

// Exports
export const { loadData } = inventorySlice.actions;
export default inventorySlice.reducer;

