import React from 'react';
 
export default function BlogPostLabel({text, link}) {
 
    return (
        <div className="post-label post-label-slanted">
            <a href={ link }><h3>{ text }</h3></a>
        </div>
    );
}