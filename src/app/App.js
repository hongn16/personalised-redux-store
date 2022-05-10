import React from 'react';

import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { Inventory } from '../features/inventory/Inventory.js';
import { Cart } from '../features/cart/Cart.js';

export const App = () => {

    return (
        <div>
            <div className='app'>
                <h1>Personalised Store</h1>
            </div>
            <CurrencyFilter />
            <SearchTerm />
            <Inventory />
            <Cart />
        </div>
    );
};
