import React from "react";
import "../styles/trending.scss";
import { graphql, useStaticQuery } from 'gatsby';
import arrow from "../static/arrow.jpeg"
import pic from "../static/blog/blog-post-1.jpg"

import StyledButton from "../components/StyledButton";
import BlogPostMetaLabel from "./BlogPostMetaLabel";
import BlogPostLabel from "./BlogPostLabel";
import LabeledFrame from "../components/LabeledFrame";


export default function Trending() {

  const md = useStaticQuery(graphql`
  {
    allMarkdownRemark(limit: 3) {
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

  let data=md.allMarkdownRemark.nodes;
  const imgURL = data[0].frontmatter.image ?  data[0].frontmatter.image.publicURL : "";

  return (
    <>
    <div class="container align-middle">
    <div class="row">
        <div class="col-md-6">
            <LabeledFrame figtxt={data[0].frontmatter.title} img={imgURL} banner={true} pageStyle="indexTrending" />
        </div>
        <div className="col-md-6">
            <div className="container">
                <div className="row">
                {
                        data.map((node, index) => {

                            return (
                                <div className="row pt-2">
                                    <div className="col-md-12">
                                        <div className="d-inline-flex post">
                                            <BlogPostMetaLabel text={node.frontmatter.date} />
                                            <BlogPostMetaLabel text={node.frontmatter.category} />
                                        </div>
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
                    <StyledButton text="VISIT BLOG" />
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  );
}
