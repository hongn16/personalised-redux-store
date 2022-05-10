import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { currenciesData } from '../../data.js';

import { selectCurrencyFilter, setCurrency } from './currencyFilterSlice.js';

export const CurrencyFilter = () => {
    const currencyFilter = useSelector(selectCurrencyFilter);
    const dispatch = useDispatch();

    const onClickHandler = (currency) => {
        dispatch(setCurrency(currency));
    };

    return (
        <div id="currency-filters-container">
            <h3>Choose a currency</h3>

            {/* Maps currencies onto buttons */}
            {currenciesData.map(createCurrencyButton)}
        </div>
    );
    
    function createCurrencyButton(currency) {
        return (
            <button
                className={`currency-button ${
                    currencyFilter === currency && 'selected'
                }`}
                key={currency}
                onClick={() => onClickHandler(currency)}
            >
                {currency}
            </button>
        );
    };
};