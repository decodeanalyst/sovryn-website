import React from 'react';
import DefaultLayout from '../../components/DefaultLayout';
import { graphql, useStaticQuery } from 'gatsby';

import BlogFeed from '../../components/BlogFeed';
import BlogSidebar from '../../components/BlogSidebar';
import HeroBlogPost from '../../components/HeroBlogPost';

export default function Blog() {

  const markdown = useStaticQuery(graphql`
  {
    allMarkdownRemark {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              category
              tags
              description
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
                  <HeroBlogPost title={ markdown.allMarkdownRemark.nodes[0].frontmatter.title }
                   imgURL= { markdown.allMarkdownRemark.nodes[0].frontmatter.image.publicURL }
                   />
                  <BlogFeed articles={ markdown.allMarkdownRemark.nodes } />
                </div>
                <div className="col-md-4">
                  <BlogSidebar />
                </div>
              </div>
          </DefaultLayout>
        </>
    );
}