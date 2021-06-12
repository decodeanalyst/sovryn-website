import React from "react";
import "../styles/SwapHerosection.scss";
import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";
import InfoLabel from "../components/InfoLabel";

export default function SwapHerosection() {
    return (
        <>
            <div className="container-fluid" id="div-desktop">
                <div className="row mt-5">
                    <div className="row col-md-12">
                        <div className="col-md-12 float-left">
                            <div className="swap-hero-layer-env-hero">
                                <div className="swap-hero-label">
                                    <h3>The Bitcoiners way to<br />swap tokens</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 float-left">
                            <div className="row col-md-7 pt-5 d-inline-block">
                                <div class="swap-rectangle">
                                    <div class="swap-infolabel p-3">
                                        Swap tokens,  near instantly, at the fastest, safest  and<br />the most economical DeFI for Bitcoin.
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 float-left">
                            <div className="row col-md-4 float-left mt-3">
                                <div className="col-md-12">
                                    <div class="float-left btn-width-100">
                                        <StyledButton text="Learn more" pageName="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid" id="div-mobile">

<div className="row">
    <div className="col-md-12">
        <div className="swap-hero-label-mob">
            <h3>The Bitcoiners way to swap tokens</h3>
        </div>
    </div>
</div>
<div className="row">
    <div className="col-md-12">
        <div class="swap-rectangle-mob">
            <div class="swap-infolabel-mob p-3">
            Swap tokens, near instantly, at the fastest, safest and the most economical DeFI for Bitcoin.
            </div>
        </div>
    </div>
</div>

<div className="row">
    <div className="col-md-12 mt-5">
        <div className="swap-hero-layer-env-hero-mob">
        </div>
    </div>
</div>

<div className="row">
    <div className="col-md-12 mt-5">
        <div class="swapbtn-width-60">
            <StyledButton text="Learn more" pageName="" />
        </div>
    </div>
</div>






                {/* <div className="row mt-5">
                    <div className="row col-md-12">
                        <div className="col-md-12 float-left">
                            <div className="swap-hero-layer-env-hero">
                                <div className="swap-hero-label">
                                    <h3>The Bitcoiners way to<br />swap tokens</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 float-left">
                        <div className="row col-md-7 pt-5 d-inline-block">
                            <div class="swap-rectangle">
                                    <div class="swap-infolabel p-3">
                                    Swap tokens,  near instantly, at the fastest, safest  and<br/>the most economical DeFI for Bitcoin.
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 float-left">
                            <div className="row col-md-4 float-left mt-3">
                                <div className="col-md-12">
                                    <div class="float-left btn-width-100">
                                        <StyledButton text="Learn more" pageName="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
