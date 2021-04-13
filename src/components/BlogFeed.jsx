import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost';
 
export default function BlogFeed({articles}) {

    return (
        <>
                <div className="row">
                {
                    articles.map((node, index) => {
                    const { slug } = node.fields;
                    const imgURL = node.frontmatter.image ? node.frontmatter.image.publicURL : "https://via.placeholder.com/427x240";
                    
                        return (
                            <div className="col-md-6" key={ index }>
                                <BlogPost
                                    date={ node.frontmatter.date }
                                    title={ node.frontmatter.title }
                                    image={ imgURL }
                                    category={ node.frontmatter.category }
                                    slug={ slug }
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