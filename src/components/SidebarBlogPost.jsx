import React from 'react';
import BlogPostLabel from './BlogPostLabel';
import BlogPostMetaLabel from './BlogPostMetaLabel';

import "../styles/sidebarblogpost.scss"

export default function SidebarBlogPost({title, image, date}) {
 
    return (
      <div className="side-bar-post py-2">
          <div className="d-inline-flex">
            <div className="article-cover">
                <img className="img-fluid" src={ image } />
            </div>
            <div className="label-set">
              <BlogPostMetaLabel text={ date } />
              <BlogPostLabel text={ title } />
            </div>
          </div>
  
   
      </div>
    )
}