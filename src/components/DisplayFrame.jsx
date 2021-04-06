import React from 'react';
import "../styles/displayframe.scss"

export default function DisplayFrame({image}) {
    return (
        <div className="frame img-fluid">
            <img src={image} className="img img-fluid" />
        </div>
    );
}