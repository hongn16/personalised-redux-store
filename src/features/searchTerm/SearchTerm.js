import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectSearchTerm, setSearchTerm, clearSearchTerm } from './searchTermSlice.js';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export const SearchTerm = () => {
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    };

    return (
        <div id="search-container">

            {/* Search image icon */}
            <img id="search-icon" alt="" src={searchIconUrl} />

            {/* Search input */}
            <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                placeholder="Search products..."
            />
                {/* Clear search button */}
                {searchTerm.length > 0 && (
                    <button
                        id="search-clear-button"
                        type="button"
                        onClick={onClearSearchTermHandler}
                    >
                        {/* Clear image icon */}
                        <img src={clearIconUrl} alt="" />
                    </button>
                )}
        </div>
    );
};
