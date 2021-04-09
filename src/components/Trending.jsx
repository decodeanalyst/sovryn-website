import React from "react";
import "../styles/trending.scss";
import "../static/arrow.jpeg"
import { graphql, useStaticQuery } from 'gatsby';
import arrow from "../static/arrow.jpeg"

import StyledButton from "../components/StyledButton";
import BlogPostMetaLabel from "./BlogPostMetaLabel";
import BlogPostLabel from "./BlogPostLabel";
// import TrendingComponent from "./trendingcomponent";



export default function Trending() {

  const markdown = useStaticQuery(graphql`
  {
    allMarkdownRemark {
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

  const firstArticle = markdown.allMarkdownRemark.nodes[0];
  const secondArticle = markdown.allMarkdownRemark.nodes[1];
  const thirdArticle = markdown.allMarkdownRemark.nodes[2];

  return (
    <div class="container align-middle">
    <div class="row">
        <div class="col-md-6">
            {/* <div className="frame">
                <div className="framebanner">
                    LATEST ON SOVRYN
                </div>
            </div> */}
        </div>
        <div className="col-md-6">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-inline-flex post">
                            <BlogPostMetaLabel text={firstArticle.frontmatter.date} />
                            <BlogPostMetaLabel text={firstArticle.frontmatter.category} />
                        </div>
                        <div className="rectangle">
                            <div className="d-flex d-inline-block">
                                <div className="col-md-8 p-3">
                                    <BlogPostLabel text={firstArticle.frontmatter.title} />
                                </div>
                                <div className="col-md-4">
                                    <img src={arrow} className="img-fluid p-4 pb-2" id="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-md-12">
                        <div className="d-inline-flex post">
                            <BlogPostMetaLabel text={secondArticle.frontmatter.date} />
                            <BlogPostMetaLabel text={secondArticle.frontmatter.category} />
                        </div>
                        <div className="rectangle">
                            <div className="d-flex d-inline-block">
                                <div className="col-md-8 p-3">
                                    <BlogPostLabel text={secondArticle.frontmatter.title} />
                                </div>
                                <div className="col-md-4">
                                    <img src={arrow} className="img-fluid p-4 pb-2" id="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-md-12">
                        <div className="d-inline-flex post">
                            <BlogPostMetaLabel text={thirdArticle.frontmatter.date} />
                            <BlogPostMetaLabel text={thirdArticle.frontmatter.category} />
                        </div>
                        <div className="rectangle">
                            <div className="d-flex d-inline-block">
                                <div className="col-md-8 p-3">
                                    <BlogPostLabel text={thirdArticle.frontmatter.title} />
                                </div>
                                <div className="col-md-4">
                                    <img src={arrow} className="img-fluid p-4 pb-2" id="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="d-flex justify-content-center">
                    <StyledButton text="VISIT BLOG" />
                    </div> */}
                </div>
                <div className="row">
                  <div className="col-md-6">
                  </div>
                  <div className="col-md-6 justify-content-center pt-5">
                    <StyledButton text="VISIT BLOG" />
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
