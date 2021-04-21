import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SidebarBlogPost from './BlogSidebar';

import MobTagCloud from './MobTagCloud';
import SearchMenu from '../components/SearchMenu';
import "../styles/sidebar.scss";

export default function BlogMenu() {
 
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
  }`)

  const articles = markdown.allMarkdownRemark.nodes;

    const emptyQuery = ""

    const tags = [{name: "All", link: "/blog", color: "#F7F6E7"},
                {name: "Roadmap", link: "/blog/roadmap", color: "#88B8BC"},
                {name: "Community", link: "/blog/community", color: "#A58D80"},
                {name: "Tutorial", link: "/blog/tutorial", color: "#9F7D71"},
                {name: "Governance", link: "/blog/governance", color: "#CBB464"},
                {name: "Defi", link: "/blog/defi", color: "#8493A5"},
                {name: "News", link: "/blog/news", color: "#9C9C78"},
                {name: "Vision", link: "/blog/vision", color: "#B1BBB4"},
                {name: "Press Releases", link: "/blog/press-releases", color: "#DFC78E"}]


    const [state, setState] = useState({
      filteredData: [],
      query: emptyQuery
    })


  const handleSearchChange = query => {

    const posts = articles || []

    const filteredData = posts.filter(post => {

      const { description, title, tags, category } = post.frontmatter

      return (

        description.toLowerCase().includes(query.toLowerCase()) ||

        title.toLowerCase().includes(query.toLowerCase()) ||

        (category && category.includes(query.toLowerCase())) ||

        (tags &&
          tags
            .join("")
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData
    })
  }

  const filterArticles = state.query ? state.filteredData : articles;

    return (
        <>    
            <div className="container-fluid" id="div-mobile">
                <div className="row">
                    <div className="col-md-12">
                    <MobTagCloud tags={ tags } />
                    <div className="pt-4"></div>
                    <SearchMenu onSearchChanged={ (text) => handleSearchChange(text) } />
                    <div className="pb-5"></div>
                    {/* <h3>{ state.query ? `Search Results For: ${ state.query }` : "Featured" }</h3> */}
                    <div className="row d-flex">
                      <ul className="nav nav-pills p-2 mob-feed">
                        <li className="active pr-3"><a href="#">Latest</a></li>
                        <li><a className="pr-3" href="#">Featured</a></li>
                        <li><a href="#">Most Popular</a></li>
                      </ul>
                    </div> 
                    </div>
                </div>
            </div>
              {/* <div id="div-mobile">
              <TagCloud tags={ tags } />
              <div className="pt-2"></div>
              <SearchMenu onSearchChanged={ (text) => handleSearchChange(text) } />
              </div>
              <div className="pb-5"></div>
            <h3>{ state.query ? `Search Results For: ${ state.query }` : "Featured" }</h3> */}
        </>
    );
}
