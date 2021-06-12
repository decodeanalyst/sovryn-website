/**
 * This component uses props to set the button text and handle navigation.
 * To use this component it is mandatory to provide "text" and "pageName" 
 * attribute for it to work correctly 
 * (e.g. <PositionButton text="some text" pageName="some name" />) 
 */

 import React from "react";
 import { navigate } from "gatsby";
 import "../styles/PositionButton.scss"
 
 export default function PositionButton({text, pageName}) {
 
    return (
         <>
         <div class="button-default-2 button-slanted-2 btn">
             <span class="button-slanted-content-2 btn-link-2" onClick={event => {
                 event.preventDefault()
                 navigate(pageName)}}>
                     {text}</span>
         </div>
         </>
    );
 }