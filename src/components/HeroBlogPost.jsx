import React, { useState } from 'react';
import PropTypes from 'prop-types';

import "../styles/blogpost.scss"

export default function HeroBlogPost({article}) {
 
  const imgURL = article.frontmatter.image ? article.frontmatter.image.publicURL : "https://via.placeholder.com/900x427";

    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <div className="hero-label hero-label-slanted">
              <h3>{ article.frontmatter.title }</h3>
             </div>
              <div className="pictureArticleCover">
                <img className="img-fluid" src={ imgURL } />
              </div>
          </div>
        </div>
      </>
    )
}

HeroBlogPost.propTypes = {
    "data": PropTypes.object.isRequired
};