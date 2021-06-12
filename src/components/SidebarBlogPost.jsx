import React from 'react';
import BlogPostLabel from './BlogPostLabel';
import BlogPostMetaLabel from './BlogPostMetaLabel';
import { Link } from 'gatsby';

import "../styles/sidebarblogpost.scss"

export default function SidebarBlogPost({title, image, date, slug}) {
 
  const articleLink = `/blog${slug}`

    return (
      <div className="side-bar-post py-2">
          <div className="d-inline-flex">
            <div className="article-cover">
              <Link to={ articleLink } >
                <img className="img-fluid" src={ image } />
              </Link>
            </div>
            <div className="label-set">
              <BlogPostMetaLabel text={ date } />
              <BlogPostLabel text={ title } link={ articleLink } />
            </div>
          </div>
      </div>
    )
}