import React from "react";
import "../styles/signupsection.scss";
import SocialFooterLinks from "./SocialFooterLinks";

export default function SignupSection() {
    return (
        <div className="container rectangle1542">
            <div className="row">
                <div className="col-lg-5">
                    <div className="frame">
                    </div>
                </div>
                <div  className="col-md-4">
                <div  class="signUpForEcosystemNewsAndUpdatesPrivacyIsOurPolicyAndAllSovrynUsersAreAnonymous">Sign up for ecosystem news and updates. Privacy is our policy and all Sovryn users are anonymous. </div>
                <div className="pt-4">
                <SocialFooterLinks />
                </div>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        </div>
    )
}