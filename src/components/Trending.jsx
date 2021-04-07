import React from "react";
import "../styles/trending.scss";
import "../static/arrow.jpeg"
// import { graphql, useStaticQuery } from 'gatsby';

// import StyledButton from "../components/StyledButton";
// import BlogPostMetaLabel from "./BlogPostMetaLabel";
// import BlogPostLabel from "./BlogPostLabel";
import TrendingComponent from "./trendingcomponent";



export default function Trending() {
  //   const markdown = useStaticQuery(graphql`
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
  // const firstArticle = markdown.allMarkdownRemark.nodes[3];
  // const secondArticle = markdown.allMarkdownRemark.nodes[1];
  // const thirdArticle = markdown.allMarkdownRemark.nodes[2];
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        
          {/* <div class="framebanner"> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="90"
              viewBox="0 0 443 122"
            >
              <g
                id="H2_shape_2_lines"
                data-name="H2 shape 2 lines"
                transform="translate(5)"
              >
                <g
                  id="Group_4754"
                  data-name="Group 4754"
                  transform="translate(-148.436 -282.216)"
                >
                  <path
                    id="Path_4572"
                    data-name="Path 4572"
                    d="M26.615,5.694H455.167l-14.448,122H12.167Z"
                    transform="translate(131.269 276.521)"
                    fill="#f7f6e8"
                  />
                </g>
                <text
                  id="Latest_news_on_The_Sovryn_planet"
                  data-name="Latest news on The 
                    Sovryn planet"
                  transform="translate(40 51)"
                  font-size="50"
                  font-family="Bangers-Regular, Bangers"
                  letter-spacing="0.01em"
                >
                  <tspan x="0" y="0">
                    Latest news on The{" "}
                  </tspan>
                  <tspan x="0" y="55">
                    Sovryn planet
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
            height="500"
            viewBox="0 0 644 575"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.764"
                x2="0.726"
                y2="1.214"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#e0c78e" />
                <stop offset="1" stop-color="#6f8687" />
              </linearGradient>
            </defs>
            <g
              id="Rectangle_1680"
              data-name="Rectangle 1680"
              stroke="#f7f6e7"
              stroke-width="10"
              fill="url(#linear-gradient)"
            >
              <rect width="644" height="575" stroke="none" />
              <rect x="5" y="5" width="634" height="565" fill="none" />
            </g>
          </svg> */}
        </div>
        <div className="col-md-6">
          <TrendingComponent />
          {/* <div className="rectangle">
            <div className="d-flex d-inline-block">
              <div className="post-meta-label post-meta-label-slanted">
              <BlogPostMetaLabel text={ firstArticle.frontmatter.date } />
              </div>
              <BlogPostMetaLabel text={ firstArticle.frontmatter.category } />
            </div>
            <BlogPostLabel text={ firstArticle.frontmatter.title } />
            <div id="arrow"></div>
          </div>
          <div className="p-3"></div>
          <StyledButton text="visit the blog" pageName="/blog" />
        </div> */}
      </div>
    </div>
    </div>
  )
}
