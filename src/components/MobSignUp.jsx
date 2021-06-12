import React from 'react';
import '../styles/signupsection.scss'
import MobSocialFooterLinks from './MobSocialFooterLinks';
import SignupComponent from './SignupComponent';
import SocialFooterLinks from './SocialFooterLinks';
 
export default function MobSignUp() {
 
    return (
        <>
                <div className="container">
                    <div className="row p-3">
                        <div className="joinsov-mob">
                            JOIN FOLLOW OG BITCOINERS AT SOVRYN
                        </div>
                        <div className="col-md-12">
                        <div className="brownbox-mob">
                            <div className="col-md-12">
                                <div className="text-justify">
                                    <div className="signUpboxText pt-3 pl-3">
                                    Sign up for ecosystem news and updates. Privacy is our policy and all Sovryn users are anonymous. 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 pt-3 pr-3 p-3">
                                <div className="justify-content-center">
                                <SignupComponent />
                                </div>
                            </div>


                            

                            <div className="row justify-content-center pr-5 pb-0">
                            <MobSocialFooterLinks />
                </div>


                            {/* <div className="col-md-12">
                                <div className="justify-content-center">
                                    <MobSocialFooterLinks />
                            </div>
                            <div className="pb-3"></div>
                            </div> */}
                        </div>
                        </div>
                    </div>
                </div>
        </>  
                
    );
}
