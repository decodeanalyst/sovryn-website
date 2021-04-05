import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BlogPostLabel from './BlogPostLabel';
import BlogPostMetaLabel from './BlogPostMetaLabel';

import "../styles/blogpost.scss"

export default function BlogPost({title, image, date, category}) {
 
    return (
      <div className="py-5">
          <div className="d-inline-flex">
            <BlogPostMetaLabel text={ date } />
            <BlogPostMetaLabel text={ category } />
          </div>
  
            <div className="pictureArticleCover">
                <img className="img-fluid" src={ image } />
            </div>
            <BlogPostLabel text={ title } />
      </div>
    )
}

BlogPost.propTypes = {
    "data": PropTypes.object.isRequired
};