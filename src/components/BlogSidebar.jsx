import React, { useState } from 'react';
import TagCloud from './TagCloud';
import SidebarBlogPost from './SidebarBlogPost';
import SearchMenu from '../components/SearchMenu';
import "../styles/sidebar.scss";

export default function BlogSidebar({ articles }) {
 
    const emptyQuery = ""

    const tags = [{name: "All", link: "/blog", color: "#F7F6E7"},
                {name: "Roadmap", link: "/blog/roadmap", color: "#97C7CB"},
                {name: "Community", link: "/blog/community", color: "#B48F7F"},
                {name: "Tutorial", link: "/blog/tutorial", color: "#B48F7F"},
                {name: "Governance", link: "/blog/governance", color: "#DDC269"},
                {name: "Defi", link: "/blog/defi", color: "#50414F"},
                {name: "News", link: "/blog/news", color: "#99BCB1"},
                {name: "Vision", link: "/blog/vision", color: "#AA9B9D"},
                {name: "Press Releases", link: "/blog/press-releases", color: "#E0C78E"}]


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
            <TagCloud tags={ tags } />
            <div className="pt-2"></div>

                <SearchMenu onSearchChanged={ (text) => handleSearchChange(text) } />

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
