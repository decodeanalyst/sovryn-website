import React from "react";
import "../styles/AboutUsHeroSection.scss";
import arrow from "../static/arrow.jpeg"
import StyledButton from "../components/StyledButton";

export default function AboutUsHeroSection() {
    return (
        <>
        <div className="container-fluid" id="div-desktop">
                <div className="row mt-5">
                <div className="col-md-12">
                <div className="col-md-6 float-left">
                            <div className="aboutus-layer-env-hero">
                                <div className="frame-label">
                                    <h3>Next step in bitcoin’s <br/> evolution</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 float-left mtp-200">

                            <div className="about-us-hero-section-headding align-items-start"><h4>Bitcoin, despite of having the biggest liquidity pool, and being the reserve currency of the crypto world has been cut out of DEFI. </h4></div>

                            <div class="about-us-hero-section-text">
                                <div class="p-3 about-us-hero-format">
                                    <div className="about-us-hero-text-format p-2 mt-3 ml-5"><p>
                                We’re on a mission to change that.
                                </p>
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
