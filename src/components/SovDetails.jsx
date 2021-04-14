import React from "react";
import "../styles/sov.scss";

import InfoLabel from "../components/InfoLabel";
import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";

export default function SovDetails() {
    return (
        <>
            <div className="container" id="div-desktop">
                <div className="row">
                    <div className="col-md-12">
                        <div data-layer="47490b46-340e-4eb4-a601-f27dab101ea5" className="rectangle3190"></div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-md-5">
                        <div className="group5753">
                            <div className="rectangle1687"> 
                                <div className="participateInSovrynGovernanceEarnFees text-center p-2">
                                    Participate in Sovryn Governance & earn fees
                                </div>
                            </div>
                            <div className="rectangle1684">
                                <div className="sovrynIsTheFirstTrulyDecentralisedSystemWhereSovTokenHoldersDecideTheFreeMarketSovTokenHoldersVoteOnHowTheFirstDecentralisedSystemBuiltOnBitcoinWillEvolveAndAlsoEarnFeesForProvidingGovernanceToTheSovrynProtocol p-3 text-left text-wrap">
                                Sovryn is the first truly decentralised system where SOV token holders <br /> decide the free market. SOV token holders vote on how the first <br /> decentralised system built on Bitcoin will evolve and also earn fees for <br /> providing governance to the SOVRYN protocol.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-5"></div>
                    <div className="col-md-2 py-5 pl-5">
                       <InfoLabel figtxt="50,000,000" exptxt="sov remaining" />
                    </div>
                    <div className="pl-2"></div>
                    <div className="pl-2"></div>

                    <div className="col-md-2 py-5 pl-5">
                    <InfoLabel figtxt="1540" exptxt="VOTING ADDRESSES" />
                    </div>
                    <div className="pl-2"></div>
                    <div className="pl-2"></div>

                    <div className="col-md-2 py-5">
                    <InfoLabel figtxt="2,428,211" exptxt="Votes delegated" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 ">
                        <div class="float-left">
                        <StyledButton text="buy sov" pageName="" />

                        </div>
                        <div class="float-right">
                        <StyledButton1 text="how is sov governed?" pageName="" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-5">
                    <div className="col-md-5">
                            <div className="pl-3">
                                <div className="rectangle1687-mob"> 
                                    <div className="text-black-mob p-2">
                                        Participate in Sovryn Governance & earn fees
                                    </div>
                                </div>
                            </div>
                            <div className="whitebox2-mob p-3 text-justify">
                                Sovryn is the first truly decentralised system where SOV token holders decide the free market. SOV token holders vote on how the first decentralised system built on Bitcoin will evolve and also earn fees for providing governance to the SOVRYN protocol.
                            </div>
                    </div>
                </div>
                <div className="row pt-3 d-inline-flex" id="div-mobile">
                    <div className="col-xs-5 pl-3">
                    <InfoLabel figtxt="50,000,000" exptxt="sov remaining" />
                    </div>
                    <div className="col-xs-5 pl-5">
                    <InfoLabel figtxt="1540" exptxt="VOTING ADDRESSES" />
                    </div>
                </div>
                <div className="row pt-2">
                <StyledButton text="buy sov" pageName="" />
                </div>
                <div className="row pt-2 pb-5" >
                    <StyledButton1 text="how is sov governed?" pageName="" />
                </div>
        </>






    )
}        