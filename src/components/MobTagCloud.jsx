import React from 'react';
import TagCloudLabel from '../components/TagCloudLabel';
 
export default function MobTagCloud({tags}) {
 
    return (
        <>  
                <div className="tag-cloud row">
                    {
                        tags.map((tag, index) => {
                                return (
                                    <div className="col-xs-8 p-1" key={ index }>
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
