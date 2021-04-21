import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../styles/blogpost.scss"
import BlogMenu from './BlogMenu'
import LabeledFrame from '../components/LabeledFrame';

export default function HeroBlogPost({title, imgURL}) {
 
    return (
      <>
        {/* <div className="hero pb-5">
          <div className="article-cover">
                <img className="img-fluid" src={ imgURL } />
              </div>
            <div className="hero-label hero-label-slanted">
              <h3>{ title }</h3>
            </div>
        </div> */}
        <div className="pl-4 pr-3 pb-2">
          <LabeledFrame figtxt={ title } img={ imgURL } banner={ true } pageStyle="blog" />
        </div>
        <BlogMenu />
      </>
    )
}

HeroBlogPost.propTypes = {
    "data": PropTypes.object.isRequired
};