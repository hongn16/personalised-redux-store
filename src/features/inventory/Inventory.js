import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { calculatePrice, getCurrencySymbol } from '../../utilities/utilities.js';

import { selectCurrencyFilter } from '../currencyFilter/currencyFilterSlice.js';
import { selectInventory, loadData } from './inventorySlice';
import { addItem } from '../cart/cartSlice.js';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

export const Inventory = () => {
    const inventory = useSelector(selectInventory);
    const currencyFilter = useSelector(selectCurrencyFilter);
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onMount = () => {
        dispatch(loadData());
    };

    useEffect(onMount, [dispatch]);

    const onClickHandler = (inventoryItem) => {
        dispatch(addItem(inventoryItem));
    };
 
    if (inventory.length === 0) {
        return <p>Sorry, no products are currently available... </p>;
    };

    if (searchTerm.length > 0) {
        return <ul id="inventory-container">{getFilteredItems(inventory, searchTerm).map(createInventoryItem)}</ul>;
    };

    return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>;

    function createInventoryItem(inventoryItem) {
        const { price, name, img } = inventoryItem;

        const displayPrice = calculatePrice(price, currencyFilter);
        
        return (
            <li
                key={name}
                className="item"
            >
                {/* Inventory image */}
                <img src={img} alt={''} />

                {/* Inventory name */}
                <h3>{name}</h3>

                {/* Inventory currency */}
                <h3 className="price">
                    {getCurrencySymbol(currencyFilter)}
                    {displayPrice.toFixed(2)} {currencyFilter}
                </h3>

                {/* Add to Cart button */}
                <button
                    onClick={() => onClickHandler(inventoryItem)}
                    className="add-to-cart-button"
                >
                    Add to Cart
                </button>
            </li>
        );
    };

    // Function to filter searches.
    function getFilteredItems(items, searchTerm) {
        return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
    };
};