import React from "react";
import "../styles/framebanner.scss";

export default function Framebanner({figtxt}) {
    return(
        <div className="framebanner">
            <span className="frametext">{figtxt}</span>
        </div>
    );
}