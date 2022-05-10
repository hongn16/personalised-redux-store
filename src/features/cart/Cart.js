import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { calculateTotal, getCurrencySymbol } from '../../utilities/utilities.js';

import { selectCart, changeItemQuantity } from './cartSlice';
import { selectCurrencyFilter } from '../currencyFilter/currencyFilterSlice';

const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export const Cart = () => {
    const cart = useSelector(selectCart);
    const currencyFilter = useSelector(selectCurrencyFilter);
    const dispatch = useDispatch();

    const onInputChangeHandler = (name, input) => {
        if (input === '') {
            return;
        }
    
        const newQuantity = Number(input);

        const itemToUpdate = cart[name];
        const updatedItem = {name, ...itemToUpdate, quantity: newQuantity};
    
        dispatch(changeItemQuantity(updatedItem));
    };

    const cartElements = Object.keys(cart).map(createCartItem);

    const total = calculateTotal(cart, currencyFilter);

    return (
        <div id="cart-container">

            {/* Cart element */}
            <ul id="cart-items">{cartElements}</ul>

            {/* Cart total */}
            <h3 className="total">
                Total{' '}

                {/* Cart currency */}
                <span className="total-value">
                    {getCurrencySymbol(currencyFilter)}{total} {currencyFilter}
                </span>
            </h3>

            <button className="checkout" type="submit" onClick={() => window.location.reload()}>
                Proceed To Checkout
            </button>
        </div>
    );

    function createCartItem(name) {
        const item = cart[name];

        if (item.quantity === 0) {
            return;
        };

        return (
            <li
                key={name}
            >
                {/* Item's name & price */}
                <p>{name} - {getCurrencySymbol(currencyFilter)}{item.price} {currencyFilter}</p>

                {/* Drop-down list of item's quantity */}
                <select
                    className="item-quantity"
                    value={item.quantity}
                    onChange={(e) => {onInputChangeHandler(name, e.target.value)}}
                >
                    {/* Maps an array of numbers as options */}
                    {[...Array(100).keys()].map((_, index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}

                </select>

                {/* Clear item button */}
                <button
                    id=""
                    type="button"
                    onClick={() => {onInputChangeHandler(name, item.quantity === 0)}}
                >
                    <img src={clearIconUrl} alt="" />
                </button>
            </li>
        );
    };
};