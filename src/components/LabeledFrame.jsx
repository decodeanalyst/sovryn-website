import React from "react";
import "../styles/labeledframe.scss";

export default function LabeledFrame({figtxt1, figtxt, img, banner}) {
    
    return(
        <div className="framebanner img-fluid">
            <div className="frametextdefault">
                <span className="label label-default frametext">{figtxt}</span>
                <span className="label label-default frametext">{figtxt1}</span>
            </div>
            <img src={img} className="img" />
        </div>
    );
}