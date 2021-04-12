import React from "react"

// Components
import { Link, graphql } from "gatsby"
import DefaultLayout from '../components/DefaultLayout';
import BlogFeed from '../components/BlogFeed';
import BlogSidebar from '../components/BlogSidebar';
import HeroBlogPost from '../components/HeroBlogPost';


export default function Category({ pageContext, data }) {

  const { category } = pageContext
  const { nodes, totalCount } = data.allMarkdownRemark

  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } category with "${category}"`

  const imgURL = "https://via.placeholder.com/900x500";

  return (

    <>
    <DefaultLayout>  
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">HOME</a></li>
          <li className="breadcrumb-item active" aria-current="page">{ category }</li>
        </ol>
      </nav>

        <div className="row">
          <div className="col-md-8">
            <HeroBlogPost title={ category } imgURL={ imgURL } />
            <BlogFeed articles={ nodes } />
          </div>
          <div className="col-md-4">
            <BlogSidebar />
          </div>
        </div>
    </DefaultLayout>
  </>
  )
}


export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
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
      }
    }
  }
`