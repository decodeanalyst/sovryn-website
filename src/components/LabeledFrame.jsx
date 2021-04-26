import React from "react";
import "../styles/labeledframe.scss";
import {breakString} from '../components/BreakString.js'

export default function LabeledFrame({figtxt, img, banner, pageStyle}) {
        
    let className='frame-lbl-blog';
    let className1='frame-cover-blog';
    
        if(pageStyle==="blog"){
            className='frame-lbl-blog';
            className1='frame-cover-blog';
        }
        else if(pageStyle==="indexTrending") {
            className='frame-lbl-trending';
            className1='frame-cover-trending';
        }
        
        if(banner===false){
            className='nne';
            className1='nne';
        }
        return(
            <>
            <div className="row head-img">
                <div className="container">
                        <div className={ className }>
                            <h3>{ breakString(figtxt, 20) }</h3>
                        </div>
                </div>
                <div className={className1}>
                    <img className="img-fluid" src={ img } />
                </div>
            </div>
            </>
        );

}