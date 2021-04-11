import React from "react";
import "../styles/signupsection.scss";
import SocialFooterLinks from "./SocialFooterLinks";
import SignupComponent from "../components/SignupComponent"

export default function SignupSection() {
    return (
        <>
        <div className="ogbitcoiner">JOIN FOLLOW OG BITCOINERS AT SOVRYN</div>
        <div className="container rectangle1542">
            <div className="row">
                <div className="col-lg-5">
                    <div className="frame">
                    </div>
                </div>
                <div  className="col-md-4 pr-3">
                <div  class="signUpForEcosystemNewsAndUpdatesPrivacyIsOurPolicyAndAllSovrynUsersAreAnonymous">Sign up for ecosystem news and updates. Privacy is our policy and all Sovryn users are anonymous. </div>
                <div className="py-5 pr-1">
                <div className="py-5">
                <SocialFooterLinks /> 
                </div>
                </div>
                </div>
                <div className="col-md-3 pt-4">
                <SignupComponent />
                </div>
            </div>
        </div>
        </>
    )
}