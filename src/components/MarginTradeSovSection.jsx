import React from 'react';
import sovimg from "../static/margin-trade/sov-img.png";
import StyledButton from "../components/StyledButton";
import InfoLabel from "../components/InfoLabel";

export default function MarginTradeSovSection() {
    return (
        <>
            <div id="div-mobile">
                <div className="row">
                    <div className="col-sm-12 margin-trade-sov">
                        <h4>LEVEL UP YOUR STACK WITH A SMOOTH, INTUITIVE INTERFACE</h4>
                        <img src={sovimg} className="img-fluid" />
                        <h3 className="mb-4">Earn more bitcoin at Sovryn, the fastest bitcoin native decentralised exchange</h3>
                        <div className="row">
                            <div className="col Earn-more-label">
                                <InfoLabel figtxt="100 BTC" exptxt="24hr trading volume" />

                            </div>
                            <div className="col Earn-more-label">
                                <InfoLabel figtxt="100,000" exptxt="total transactions" />
                            </div>
                        </div>
                        <div className="sov-trade">
                            <StyledButton text="trade now" pageName="" />
                        </div>

                    </div>
                </div>
            </div>
            <div id="div-desktop" className="pb-60">
                <div className="row">
                    <div className="col-sm-12 margin-trade-sov">
                        <div className="row justify-content-md-center pt-60 pb-60">
                            <div className="col-sm-9">
                                <img src={sovimg} className="img-fluid" />
                                <div className="text-center sov-chart mt-2">
                                    <StyledButton text="trade now" pageName="" />
                                </div>
                            </div>
                        </div>

                        <h3 className="mb-4 pt-60">Earn more bitcoin at Sovryn, the fastest bitcoin native decentralised exchange</h3>
                        <div className="row">
                            <div className="col Earn-more-label">
                                <InfoLabel figtxt="100 BTC" exptxt="24hr trading volume" />
                            </div>
                            <div className="col Earn-more-label">
                                <InfoLabel figtxt="100,000" exptxt="total transactions" />
                            </div>
                            <div className="col Earn-more-label">
                                <InfoLabel figtxt="1000" exptxt="wallets Connected" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}