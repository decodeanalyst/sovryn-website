import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost';
 
export default function BlogFeed({articles}) {

    return (
        <>
                <div className="row">
                {
                    articles.map((node, index) => {

                    const imgURL = node.frontmatter.image ? node.frontmatter.image.publicURL : "https://via.placeholder.com/427x240";

                    console.log("ImageURL: ", imgURL)
                    console.log("Date: ", node.frontmatter.date)
                    console.log("Categories: ", node.frontmatter.categories)

                        return (
                            <div className="col-md-6" key={ index }>
                                <BlogPost
                                    date={ node.frontmatter.date }
                                    title={ node.frontmatter.title }
                                    image={ imgURL }
                                    category={ node.frontmatter.categories }
                                />

                            </div>
                        )
                    })
                }
            </div>

        </>
    );
}

BlogFeed.propTypes = {
    "data": PropTypes.object.isRequired
};