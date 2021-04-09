import React from "react";
import "../styles/labeledframe.scss";
import {breakString} from '../components/BreakString.js'

export default function LabeledFrame({figtxt, img, banner, pageStyle}) {
        let className='frame-label';
        let className1='h3';
        let top='0px';
        if(pageStyle==="blog"){
            className='frame-lbl-blog';
            className1='h3-1';
        }

        if(banner===false){
            className='nne';
            className1='nne';
        }
        return(
            <>
            <div className="row col-md-12">
                <div className={ className }>
                    <h3 className={ className1 }>{ breakString(figtxt, 20) }</h3>
                </div>
                <img style={{ top: top }} className="img-fluid frame-cover" src={ img } />
            </div>
            </>
        );

}