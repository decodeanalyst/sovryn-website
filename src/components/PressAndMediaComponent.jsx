import React from "react";
import BlogPostLabel from './BlogPostLabel';
import BlogPostMetaLabel from './BlogPostMetaLabel';

import "../styles/pressandmediacomponent.scss"
import { graphql, useStaticQuery } from 'gatsby';
import PressandMediaFeeds from './PressandMediaFeeds';


export default function PressAndMediaComponent() {
  // filter: { frontmatter: {category:{ eq: true } } }
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
  debugger;
  
   const articles = markdown.allMarkdownRemark.nodes;

   const tagFilter = term => articles.filter(post => {
    debugger;
    const { tags } = post.frontmatter

    return (
      (tags &&
        tags
          .join("")
          .toLowerCase()
          .includes(term.toLowerCase()))
    )
  })
debugger;
  const newsMedia = tagFilter("News")

    return (


      
        <div className="container">
          <PressandMediaFeeds articles={newsMedia} />
            {/* <div className="mediabox">
                <div className="post-meta-label post-meta-label-slanted">
                    <h3>December 30, 2021</h3>
                </div>
            </div>
            <div className="post-label">
                <h3>Media name:<br />
                Header of the publication</h3>
            </div> */}
        </div>
    )
}



 
//   const articleLink = `/blog${slug}`

//     return (
//       <div className="post">
//           <div className="d-inline-flex">
//             <BlogPostMetaLabel text={ date } />
//             <BlogPostMetaLabel text={ category } />
//           </div>
//             <div className="article-cover">
//               <Link to={ articleLink } >
//                 <img className="img-fluid blog-feed-img" src={ image } />
//               </Link>
//             </div>
//             <BlogPostLabel text={ title } link={ articleLink } />

//       </div>
//     )
// }