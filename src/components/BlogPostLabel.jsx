import React from 'react';
import {breakString} from '../components/BreakString.js';
import '../styles/blogpost.scss';
 
export default function BlogPostLabel({text, link}) {
 
    return (
        <>
            <div className="post-label post-label-slanted" id="div-desktop">
                <a href={ link }><h3>{ breakString(text, 25) }</h3></a>
            </div>
            <div className="post-label post-label-slanted" id="div-mobile">
            <a href={ link }><h3>{ breakString(text, 25) }</h3></a>
            </div>
        </>
    );
}