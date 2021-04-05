import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { graphql, useStaticQuery } from 'gatsby';

import BlogFeed from '../components/BlogFeed';
import BlogSidebar from '../components/BlogSidebar';
import HeroBlogPost from '../components/HeroBlogPost';

export default function Blog() {

  const markdown = useStaticQuery(graphql`
  {
      allMdx {
          nodes {
            frontmatter {
              title
              categories
              date(formatString: "MMMM DD, YYYY")
              image {
                publicURL
              }
            }
            excerpt
          }
        }
  }`
  )
    return (
        <>
          <DefaultLayout>  
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">HOME</a></li>
                <li className="breadcrumb-item active" aria-current="page">BLOG</li>
              </ol>
            </nav>

              <div className="row">
                <div className="col-md-8">
                  <HeroBlogPost article={ markdown.allMdx.nodes[0] } />
                  <BlogFeed articles={ markdown.allMdx.nodes } />
                </div>
                <div className="col-md-4">
                  <BlogSidebar />
                </div>
              </div>
          </DefaultLayout>
        </>
    );
}
