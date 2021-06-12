import React from 'react';
import learnreact from "../static/margin-trade/learning-react.png";
import StyledButton from "./StyledButton";
import InfoLabel from "./InfoLabel";
import arrow from "../static/arrow.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Users = [
    {
        name: "How to send BTC to your RSK wallet",
        icons: "twitter"
    },
    {
        name: "How to connect Nifty wallet",
        icons: "twitter"
    },
    {
        name: "How to set up Metamask",
        icons: "twitter"
    },
]
export default function MarginTradeLearningSection() {
    return (
        <>
            <div>

                <div className="margin-trade-learning pt-60 pb-60">
                    <div className="row">
                        <div className="col-md-8">
                            <div class="frame-lbl-trending learn-about-lbl" style={{ backgroundColor: "#A4BED1" }}>
                                <h3>Learn how to become a champ at margin trading on Sovryn</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="learning-left">
                                <div className="learning-post">
                                    <div className="post-meta-label post-meta-label-slanted mr-3">
                                        <h3>December 30, 2021</h3>
                                    </div>
                                    <div className="post-meta-label post-meta-label-slanted">
                                        <h3>Tutorial</h3>
                                    </div>
                                </div>
                                <img src={learnreact} />
                                <div className="learning-lbl">
                                    <div class="frame-lbl-trending" style={{ backgroundColor: "#F7F6E8" }}>
                                        <h3>SIP 0004 Outcome: DeFi Governance in Action</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-12 col-lg-6">
                            {Users.map((e) => {
                                return (

                                    <div className="h-auto  pr-4  rectangle w-100 mb-3">
                                        <div className="align-items-center d-flex">
                                            <div className="learning-icon"><FontAwesomeIcon icon={['fab', [`${e.icons}`]]} size="2x" transform="shrink-5" /></div>
                                            <h4 className="font-weight-bold faq-question-title mb-0 w-100">{e.name}</h4>
                                            <div><img src={arrow} className="img-fluid" style={{ width: "40px" }} /></div>
                                            <i class="fa fa-play-circle-o" aria-hidden="true"></i>
                                        </div>
                                    </div>

                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
