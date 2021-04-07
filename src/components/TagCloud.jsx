import React from 'react';
import BlogPostLabel from './BlogPostLabel';
 
export default function TagCloud({tags}) {
 
    return (
        <>
            <div className="tag-cloud row">
                {
                     tags.map((tag, index) => {
    
                            return (
                                <div className="tag-item col-md-4 d-flex" key={ index }>
                                    <BlogPostLabel
                                     text={ tag.name }
                                     link={ tag.link } />
                                </div>
                            )
                        })
                }
            </div>
        </>
    );
}
