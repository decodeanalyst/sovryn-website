
import React from 'react';
import infoimg from "../static/margin-trade/info-1.png"


export default function MarginTradeInfoSection() {
    return (
        <>

            <div id="div-mobile" className="margintrade-info-mobile">
                <div className="row mt-3 info-middle-frame">
                    <div className="col-sm-12 info-middle-frame-wrapper">
                        <div className="row">
                            <div className="col-md-12 col-lg-4">
                                <div class="post-label post-label-slanted live-label"><a href=""><h3>Live Now!</h3></a></div>
                            </div>
                            <div className="col-md-12 col-lg-8">
                                <div className="info-middle-frame">
                                     <h4>SOVRYN is the exchange that Satoshi would use</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12 col-lg-4">
                    <div className="common-block">
                        <div className="common-block-title">
                            <h3>REAL BITCOIN, NO SYNTHETICS</h3>
                        </div>
                        <div className="common-block-text">
                            <p>Every bitcoin on Sovryn is secured by Bitcoin miners and all transactions are settled on Bitcoin Blockchain via the RSK Bitcoin Sidechain (Layer 2 OG). Therefore, you depend on the unhackable Bitcoin blockchain and not anything else.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="common-block">
                        <div className="common-block-title">
                            <h3>SAVE YOUR BITCOIN FROM LIQUIDATION</h3>
                        </div>
                        <div className="common-block-text">
                            <p>Sovryn, only partially liquidates undercollatralized positions to maintain a 25% margin. Therefore, we do not put your complete portfolio at risk and save you from extreme penalties. </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="common-block">
                        <div className="common-block-title">
                            <h3>100% PSEUDONYMOUS</h3>
                        </div>
                        <div className="common-block-text">
                            <p>Sovryn is a decentralised margin trading platform, there is no KYC or AML Verification ever to preserve your pseudonymity. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="div-desktop" className="margintrade-info-desktop">
                <div className="row mt-3 info-middle-frame">
                    <div className="col-sm-12 info-middle-frame-wrapper">
                        <div className="row">
                            <div className="col-md-4">
                                <div class="post-label post-label-slanted live-label"><a href=""><h3>Live Now!</h3></a></div>
                            </div>
                            <div className="col-md-8">
                                <div className="info-middle-frame">
                                    <h4>SOVRYN is the exchange that Satoshi would use</h4>
                                    <img className="img-fluid info-middle-img" src={infoimg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-12 col-lg-4">
                    <div className="common-block">
                        <div className="common-block-title">
                            <h3>NON-CUSTODIAL</h3>
                        </div>
                        <div className="common-block-text">
                            <p>Financial sovereignty is one of our key values. Sovryn’s non-custodial financial system runs without ever asking you for your keys, your coins or your control, straight from your wallet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="common-block">
                        <div className="common-block-title">
                            <h3>PERPETUAL POSITIONS</h3>
                        </div>
                        <div className="common-block-text">
                            <p>Enjoy a frictionless trading experience with positions that automatically renew with zero rollover fees.  </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="common-block">
                        <div className="common-block-title">
                            <h3>LOW AND TRANSPARENT FEES</h3>
                        </div>
                        <div className="common-block-text">
                            <p>Sovryn charges 0.15% of the intial capital plus the APR of the margin you took. The blockchain gas fees for starting a position or closing one on Sovryn is less than a dollar.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
