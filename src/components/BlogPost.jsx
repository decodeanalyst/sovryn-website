import React from 'react';
import BlogPostLabel from './BlogPostLabel';
import BlogPostMetaLabel from './BlogPostMetaLabel';
import { Link } from 'gatsby';

import "../styles/blogpost.scss"

export default function BlogPost({title, image, date, category, slug}) {
 
  const articleLink = `/blog${slug}`

    return (
      <div className="post">
          <div className="d-inline-flex">
            <BlogPostMetaLabel text={ date } />
            <BlogPostMetaLabel text={ category } />
          </div>
            <div className="article-cover">
              <Link to={ articleLink } >
                <img className="img-fluid blog-feed-img" src={ image } />
              </Link>
            </div>
            <BlogPostLabel text={ title } link={ articleLink } />

      </div>
    )
}