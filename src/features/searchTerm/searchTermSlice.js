import { createSlice } from '@reduxjs/toolkit';

// Slice
export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => {
            const newTerm = action.payload;
            return state = newTerm;
        },
        clearSearchTerm: () => {
            return '';
        }
    }
});

// Selector
export const selectSearchTerm = (state) => state.searchTerm;

// Exports
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;

