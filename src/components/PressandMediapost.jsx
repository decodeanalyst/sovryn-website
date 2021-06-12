import React from 'react';
import PressandMediaLabel from './PressandMediaLabel';
import PressandMediaMetaLabel from './PressandMediaMetaLabel';
import { Link } from 'gatsby';

import "../styles/blogpost.scss"
import "../styles/PressandMedia.scss"
export default function PressandMediapost({title, image, date, category, slug}) {

  const articleLink = `/workwithus${slug}`

    return (
      <div className="post">
          <div className="d-inline-flex">
            <PressandMediaMetaLabel text={ date } />
          </div>
            <div className="article-cover">
              <Link to={ articleLink } >
                <img className="img-fluid blog-feed-img" src={ image } />
              </Link>
            </div>
            <PressandMediaLabel text={ title } link={ articleLink } />

      </div>
    )
}