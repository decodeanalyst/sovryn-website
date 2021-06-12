import React from "react";
import "../styles/StakeFramesection.scss";
import StyledButton from "../components/StyledButton";
import InfoLabel from "../components/InfoLabel";

export default function StakeFramesection() {
    return (
        <>
            <div className="container-fluid" id="div-desktop">
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-12">
                        <div className="stake-frame-gradient">
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="d-flex  ">
                            <div className="stake-slanted-rectangle text-center">
                                <p class="stake-text-black">
                                    drerit et turpis sed, sagittis egestas tortor. Suspendisse vel rutrum nulla, ut
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="col-md-12">
                                    <InfoLabel figtxt="1,000,000 USD" exptxt="TOTAL SOV VALUE IN CIRCULATION" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* div end */}
            <div className="container-fluid" id="div-mobile">
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-12">
                        <div className="stake-frame-gradient">

                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12">

                        <div className="stake-slanted-rectangle-mob text-center">
                            <p class="stake-text-black-mob">
                                drerit et turpis sed, sagittis egestas tortor. Suspendisse vel rutrum nulla, ut
                                </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12 col-sm-12 col-md-12">
                        <div className="col-md-12 col-sm-12 infobtn-stake">
                            <InfoLabel figtxt="1,000,000 USD" exptxt="TOTAL SOV VALUE IN CIRCULATION" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}