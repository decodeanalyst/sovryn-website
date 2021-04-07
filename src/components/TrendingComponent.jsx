import React from 'react';

import arrow from '../static/arrow.jpeg'
import { graphql, useStaticQuery } from 'gatsby';
import BlogPostMetaLabel from "./BlogPostMetaLabel";
import BlogPostLabel from "./BlogPostLabel";

 
export default function TrendingComponent() {
    
  // const markdown = useStaticQuery(graphql`
  // {
  //   allMarkdownRemark {
  //         nodes {
  //           frontmatter {
  //             title
  //             categories
  //             date(formatString: "MMMM DD, YYYY")
  //             image {
  //               publicURL
  //             }
  //           }
  //           excerpt
  //         }
  //       }
  // }`
  // )

    // var firstArticle = markdown.allMarkdownRemark.nodes[3];
    // var secondArticle = markdown.allMarkdownRemark.nodes[1];
    // var thirdArticle = markdown.allMarkdownRemark.nodes[2];
 
    return (
        <div className="container">
            <div className="d-flex d-inline-block">
                <div className="post-meta-label post-meta-label-slanted">
                    {/* <BlogPostMetaLabel text={ firstArticle.frontmatter.date } /> */}
                </div>
                <div className="post-meta-label post-meta-label-slanted">
                    {/* <BlogPostMetaLabel text={ firstArticle.frontmatter.category } /> */}
                </div>
            </div>
            <div className="rectangle">
                {/* <BlogPostLabel text={ firstArticle.frontmatter.title } /> */}
                <img className="img-fluid" src={ arrow } id="arrow" />
          </div>
        </div>
    );
}
