import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
 
import { graphql, useStaticQuery } from 'gatsby';

export default function Blog() {
 
    const markdown = useStaticQuery(graphql`
    {
        allMdx {
            nodes {
              frontmatter {
                title
              }
              excerpt
            }
          }
    }`
    )

    return (
        <>
            <DefaultLayout>
            
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">HOME</a></li>
    <li class="breadcrumb-item active" aria-current="page">BLOG</li>
  </ol>
</nav>

            <div className="row">
                {
                    markdown.allMdx.nodes.map((node) => {
                        return (
                            <div className="col-md-6">
                                <img className="img-fluid" src="https://via.placeholder.com/427x240" />
                                <h2>{ node.frontmatter.title }</h2>
                                <p>{ node.excerpt }</p>

                            </div>
                        )
                    })
                }
            </div>

            </DefaultLayout>
        </>
    );
}
