import React from 'react';
import LabeledFrame from "../components/LabeledFrame";
import img1 from "../static/market-making/hero-rectangle.png";
import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";



export default function MarketMakingHeroSection() {

    return (
        <>
            <div id="div-mobile">
                <div className="common-block h-auto">
                    <div className="common-block-text">
                        <p className="mb-0">
                            Decide your own strategy and stack sats. At Sovryn, the store is a smart contract and you are the market maker.
                            </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">

                    <LabeledFrame figtxt="Decentralised Market Making on Sovryn" img={img1} banner={true} pageStyle="index" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-7">
                    <div id="div-desktop">
                        <div className="common-block h-auto">
                            <div className="common-block-text">
                                <p className="mb-0">
                                    Decide your own strategy and stack sats. At Sovryn, the store is a smart contract and you are the market maker.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-7">
                    <div className="row">
                        <div className="col-md-6 margin-hero-btn">
                            <StyledButton text="Become a market maker" pageName="" />
                        </div>
                        <div className="col-md-6 margin-hero-btn">
                            <StyledButton1 text="faq" pageName="/faq" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

