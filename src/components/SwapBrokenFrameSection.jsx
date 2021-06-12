import React from "react";
import "../styles/SwapBrokenFrameSection.scss";
import brokensec from "../static/brokensec.png";

export default function SwapBrokenFrameSection() {
    return (
        <>
            <div className="container-fluid" id="div-desktop">
                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <div class="parallelogram-container">
                            <div class="parallelogram-left parallelogram-container-div-one"></div>
                            <div class="parallelogram-right parallelogram-container-div-two"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid" id="div-mobile">
                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <div class="swapbroken-mob">
                            <div class="swapbroken-position-relative-mob"> </div>
                        </div>
                        <div class="swapbroken-fram-mob">
                            <div class="swapbroken-fram-relative-mob"> </div>
                        </div>
                        {/* <div class="parallelogram-container">
                            <div class="parallelogram-left parallelogram-container-div-one"></div>
                            <div class="parallelogram-right parallelogram-container-div-two"></div>
                        </div> */}
                    </div>
                    {/* <div className="col-12">                        
                    <img src={brokensec} className="img-flui" />
                    </div> */}
                </div>
            </div>
        </>
    )
}