import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PressandMediapost from './PressandMediapost';
 
export default function PressandMediaFeeds({articles}) {

    return (
        <>

         <div className="row">
                {
                    
                    articles.map((node, index) => {
                    const { slug } = node.fields;
                    const imgURL = node.frontmatter.image ? node.frontmatter.image.publicURL : "https://via.placeholder.com/427x240";
                    
                        return (
                            <div className="col-md-4" key={ index }>
                                <PressandMediapost
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

PressandMediaFeeds.propTypes = {
    "data": PropTypes.object.isRequired
};