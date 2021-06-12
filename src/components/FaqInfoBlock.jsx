import React from 'react';
import faqimag1 from "../static/faq/faq-1.png";
import faqimag2 from "../static/faq/faq-2.png";
import SocialFooterLinks from '../components/SocialFooterLinks';

export default function FaqQuestionList() {
    return (
        <>             
         <div className="row pt-5 pb-5">
            <div className="col-lg-5">
                <div className="faq-frame-left">
                    <img src={faqimag1} className="img-fluid" />
                    <div className="faq-left-content">
                        <h3>DIDn’t find the answer?</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et </p>
                        <div className="faq-social-link"><SocialFooterLinks /></div>
                    </div>

                </div>
            </div>
            <div className="col-lg-7">
                <div className="faq-frame-right">
                    <img src={faqimag2} className="img-fluid" />
                </div>
            </div>
        </div>
        </>
    )
}



