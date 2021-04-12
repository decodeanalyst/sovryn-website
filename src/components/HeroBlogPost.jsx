import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LabeledFrame from '../components/LabeledFrame'
import "../styles/blogpost.scss"

export default function HeroBlogPost({title, imgURL}) {
 
    return (
      <>
        <div className="hero pb-5">
          <div className="article-cover">
                <img className="img-fluid" src={ imgURL } />
              </div>
            <div className="hero-label hero-label-slanted">
              <h3>{ title }</h3>
            </div>
      
        </div>
      </>
    )
}

HeroBlogPost.propTypes = {
    "data": PropTypes.object.isRequired
};