import React from 'react';
import {breakString} from '../components/BreakString.js';
 
export default function BlogPostLabel({text, link}) {
 
    return (
        <div className="post-label post-label-slanted">
            <a href={ link }><h3>{ breakString(text) }</h3></a>
        </div>
    );
}