import React from "react";
import StyledButton from "../components/StyledButton"

import "../styles/signupcomponent.scss";

export default function SignupComponent() {
    return (
        <div className="container">
            <div className="box">
                <div className="row">
                    <div className="signuptext">
                        Enter Name/Pseudonym
                    </div>  
                </div>
                <div className="row pt-2">
                    <div className="inputbox">
                        <input type="text" className="inputbox-input" placeholder="Enter Name" />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="signuptext">
                            Enter Email
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="inputbox">
                        <input type="text" className="inputbox-input" placeholder="Enter Email" />
                    </div>
                </div>
                <div className="row justify-content-center py-3 p-3 pr-5" id="div-desktop">
                    <StyledButton text="SIGN UP" />
                </div>
                <div className="row justify-content-center py-3 p-3 pr-5" id="div-mobile">
                    <StyledButton text="SEND" />
                </div>
            </div>
        </div>
    )
}