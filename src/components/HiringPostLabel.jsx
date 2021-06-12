import React from 'react';
import {breakString} from '../components/BreakString.js';
import '../styles/HiringPostLabel.scss';
 
export default function HiringPostLabel({text, link}) {
 
    return (
        <>
            <div className="job-label job-label-slanted" id="div-desktop">
                <a href={ link }><h3>{ breakString(text, 60) }</h3></a>
            </div>
            <div className="job-label job-label-slanted" id="div-mobile">
            <a href={ link }><h3>{ breakString(text, 60) }</h3></a>
            </div>
        </>
    );
}