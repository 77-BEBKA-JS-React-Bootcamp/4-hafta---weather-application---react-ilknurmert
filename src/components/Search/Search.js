import React from 'react'
import './Search.scss'

export default function Search( {onChange, onKeyDown, onBlur} ) {


return (
    <div class = "search-wrapper">
        <label htmlFor="search">
            <input 
                id="search"
                type="text"
                name="search"
                placeholder="Enter a city"
                onChange={onChange}
                onKeyDown={onKeyDown}
                 onBlur={onBlur}
                 />
        </label>
    </div>
    )
}
