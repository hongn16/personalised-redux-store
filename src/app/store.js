// Import configureStore from redux toolkit.
import { configureStore } from '@reduxjs/toolkit';

// Import slice reducers.
import currencyFilterReducer from '../features/currencyFilter/currencyFilterSlice';
import searchTermReducer from '../features/searchTerm/searchTermSlice';
import inventoryReducer from '../features/inventory/inventorySlice';
import cartReducer from '../features/cart/cartSlice';

// Export store.
export default configureStore({
    reducer: {
        currencyFilter: currencyFilterReducer,
        searchTerm: searchTermReducer,
        inventory: inventoryReducer,
        cart: cartReducer,
    },
});