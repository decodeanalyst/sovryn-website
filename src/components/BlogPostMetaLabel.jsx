import React from 'react';

export default function BlogPostMetaLabel({text}) {
 
    return (
        <div className="post-meta-label post-meta-label-slanted">
            <span>{ text }</span>
        </div>
    );
}
