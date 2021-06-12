import React from "react";
import "../styles/LendingHeroComponent.scss";
import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";
import InfoLabel from "../components/InfoLabel";

export default function LendingHeroComponent() {
    return (
        <>
        <div className="container-fluid" id="div-desktop">
                <div className="row mt-5">
                <div className="row col-md-12">
                    <div className="col-md-7 float-left">
                        <div className="lendpage-hero-layer-env-hero">
                            <div className="lendpage-hero-label">
                                <h3>Get rewarded for <br/>HODLING Bitcoin </h3>
                            </div>
                        </div>
<div className="row col-md-12 pt-5 d-inline-block d-flex">
                    <div className="col-md-3 py-4">
                            <InfoLabel figtxt="0.02%" exptxt="RBTC" />
                        </div>
                        <div className="col-md-3 py-4">
                            <InfoLabel figtxt="12.39%" exptxt="USDT" />
                        </div>
                        <div className="col-md-6 py-4">
                            <InfoLabel figtxt="1,000,000 BTC" exptxt="Locked liquidity in sovryn" />
                        </div>

                    </div>



                    <div className="row col-md-12 float-left mt-3">
                    <div className="col-md-6">
                        <div class="float-left btn-width-100">
                        <StyledButton text="Lend bitcoin" pageName="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="float-right btn-width-100">
                        <StyledButton1 text="FAQ" pageName="" />
                        </div>
                    </div>

                </div>


                    </div>





                        <div className="col-md-5 float-right">
                                <div class="group5812">

                                <div className="lendheadding lend-hero-section-headding align-items-start">
                                    <h4 className="lend-here-size">HODL Bitcoin to earn Bitcoin </h4>
                                    </div>



                                    {/* <div class="lend-herorectangle1700 lendpageclr-layer-rectangle-info">
                                    <div class="lendhero-infolabel p-3 sovrynExpands p-2 lend-hero-section-headding">
                                    Become a liquidity provider for Sovryn and get rewarded with more Bitcoin. Earn compounded interest on every block for hodling on Sovryn.
                                        </div>
                                </div> */}



                                        <div className="lendpageclr-layer-rectangle-info">
                                            <div className="lendhero-sovrynExpands p-2 lend-hero-section-headding">
                                            Become a liquidity provider for Sovryn and get rewarded with more Bitcoin. Earn compounded interest on every block for hodling on Sovryn.
                                        </div>
                                        </div>
                                    </div>



                        </div>





                    </div>
                </div>

        </div>


        <div className="container-fluid" id="div-mobile">
                <div className="row mt-5">
                <div className="row">

{/* <div className="col-md-12 mt-5">
    <div className="lendpage-hero-label-mob">
                                <h3> Get rewarded for <br/> HODLING Bitcoin</h3>
    </div>
</div>
<div className="col-md-12 mt-5">
<div class="group5812">
                                        <div className="lendpageclr-layer-rectangle-info-mob">
                                            <div className="sovrynExpands p-2">
                                            Become a liquidity provider for Sovryn and get rewarded with more Bitcoin. Earn compounded interest on every block for hodling on Sovryn.
                                        </div>
                                        </div>
                                    </div>
</div>
<div className="col-md-12 mt-5">
<div className="row col-md-12 d-inline-block d-flex">



                    <div className="col-md-3 py-4 lendpage-mob-btn">
                            <InfoLabel figtxt="0.01%" exptxt="RBTC"/>

                            <InfoLabel figtxt="1.28%" exptxt="USD" />
                        </div>
                    </div>
</div>

<div className="col-md-12 mt-5">
                            <div className="lend-lbl-default">
                                <span className="lbl-figtext">1,000,000 BTC</span>
                                <span className="lbl-exptext">Locked liquidity in sovryn</span>
                           </div>
</div>
<div className="row col-md-12 float-left mt-5">
                    <div className="col-md-6 lend-btn-center-mob">
                        <div class="float-left btn-width-100">
                        <StyledButton text="LEND NOW" pageName="" />
                        </div>
                    </div>
                    <div className="col-md-6 lend-btn-center-mob">
                        <div class="float-right btn-width-100">
                        <StyledButton1 text="FAQ" pageName="" />
                        </div>
                    </div>

                </div> */}


                  <div className="col-md-5 float-left">
                 <div className="lendpage-hero-label-mob">
                                <h3> Get rewarded for <br/> HODLING Bitcoin</h3>
                            </div>

                       <div className="col-md-7 float-right mt-3 mb-3">
                        <div class="group5812">
                                        <div className="lendpageclr-layer-rectangle-info-mob">
                                            <div className="lendhero-sovrynExpands p-2">
                                            Become a liquidity provider for Sovryn and get rewarded with more Bitcoin. Earn compounded interest on every block for hodling on Sovryn.
                                        </div>
                                        </div>
                                    </div>


                        </div>


 <div className="row col-md-12 pt-5 d-inline-block d-flex">



                    <div className="col-md-3 py-4 lendpage-mob-btn">
                            <InfoLabel figtxt="0.01%" exptxt="RBTC"/>

                            <InfoLabel figtxt="1.28%" exptxt="USD" />
                        </div>
                    </div>


               <div className="row col-md-12 float-left mt-3 lphero-lendbtn">
                        <div className="col-md-12">
                            <div className="lend-lbl-default">
                                <span className="lbl-figtext">1,000,000 BTC</span>
                                <span className="lbl-exptext">Locked liquidity in sovryn</span>
                           </div>
                        </div>
                    </div>

                    <div className="row col-md-12 float-left mt-3">
                    <div className="col-md-6 lend-btn-center-mob">
                        <div class="float-left btn-width-100">
                        <StyledButton text="LEND NOW" pageName="" />
                        </div>
                    </div>
                    <div className="col-md-6 lend-btn-center-mob">
                        <div class="float-right btn-width-100">
                        <StyledButton1 text="FAQ" pageName="" />
                        </div>
                    </div>

                </div>


                    </div>











                    </div>
                </div>

        </div>


        </>
    )
}
