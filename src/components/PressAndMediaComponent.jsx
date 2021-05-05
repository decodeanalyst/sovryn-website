import React from "react";
import BlogPostLabel from './BlogPostLabel';
import BlogPostMetaLabel from './BlogPostMetaLabel';

import "../styles/pressandmediacomponent.scss"



export default function PressAndMediaComponent() {
    return (
        <div className="container">
            <div className="mediabox">
                <div className="post-meta-label post-meta-label-slanted">
                    <h3>December 30, 2021</h3>
                </div>
            </div>
            <div className="post-label">
                <h3>Media name:<br />
                Header of the publication</h3>
            </div>
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