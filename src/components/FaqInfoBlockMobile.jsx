import React from 'react';
import faqmobileimag1 from "../static/faq/faq-info-1.png";
import SocialFooterLinks from '../components/SocialFooterLinks';


export default function FaqQuestionListMobile() {
    return (
        <>
            <div className="row pt-5 pb-5">

                <div className="col-lg-7">
                    <div className="faq-frame-mobile-top">
                        <img src={faqmobileimag1} className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-5">

                    <div class="clip-path top">
                        <div class="content">
                            <div className="faq-frame-mobile-bottom">

                                <div className="pl-3">
                                    <h3>DIDn’t find the answer?</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et </p>
                                    <SocialFooterLinks />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}