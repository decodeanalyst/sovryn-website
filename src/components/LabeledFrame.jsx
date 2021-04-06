import React from "react";
import "../styles/labeledframe.scss";

export default function LabeledFrame({figtxt1, figtxt, img, banner}) {
        let className='frametextdefault';
        let className1='frametext';
        if(banner==false){
            className='nne';
            className1='nne'
        }
        return(
            <div className="framebanner img-fluid">
                <div className={className}>
                    <span className={className1}>{figtxt}</span>
                    <span className={className1}>{figtxt1}</span>
                </div>
                <img src={img} className="img" />
            </div>
        );

}