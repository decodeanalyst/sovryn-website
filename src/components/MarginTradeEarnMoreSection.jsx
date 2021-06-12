import React from "react";
import "../styles/MarginTradeEarnMoreSection.scss";
import InfoLabel from "../components/InfoLabel";
import StyledButton from "../components/StyledButton";

export default function MarginTradeEarnMoreSection() {
    return (
        <>
            <div className="container mt-5" id="div-desktop">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-center">
                            <div className="margintradeearnmore-layer-slantedrectangle text-center">
                                <p class="margintradeearnmore-layer-text-headding">
                                Earn more bitcoin at Sovryn, the fastest bitcoin native decentralised exchange
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row w-100">
                    <div className="col-md-4">
                        <div className="col align-self-start py-5" id="infolabel1-mob">
                            <InfoLabel figtxt="100 BTC" exptxt="24hr trading volume" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col align-self-center py-5">
                            <InfoLabel figtxt="100,000" exptxt="Number of trades" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col align-self-end py-5" id="optional">
                            <InfoLabel figtxt="1,000 BTC" exptxt="wallets Connected" />
                        </div>
                    </div>


                </div>
            </div>


            <div className="container mt-5" id="div-mobile">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-center">
                            <div className="margintradeearnmore-layer-slantedrectangle text-center">
                                <p class="margintradeearnmore-layer-text-headding-mob">
                                Earn more bitcoin at Sovryn, the fastest bitcoin native decentralised exchange
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 btn-pl-85">
                        <div className="col-lg-3 col-xs-6">
                            <div className="row align-self-start py-5 btn-fixes" id="tradeearn-infolabel1-mob">
                                <InfoLabel figtxt="100 BTC" exptxt="24hr trading volume" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-6 mr-5">
                            <div className="row align-self-center py-5 btn-fixes">
                            <InfoLabel figtxt="100,000" exptxt="Number of trades" />
                            </div>
                        </div>                        
                    </div>       
                 </div>
                 <div className="row">
                    <div className="col-md-12 btn-pl-85">
                    <div className="col-md-12">
                       <div class="float-left btn-width-100">
                       <StyledButton text="Trade Now" pageName="" />
                       </div>
                   </div>                      
                    </div>       
                 </div>
                {/* <div className="row">
                    <div className="col-md-6">
                        <div className="col align-self-start py-5" id="infolabel1-mob">
                            <InfoLabel figtxt="100 BTC" exptxt="24hr trading volume" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col align-self-center py-5">
                            <InfoLabel figtxt="100,000" exptxt="Number of trades" />
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}