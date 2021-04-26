import React from "react";
import { graphql, Link } from 'gatsby';
import BlogPostMetaLabel from "../components/BlogPostMetaLabel";

import DefaultLayout from '../components/DefaultLayout';
import HeroBlogPost from '../components/HeroBlogPost';
import "../styles/blogpost.scss"


export default function Article({ pageContext, data }) {

    const frontmatter = data.markdownRemark.frontmatter;
    const markdown = data.markdownRemark;

    const date = frontmatter.date
    const description = frontmatter.description;

    const timeToRead = `${markdown.timeToRead} min read`

    const imgURL = frontmatter.image
      ? frontmatter.image.publicURL
      : "https://via.placeholder.com/427x240"

    return (
        <>
        <DefaultLayout>  
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">HOME</a></li>
            <li className="breadcrumb-item"><a href="/blog">BLOG</a></li>
            <li className="breadcrumb-item active" aria-current="page">{ frontmatter.title }</li>
          </ol>
        </nav>

          <div className="row post">
            <div className="col-lg-8">
              <div className="article">
              
                <img className="img-fluid frame-cover" src={ imgURL } />

                <div className="py-3" id="div-mobile">
                  <div className="col-lg-4">
                  <h1>{frontmatter.title}</h1>
                  <div className="d-inline-flex">
                      <BlogPostMetaLabel text={ date } />
                      <BlogPostMetaLabel text={ timeToRead } />
                  </div>
                  <div className="sidebar-description">
                      { description }
                  </div>
                  </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
              </div>
            </div>
            <div className="col-lg-4" id="div-desktop">
                <h1>{frontmatter.title}</h1>
                <div className="d-inline-flex">
                    <BlogPostMetaLabel text={ date } />
                    <BlogPostMetaLabel text={ timeToRead } />
                </div>
                <div className="sidebar-description">
                    { description }
                </div>
            </div>
          </div>
      </DefaultLayout>
        </>
    )
}

export const query = graphql`
query($id: String!) {
    markdownRemark(id: { eq: $id}) {
      html
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
      timeToRead
    }
  }
`