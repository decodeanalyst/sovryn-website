import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LabeledFrame from '../components/LabeledFrame'

export default function HeroBlogPost({article}) {
 
  const imgURL = article.frontmatter.image ? article.frontmatter.image.publicURL : "https://via.placeholder.com/900x427";

    return (
      <>
        <LabeledFrame figtxt={ article.frontmatter.title } img={ imgURL } banner={ true } pageStyle="blog" />
      </>
    )
}

HeroBlogPost.propTypes = {
    "data": PropTypes.object.isRequired
};