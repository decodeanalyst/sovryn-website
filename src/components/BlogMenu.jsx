import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogFeed from './BlogFeed';

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

  const tagFilter = term => articles.filter(post => {

    const { tags } = post.frontmatter

    return (
      (tags &&
        tags
          .join("")
          .toLowerCase()
          .includes(term.toLowerCase()))
    )
  })

  const mostPopularArticles = tagFilter("Most Popular")

  const featuredArticles = tagFilter("Featured")

  const tabMenu = () => {

    return (
      <ul className="nav nav-pills mob-feed">
      <li className="nav-item">
        <a class="nav-link active" id="latest-tab" data-toggle="tab" href="#latest" role="tab" aria-controls="latest" aria-selected="true">Latest</a>
      </li>
      <li className="nav-item">
        <a class="nav-link" id="featured-tab" data-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="true">Featured</a>
      </li>
      <li className="nav-item">
        <a class="nav-link" id="most-popular-tab" data-toggle="tab" href="#most-popular" role="tab" aria-controls="most-popular" aria-selected="true">Most Popular</a>
      </li>
      </ul>
    )
  }

  const tabContent = () => {
    return (
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="latest"
          role="tabpanel"
          aria-labelledby="latest-tab"
        >
          <BlogFeed articles={articles} />
        </div>
        <div
          class="tab-pane fade"
          id="featured"
          role="tabpanel"
          aria-labelledby="featured-tab"
        >
          <BlogFeed articles={featuredArticles} />
        </div>
        <div
          class="tab-pane fade"
          id="most-popular"
          role="tabpanel"
          aria-labelledby="most-popular-tab"
        >
          <BlogFeed articles={mostPopularArticles} />
        </div>
      </div>
    )
  }

    return (
        <>    
            <div className="container-fluid" id="div-mobile">
                <div className="row">
                    <div className="col-lg-12">
                    <MobTagCloud tags={ tags } />
                    <div className="pt-4"></div>
                    
                    <SearchMenu onSearchChanged={ (text) => handleSearchChange(text) } />

                    <div className="pb-5"></div>

                    {
                      state.query ? 
                        <h2>{ `Search Results For: ${ state.query }` }</h2>
                      : tabMenu() 
                    }
                

                    { state.query ? <BlogFeed articles={state.filteredData} /> : tabContent() }

                    </div>
                </div>
            </div>
        </>
    );
}
