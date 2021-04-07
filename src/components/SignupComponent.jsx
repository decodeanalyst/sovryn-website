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
                <div className="row">
                    <div className="inputbox">
                        <input type="text" className="inputbox-input" placeholder="Enter Name" />
                    </div>
                </div>
                <div className="row pt-1">
                    <div className="signuptext">
                            Enter Email
                    </div>
                </div>
                <div className="row pt-1">
                    <div className="inputbox">
                        <input type="text" className="inputbox-input" placeholder="Enter Email" />
                    </div>
                </div>
                <div className="row justify-content-center py-3">
                    <StyledButton text="SIGN UP" />
                </div>
            </div>
        </div>
    )
}