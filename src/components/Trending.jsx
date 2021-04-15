import React from "react";
import "../styles/trending.scss";
import { graphql, Link, useStaticQuery } from 'gatsby';
import arrow from "../static/arrow.jpeg"
import pic from "../static/blog/blog-post-1.jpg"

import StyledButton from "../components/StyledButton";
import BlogPostMetaLabel from "./BlogPostMetaLabel";
import BlogPostLabel from "./BlogPostLabel";
import LabeledFrame from "../components/LabeledFrame";


export default function Trending() {

  const md = useStaticQuery(graphql`
  {
    allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          category
          date(formatString: "MMMM DD, YYYY")
          image {
            publicURL
          }
        }
        excerpt
      }
    }
  }
  `
  )

  let data= md.allMarkdownRemark.nodes

  const imgURL = data[0].frontmatter.image ?  data[0].frontmatter.image.publicURL : "";

  return (
    <>
    <div class="container align-middle" id="div-desktop">
    <div class="row">
        <div class="col-md-6">
            <LabeledFrame figtxt={data[0].frontmatter.title} img={imgURL} banner={true} pageStyle="indexTrending" />
        </div>
        <div className="col-md-6">
            <div className="container">
                <div className="row">
                {
                        data.map((node, index) => {

                          const slug = node.fields.slug;
                          const articleLink = `/blog${slug}`

                            return (
                                <div className="row pt-2">
                                    <div className="col-md-12">
                                        <div className="d-inline-flex post">
                                            <BlogPostMetaLabel text={node.frontmatter.date} />
                                            <BlogPostMetaLabel text={node.frontmatter.category} />
                                        </div>
                                        <Link to={ articleLink }>
                                        <div className="rectangle">
                                            <div className="d-flex d-inline-block">
                                                <div className="col-md-8 p-3">
                                                    <BlogPostLabel text={node.frontmatter.title} />
                                                </div>
                                            <div className="col-md-4">
                                                <img src={arrow} className="img-fluid p-4 pb-2" id="arrow" />
                                                </div>
                                            </div>
                                        </div>                                     
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                }
                </div>
                <div className="row">
                  <div className="col-md-6">
                  </div>
                  <div className="col-md-6 justify-content-center pt-5">
                    <StyledButton text="VISIT BLOG" pageName="blog" />
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container align-middle" id="div-mobile">
    <div class="row">
        <div class="col-md-6">
            <LabeledFrame figtxt={data[0].frontmatter.title} img={imgURL} banner={true} pageStyle="indexTrending" />
        </div>
        <div className="col-md-6">
            <div className="container">
                <div className="row">
                {
                        data.map((node, index) => {

                          const slug = node.fields.slug;
                          const articleLink = `/blog${slug}`

                            return (
                                <div className="row pt-2">
                                    <div className="col-xs-12">
                                        <div className="d-inline-flex post">
                                            <BlogPostMetaLabel text={node.frontmatter.date} />
                                            <BlogPostMetaLabel text={node.frontmatter.category} />
                                        </div>
                                        <Link to={ articleLink }>
                                        <div className="rectangle">
                                            <div className="d-flex d-inline-block">
                                                <div className="col-xs-12 p-3 pt-4">
                                                    <BlogPostLabel text={node.frontmatter.title} />
                                                </div>
                                            <div className="col-md-1">
                                                <img src={arrow} className="img-fluid p-4 pb-2" id="arrow" />
                                                </div>
                                            </div>
                                        </div>                                     
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                }
                </div>
                <div className="row">
                  <div className="col-md-6">
                  </div>
                  <div className="col-md-6 justify-content-center pt-5">
                    <StyledButton text="VISIT BLOG" pageName="blog" />
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  );
}
