import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import HiringTagCloud from './HiringTagCloud';
import HiringPostGen from './HiringPostGen';
import "../styles/HiringLinksSection.scss";
import arrow from "../static/arrow1.png"
import WeAreHiring from '../components/WeAreHiring';

export default function HiringLinksSection() {
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

  const jobs = markdown.allMarkdownRemark.nodes;

  const tagFilter = term => jobs.filter(post => {

    const { tags } = post.frontmatter

    return (
      (tags &&
        tags
          .join("")
          .toLowerCase()
          .includes(term.toLowerCase()))
    )
  })

  const featureJob = tagFilter("Feature Job");
  const findJob = tagFilter("Job");

  const emptyQuery = ""

  const tags = [{ name: "All", link: "#", color: "#F7F6E7" },
  { name: "IT", link: "#", color: "#88B8BC" },
  { name: "FINANCE", link: "#", color: "#99948A" },
  { name: "CREATIVE", link: "#", color: "#D1B1A4" },
  { name: "MARKETING", link: "#", color: "#CBB464" },
  { name: "GENIUSES", link: "#", color: "#8493A5" }]


  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery
  })


  const handleSearchChange = query => {

    const posts = jobs || []

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

  const mainJobs = state.query ? state.filteredData : featureJob;

  const renderJobs = (jobs) => {

    return jobs.map((node, index) => {
      const imgURL = node.frontmatter.image ? node.frontmatter.image.publicURL : "https://via.placeholder.com/427x240";

      return (
        <HiringPostGen key={index}
          title={node.frontmatter.title}
          image={imgURL}
          date={node.frontmatter.date}
          slug={node.fields.slug} />
      )
    })
  }

  return (
    <>
      <div id="div-desktop">

        <div className="col-md-12 maybe">
          <div class="d-flex justify-content-center">
            <div class="text-center">
              <h1 className="p-3">We are hiring!</h1>
            </div>
          </div>
        </div>
        <HiringTagCloud tags={tags} />
        <div className="pt-2"></div>
        <WeAreHiring onSearchChanged={(text) => handleSearchChange(text)} />
        <div className="pb-5"></div>
        <h3>{state.query ? `Search Results For: ${state.query}` : "Work With Us"}</h3>
        {
          renderJobs(mainJobs)
        }
      </div>
    </>
  )
}