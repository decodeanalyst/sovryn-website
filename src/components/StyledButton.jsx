/**
 * This component uses props to set the button text and handle navigation.
 * To use this component it is mandatory to provide "text" and "pageName" 
 * attribute for it to work correctly 
 * (e.g. <StyledButton text="some text" pageName="some name" />) 
 */

import React from "react";
import { navigate } from "gatsby";
import "../styles/styledbutton.scss"

export default function StyledButton({text, pageName}) {

   return (
        <>
        <div class="button-default button-slanted btn">
            <span class="button-slanted-content btn-link" onClick={event => {
                event.preventDefault()
                navigate(pageName)}}>
                    {text}</span>
        </div>
        </>
   );
}