import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import TagCloud from './TagCloud';
import SidebarBlogPost from './SidebarBlogPost';
import SearchMenu from '../components/SearchMenu';
import "../styles/sidebar.scss";

export default function BlogSidebar() {
 
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

  const featuredArticles = state.query ? state.filteredData : articles;

    return (
        <>  
              <div id="div-desktop">
              <TagCloud tags={ tags } />
              <div className="pt-2"></div>
              <SearchMenu onSearchChanged={ (text) => handleSearchChange(text) } />
              </div>


            <div className="pb-5"></div>
            <h3>{ state.query ? `Search Results For: ${ state.query }` : "Featured" }</h3>

            {
                    featuredArticles.map((node, index) => {

                    const imgURL = node.frontmatter.image ? node.frontmatter.image.publicURL : "https://via.placeholder.com/427x240";
                        return (
                            <SidebarBlogPost key={ index }
                             title={ node.frontmatter.title }
                             image={ imgURL }
                             date={node.frontmatter.date }
                             slug={node.fields.slug }   />
                        )
                    })
                }
        </>
    );
}
