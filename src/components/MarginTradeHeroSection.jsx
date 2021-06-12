import React from 'react';
import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";
import img1 from "../static/rectangle1779.png";
import banner from "../static/margin-trade/banner.png";


export default function MarginTradeHeroSection() {
    return (
        <>

            <div className="row margin-trade-hero-section pt-3">
                <div className="col-lg-5">
                    <div className="margin-trade-hero-left">
                        <div className="hero-title">
                            <h3>Decentralized Margin Trading</h3>
                        </div>
                        <div className="hero-content">
                            <p>
                                Trade perpetual BTC contracts anonymously without giving up your keys.
                                    </p>
                        </div>
                        <div className="col-lg-12">
                            <div id="div-mobile">
                                <div className="margin-trade-hero-right ">
                                    <img src={banner} className="img-fluid" />
                                </div>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <div class="label label-cover lbl-default lbl-slanted margin-trade-lbl-cover">
                                    <span class="label-default lbl-figtext">0.15% </span>
                                    <span class="label-default lbl-exptext">Fees</span></div>

                            </div>
                            <div className="col">
                                <div class="label label-cover lbl-default lbl-slanted margin-trade-lbl-cover">
                                    <span class="label-default lbl-figtext">5x</span>
                                    <span class="label-default lbl-exptext">Margin</span></div>

                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6 margin-hero-btn">
                                <StyledButton text="trade now" pageName="" />
                            </div>
                            <div className="col-md-6 margin-hero-btn">
                                <StyledButton1 text="faq" pageName="/faq" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div id="div-desktop">
                        <div className="margin-trade-hero-right">
                            <img src={banner} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
