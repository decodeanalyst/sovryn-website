import React from 'react';
import LabeledFrame from "../components/LabeledFrame";
import img1 from "../static/market-making/hero-rectangle.png";
import poolsimg1 from "../static/market-making/soveryn-pool-1.png";
import poolsimg2 from "../static/market-making/soveryn-pool-2.png";




export default function MarketMakingRatioChart() {

    return (
        <>

            <div className="row pt-60 pb-60">
                <div className="col-md-5">
                    <div id="div-desktop">
                        <div className="market-ratio-earn-lbl">
                            <LabeledFrame figtxt="Available pools and expected rewards on Sovryn" img={img1} banner={true} pageStyle="index" />
                        </div>
                    </div>
                    <div id="div-mobile">
                        <div class="frame-title-common mb-3"><h3>Available pools and expected rewards on Sovryn</h3></div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="market-ratio-earn-right">
                        <div className="row align-items-center ">
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="d-flex flex-column w-100">
                                        <div className="d-flex justify-content-between w-100">
                                            <div className="d-flex align-items-center">
                                                <img src={poolsimg1} className="img-fluid" style={{ width: "30px" }} />
                                                <p className="mb-0 ml-2 ">SOV</p>
                                            </div>
                                            <div id="div-desktop">
                                                <p className="mb-0 ">50% 100,000,000</p>
                                            </div>
                                            <div id="div-mobile">
                                                <p className="mb-0 ">50%</p>
                                                <p className="mb-0 ">100,000,000</p>
                                            </div>
                                            <strong><p className="mb-0 ">23.25%</p></strong>
                                        </div>
                                        <div className="d-flex justify-content-between w-100">
                                            <div className="d-flex align-items-center">
                                                <img src={poolsimg2} className="img-fluid" style={{ width: "30px" }} />
                                                <p className="mb-0 ml-2 ">SOV</p>
                                            </div>
                                            <div id="div-desktop">
                                                <p className="mb-0 ">50% 100,000,000</p>
                                            </div>
                                            <div id="div-mobile">
                                                <p className="mb-0 ">50%</p>
                                                <p className="mb-0 ">100,000,000</p>
                                            </div>
                                            <strong><p className="mb-0 ">23.25%</p></strong>
                                        </div>
                                    </div>


                                    <div className="align-items-center d-flex value-right">
                                        <strong><p className="mb-0 ">23.25%</p></strong>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="market-ratio-earn-right">
                        <div className="row align-items-center ">
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="d-flex flex-column w-100">
                                        <div className="d-flex justify-content-between w-100 mb-2">
                                            <div className="d-flex align-items-center">
                                                <img src={poolsimg1} className="img-fluid" style={{ width: "30px" }} />
                                                <p className="mb-0 ml-2 ">SOV</p>
                                            </div>
                                            <div id="div-desktop">
                                                <p className="mb-0 ">50% 100,000,000</p>
                                            </div>
                                            <div id="div-mobile">
                                                <p className="mb-0 ">50%</p>
                                                <p className="mb-0 ">100,000,000</p>
                                            </div>
                                            <strong><p className="mb-0 ">23.25%</p></strong>
                                        </div>
                                        <div className="d-flex justify-content-between w-100">
                                            <div className="d-flex align-items-center">
                                                <img src={poolsimg2} className="img-fluid" style={{ width: "30px" }} />
                                                <p className="mb-0 ml-2 ">SOV</p>
                                            </div>
                                            <div id="div-desktop">
                                                <p className="mb-0 ">50% 100,000,000</p>
                                            </div>
                                            <div id="div-mobile">
                                                <p className="mb-0 ">50%</p>
                                                <p className="mb-0 ">100,000,000</p>
                                            </div>
                                            <strong><p className="mb-0 ">23.25%</p></strong>
                                        </div>
                                    </div>


                                    <div className="align-items-center d-flex value-right">
                                        <strong><p className="mb-0 ">23.25%</p></strong>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="market-ratio-earn-right">
                        <div className="row align-items-center ">
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="d-flex flex-column w-100">
                                        <div className="d-flex justify-content-between w-100 mb-2">
                                            <div className="d-flex align-items-center">
                                                <img src={poolsimg1} className="img-fluid" style={{ width: "30px" }} />
                                                <p className="mb-0 ml-2 ">SOV</p>
                                            </div>
                                            <div id="div-desktop">
                                                <p className="mb-0 ">50% 100,000,000</p>
                                            </div>
                                            <div id="div-mobile">
                                                <p className="mb-0 ">50%</p>
                                                <p className="mb-0 ">100,000,000</p>
                                            </div>
                                            <strong><p className="mb-0 ">23.25%</p></strong>
                                        </div>
                                        <div className="d-flex justify-content-between w-100">
                                            <div className="d-flex align-items-center">
                                                <img src={poolsimg2} className="img-fluid" style={{ width: "30px" }} />
                                                <p className="mb-0 ml-2 ">SOV</p>
                                            </div>
                                            <div id="div-desktop">
                                                <p className="mb-0 ">50% 100,000,000</p>
                                            </div>
                                            <div id="div-mobile">
                                                <p className="mb-0 ">50%</p>
                                                <p className="mb-0 ">100,000,000</p>
                                            </div>
                                            <strong><p className="mb-0 ">23.25%</p></strong>
                                        </div>
                                    </div>


                                    <div className="align-items-center d-flex value-right">
                                        <strong><p className="mb-0 ">23.25%</p></strong>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

