import React from "react";
import "../styles/labeledframe.scss";
import {breakString} from '../components/BreakString.js'

export default function LabeledFrame({figtxt, img, banner, pageStyle}) {
   
    let style={};
    switch (figtxt.toLowerCase()) {
      case 'roadmap':
       style={ backgroundColor:'#88b8bc'};
        break;
      case 'community':
       style={ backgroundColor:'#a58d80'};
        break;
      case 'tutorial':
       style={ backgroundColor:'#9f7d71'};
        break;
      case 'governance':
       style={ backgroundColor:'#cbb464'};
        break;
      case 'defi':
       style={ backgroundColor:'#8493a5'};
        break;
      case 'news':
       style={ backgroundColor:'#9c9c78'};
        break;
      case 'vision':
       style={ backgroundColor:'#b1bbb4'};
        break;
      case 'press releases':
       style={ backgroundColor:'#dfc78e'};
        break;
    
      default:
       style={ backgroundColor:'#f7f6e8'};
        break;
    }

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
                <div className={ className } style={style}>
                    <h3>{ breakString(figtxt, 20) }</h3>
                </div>
                <div className={className1}>
                    <img className="img-fluid" src={ img } />
                </div>
            </>
        );

}