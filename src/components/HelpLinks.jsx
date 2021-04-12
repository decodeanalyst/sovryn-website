import React from "react";
import "../styles/blogarticle.scss";
import arrow from "../static/arrow.jpeg"

export default function InfoLabel({figtxt, exptxt}) {
    return(
        <>
        <div className="container">
            <div className="row container-color">
                <div className="d-flex d-inline-block">
                    <div className="iconrectangle"></div>
                    <div className="rectangle">
                        <div className="d-flex d-inline-block">
                            <div className="col-md-12 p-3">
                                <div className="howto-text">How to send BTC to your RSK wallet</div>
                            </div>
                            <div className="col-md-4">
                                <img src={arrow} className="img-fluid p-4 pb-2" id="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container py-4">
            <div className="row container-color">
                <div className="d-flex d-inline-block">
                    <div className="iconrectangle"></div>
                    <div className="rectangle">
                        <div className="d-flex d-inline-block">
                            <div className="col-md-12 p-3">
                                <div className="howto-text">How to connect Nifty wallet</div>
                            </div>
                            <div className="col-md-4">
                                <img src={arrow} className="img-fluid p-4 pb-2" id="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container py-4">
            <div className="row container-color">
                <div className="d-flex d-inline-block">
                    <div className="iconrectangle"></div>
                    <div className="rectangle">
                        <div className="d-flex d-inline-block">
                            <div className="col-md-12 p-3">
                                <div className="howto-text">How to SET UP METAMASK</div>
                            </div>
                            <div className="col-md-4">
                                <img src={arrow} className="img-fluid p-4 pb-2" id="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}