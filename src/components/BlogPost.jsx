import React from 'react';
import BlogPostLabel from './BlogPostLabel';
import BlogPostMetaLabel from './BlogPostMetaLabel';

import "../styles/blogpost.scss"

export default function BlogPost({title, image, date, category}) {
 
    return (
      <div className="post py-5">
          <div className="d-inline-flex">
            <BlogPostMetaLabel text={ date } />
            <BlogPostMetaLabel text={ category } />
          </div>
  
            <div className="article-cover">
                <img className="img-fluid" src={ image } />
            </div>
            <BlogPostLabel text={ title } />
      </div>
    )
}