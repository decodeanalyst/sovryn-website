import React from 'react';
import "../styles/blogpostlabel.scss";
 
export default function BlogPostLabel({text}) {
 
    return (
        <div className="post-label post-label-slanted">
            <h3>{ text }</h3>
        </div>
    );
}