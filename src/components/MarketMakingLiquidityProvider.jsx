import React from 'react';

import img1 from "../static/market-making/ractangle.png";




export default function MarketMakingLiquidityProvider() {

    return (
        <>
            <div id="div-mobile" className="mt-5">
                <div className="border-5">
                    <img src={img1} className="img-fluid" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-8">
                    <div className="frame-title-common bg-teal mb-3">
                        <h3>Why you should become a liquidity provider for Sovryn?</h3>
                    </div>
                    <h3>Wave goodbye to the exclusive club of big centralised services that provide market-making. At Sovryn, anyone and everyone can become a market-maker and bear fruit of becoming one. </h3>
                </div>
            </div>
            <div className="row pb-60">
                <div className="col-sm-12 col-md-6 order-md-last order-lg-first order-sm-last">
                    <div className="common-block h-auto mb-3 bg-light-yellow">
                        <div className="common-block-title">
                            <h3>Single Sided Liquidity</h3>
                        </div>
                        <div className="common-block-text">
                            <p className="mb-0">Whilst other AMMs require Liquidity providers to take exposure on multiple assets, Sovryn does not. At Sovryn, you can provide liquidity with a single token and maintain 100% exposure to that token</p>
                        </div>
                    </div>
                    <div className="common-block h-auto mb-3 bg-light-yellow">
                        <div className="common-block-title">
                            <h3>100% PSEUDONYMOUS</h3>
                        </div>
                        <div className="common-block-text">
                            <p className="mb-0">Sovryn is a decentralized margin trading platform, there is no KYC or AML verification ever. preserve your pseudonymity. </p>
                        </div>
                    </div>
                    <div className="common-block h-auto mb-3 bg-light-yellow">
                        <div className="common-block-title">
                            <h3>NON-CUSTODIAL</h3>
                        </div>
                        <div className="common-block-text">
                            <p className="mb-0">Financial sovereignty is one of our key values. Sovryn’s non-custodial financial system runs without ever asking you for your keys, your coins or your control, straight from your wallet. </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 order-md-first order-lg-last">
                    <div id="div-desktop">
                        <div className="border-5">
                            <img src={img1} className="img-fluid" />
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

