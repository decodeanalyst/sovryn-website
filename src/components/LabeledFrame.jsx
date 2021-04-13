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
        else if(pageStyle==="indexTrending") {
            className='frame-lbl-trending';
            top='-75px';
        }
        
        if(banner===false){
            className='nne';
            className1='nne';
        }
        return(
            <>
            <div className="row head-img">
                <div className="container">
                    <div className="text-wrap">
                        <div className={ className }>
                            <h3>{ breakString(figtxt, 20) }</h3>
                        </div>
                    </div>
                </div>
                <img style={{ top: top }} className="img-fluid frame-cover" src={ img } />
            </div>
            </>
        );

}