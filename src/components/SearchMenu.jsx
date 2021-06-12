import React from "react";

import "../styles/searchmenu.scss";

export default function SearchMenu({ onSearchChanged }) {
    return (
        <div>
            <div className="d-flex">
            <input type="text"
             className="searchmenu"
             placeholder="Search..."
            onChange={ e => onSearchChanged(e.target.value) } />

            <div className="pr-2"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="search"  width="42" height="42" viewBox="0 0 42.475 42.475">
            <g id="Group_5844" data-name="Group 5844" transform="translate(-1710 -346)">
                <g id="Ellipse_21" data-name="Ellipse 21" transform="translate(1710 346)" fill="none" stroke="#99bcb1" stroke-width="3">
                <ellipse cx="18.319" cy="18.294" rx="18.319" ry="18.294" stroke="none"/>
                <ellipse cx="18.319" cy="18.294" rx="16.819" ry="16.794" fill="none"/>
                </g>
                <line id="Line_68" data-name="Line 68" x1="8.283" y1="8.283" transform="translate(1741.717 377.717)" fill="none" stroke="#99bcb1" stroke-linecap="round" stroke-width="3.5"/>
            </g>
            </svg>
            </div>
        </div>
    )
}