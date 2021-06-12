import React from "react";
import "../styles/infolabel.scss";

export default function InfoLabel({figtxt, exptxt}) {
    return(
        <div className="label label-cover lbl-default lbl-slanted">
            <span className="label-default lbl-figtext">{figtxt}</span>
            <span className="label-default lbl-exptext">{exptxt}</span>
        </div>
    );
}