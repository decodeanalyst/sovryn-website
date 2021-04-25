import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../styles/blogpost.scss"
import BlogMenu from './BlogMenu'
import LabeledFrame from '../components/LabeledFrame';

export default function HeroBlogPost({title, imgURL}) {
 
    return (
      <>
        <div className="pl-3 pr-3 pb-5">
          <LabeledFrame figtxt={ title } img={ imgURL } banner={ true } pageStyle="blog" />
        </div>
        <BlogMenu />
      </>
    )
}

HeroBlogPost.propTypes = {
    "data": PropTypes.object.isRequired
};