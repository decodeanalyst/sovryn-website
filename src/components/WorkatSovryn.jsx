import React from "react";
import "../styles/WorkatSovryn.scss";
import "../styles/websiteinfo.scss";
import arrow from "../static/arrow.jpeg"
import StyledButton from "../components/StyledButton";
import HiringComponent from "./HiringComponent";

export default function WorkatSovryn() {
    return (
        <>

            <div className="container" id="div-desktop">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="col-md-6 float-left mtp-100">

                            <div className="work-at-sovryn-headding align-items-start"><p>Work at sovryn</p></div>

                            <div class="work-at-sovryn-text">
                                <div class="p-3 workatsovryn-format">
                                    <div className="work-at-sovryn-text-format p-2"><p>
                                        We at Sovryn are agile, and driven by a strong sense of purpose <br />
                                and a deeply rooted sense of community that is collaborative, <br />
                                fast-growing and has to date raised $16 million from top drawer <br />
                                Investor groups and public presales of our native token, SOV.
                                </p>
                                    </div>
                                </div>
                            </div>
                            <div class="work-at-sovryn-text mt-5">
                                <div class="workatsovryn-format p-3">
                                    <div className="work-at-sovryn-text-format p-2"><p>
                                        If you would like to grow and work remotely with a diverse team <br />
                                that is passionate, innovative and results-driven, then we <br />
                                welcome you to pop in for an exploratory chat.
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 float-left">
                            <div className="aboutus-layer-env-hero"></div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5">
                        <div className="row">
                        <div className="col-md-4">
                        <HiringComponent/>
                        </div>
                        <div className="col-md-4">
                        <HiringComponent/>
                        </div>
                        <div className="col-md-4">
                        <HiringComponent/>
                        </div>
                        </div>
                    </div>






                        </div>

                        <div class="row pt-5">
                                <div className="col-md-4" id="div-desktop"></div>
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-center">
                                        <StyledButton text="VIEW ALL POSITIONS" pageName="" />
                                    </div>
                                </div>
                                <div className="col-md-4" id="div-desktop"></div>
                        </div>

                        </div>


                        <div id="div-mobile">
                        <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="col-md-6 float-left mtp-100">

                            <div className="work-at-sovryn-headding align-items-start"><p>Work at sovryn</p></div>

                            <div class="work-at-sovryn-text-mob">
                                <div class="p-3 workatsovryn-format">
                                    <div className="work-at-sovryn-text-format p-2"><p>
                                        We at Sovryn are agile, and driven by a strong sense<br />
                                        of purpose and a deeply rooted sense of community <br />
                                        that is collaborative, fast-growing and has to date <br />
                                         raised $16 million from top drawer Investor groups<br />
                                          and public presales of our native token, SOV.
                                </p>
                                    </div>
                                </div>
                            </div>
                            <div class="work-at-sovryn-text-mob mt-5">
                                <div class="workatsovryn-format p-3">
                                    <div className="work-at-sovryn-text-format p-2"><p>
                                        If you would like to grow and work remotely with<br />
                                         a diverse team that is passionate, innovative and <br />
                                         results-driven, then we welcome you to pop in <br />
                                         for an exploratory chat.
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 float-left mt-5">
                            <div className="aboutus-layer-env-hero"></div>
                        </div>


                    </div>




                    <div className="col-md-12 mt-5">
                        <div className="row">
                        <div className="col-md-4">
                        <HiringComponent/>
                        </div>
                        <div className="col-md-4 pt-3">
                        <HiringComponent/>
                        </div>
                        <div className="col-md-4 pt-3">
                        <HiringComponent/>
                        </div>
                        </div>
                    </div>






                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="pt-5 col-md-4 btn-center-aligh">
                                    <div class="button-default button-slanted btn">
                                     <StyledButton text="VIEW ALL POSITIONS" pageName="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>

        </>
    )
}
