import React from 'react';
import '../styles/signupsection.scss'
import SignupComponent from './SignupComponent';
import SocialFooterLinks from './SocialFooterLinks';
 
export default function MobSignUp() {
 
    return (
        <>
                <div className="row pt-5 pl-4">
                    <h2 className="text-justify">
                        JOIN FOLLOW OG BITCOINERS AT SOVRYN
                    </h2>
                    <div className="col-md-12">
                    <div className="brownbox-mob">
                        <div className="col-md-12">
                            <div className=" d-flex justify-content-center">
                                <div className="signUpboxText pt-3">
                                Sign up for ecosystem news and updates. Privacy is our policy and all Sovryn users are anonymous. 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 pt-3 pr-5">
                            <div className=" d-flex justify-content-center">
                            <div className="p-2"></div>
                            <SignupComponent />
                            </div>
                        </div>
                        <div className="col-md-12 pr-5 pb-1">
                            <div className=" d-flex justify-content-center">
                                {/* <div className="p-2"></div> */}
                                <SocialFooterLinks />
                          </div>
                          <div className="pb-3"></div>
                        </div>
                    </div>
                    </div>
                </div>
        </>  
                
    );
}
