import React from "react";
import "../styles/signupsection.scss";
import SocialFooterLinks from "./SocialFooterLinks";
import SignupComponent from "../components/SignupComponent"
import imagUrl from '../static/home-page/HOME_Join fellow_og.png'

export default function SignupSection() {
    return (
        <>
            <div className="d-flex flex-row-reverse">
                <div className="pr-5"></div>
                <div className="ogbitcoiner align-items-start">JOIN FOLLOW OG BITCOINERS AT SOVRYN</div>
            </div>
            <div className="container rectangle1542">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="frame">
                            <img src={imagUrl} />
                        </div>
                    </div>
                    <div className="col-lg-5 pl-5">
                        <div className="row">
                            <div class="signUpForEcosystemNewsAndUpdatesPrivacyIsOurPolicyAndAllSovrynUsersAreAnonymous">
                                Sign up for ecosystem news and updates. Privacy is our policy and all Sovryn users are anonymous.
                    </div>
                        </div>
                        <div className="pt-4"></div>
                        <div class="row py-5 pt-5 pl-3">
                            <SocialFooterLinks />
                        </div>
                    </div>
                    <div className="col-lg-3 py-2">
                        <SignupComponent />
                    </div>
                </div>
            </div>
        </>
    )
}