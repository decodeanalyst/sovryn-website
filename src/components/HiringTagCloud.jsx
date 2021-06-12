import React from 'react';
import HiringTagCloudLabel from '../components/HiringTagCloudLabel';
 
export default function HiringTagCloud({tags}) {
 
    return (
        <>  
                <div className="tag-cloud row">
                    {
                        tags.map((tag, index) => {
                                return (
                                    <div className="tag-item col-md-2" key={ index }>
                                        <HiringTagCloudLabel
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
