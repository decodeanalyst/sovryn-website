import React from 'react';
import HiringPostLabel from './HiringPostLabel';
import arrow from "../static/arrow1.png"
import "../styles/HiringLinksSection.scss";

export default function HiringPostGen({title, image, date, slug}) {
 
  const articleLink = `/blog${slug}`

    return (
<div className="container mb-5">
            <div className="workwithus-hiringbox">
                <div className="row">
                    <div className="workwithus-hiringbox-text">
                    <HiringPostLabel text={ title } link={ articleLink } />
                        </div>
                </div>
                <div className="row">
                    <div className="float-right">
                      <a href={ articleLink } > <img src={arrow} className="img-fluid" id="arrow" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}