import React from 'react';
import TagCloudLabel from '../components/TagCloudLabel';
 
export default function TagCloud({tags}) {
 
    return (
        <>
            <div className="tag-cloud row">
                {
                     tags.map((tag, index) => {
    
                            return (
                                <div className="tag-item col-md-4" key={ index }>
                                    <TagCloudLabel
                                     text={ tag.name }
                                     link={ tag.link }
                                     col={ tag.color } />
                                </div>
                            )
                        })
                }
            </div>
        </>
    );
}
