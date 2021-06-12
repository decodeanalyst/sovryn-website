import React from 'react';
import '../styles/tagcloudlabel.scss';

export default function HiringTagCloudLabel({ text, link, col }) {
    return(
        <div style= {{ backgroundColor: col }} className="tag-label tag-label-slanted">
            <a href={ link }><h3>{ text }</h3></a>
        </div>
    );
}