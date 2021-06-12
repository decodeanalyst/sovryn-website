import React from "react";
import "../styles/StakeInfoSection.scss";
import StyledButton from "../components/StyledButton";

export default function StakeInfoSection() {
    return (
        <>
            <div className="container-fluid" id="div-desktop">
                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="stake-hero-layer-hero">
                                    <div className="stake-hero-label">
                                        <h3>Where and how can I get SOV?</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8 col-sm-8 top-120">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <h4 className="lend-box-headding">1. Swap your crypto asset for SOV on Sovryn</h4>
                                        <div class="stake-text">
                                            <div class="p-1 lend-format">
                                                <div className="lend-format p-2"><p>
                                                    Go to Sovryn dapp and instantly swap you token for SOV
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6">
                                        <h4 className="lend-box-headding">2. Contribute to the project and earn bounty in SOV token</h4>
                                        <div class="stake-text">
                                            <div class="p-1 lend-format">
                                                <div className="lend-format p-2"><p>
                                                    Participate in Sovryn’s bounty programs to earn SOV. Learn more
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <h4 className="lend-box-headding">3. Earn SOV by becoming a liquidity provider</h4>
                                        <div class="stake-text">
                                            <div class="p-1 lend-format">
                                                <div className="lend-format p-2"><p>
                                                    When you stake your funds in Sovryn smart contract to provide liquidity to the protocol, you can choose to earn interest in either the native token or SOV.
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6">
                                        <h4 className="lend-box-headding">4. Buy SOV on Exchanges</h4>
                                        <div class="stake-text stake-top-30">
                                            <div class="p-1 lend-format">
                                                <div className="lend-format p-2"><p>
                                                    SOV is currently listed on XYZ, ABC & CDY and can be directly bought from these exchanges.
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>



                                <div className="row mt-3">
                                    <div className="col-md-4" id="div-desktop"></div>
                                    <div className="col-md-4">
                                        <div className="d-flex justify-content-center">
                                            <StyledButton text="buy sov" pageName="" />
                                        </div>
                                    </div>
                                    <div className="col-md-4" id="div-desktop"></div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>





            </div> {/* div end */}

            <div className="container-fluid" id="div-mobile">
                <div className="row mt-2">
                    <div className="col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="stake-hero-label-mob">
                                    <h3>Where and how can I get SOV?</h3>
                                </div>
                            </div>

                            <div className="col-md-8 col-sm-8 mt-3">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <h4 className="lend-box-headding">1. Swap your crypto asset for SOV on Sovryn</h4>
                                        <div class="stake-text">
                                            <div class="p-1 lend-format">
                                                <div className="lend-format p-2"><p>
                                                    Go to Sovryn dapp and instantly swap you token for SOV
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6">
                                        <h4 className="lend-box-headding">2. Contribute to the project and earn bounty in SOV token</h4>
                                        <div class="stake-text">
                                            <div class="p-1 lend-format">
                                                <div className="lend-format p-2"><p>
                                                    Participate in Sovryn’s bounty programs to earn SOV. Learn more
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <h4 className="lend-box-headding">3. Earn SOV by becoming a liquidity provider</h4>
                                        <div class="stake-text">
                                            <div class="p-1 lend-format">
                                                <div className="lend-format p-2"><p>
                                                    When you stake your funds in Sovryn smart contract to provide liquidity to the protocol, you can choose to earn interest in either the native token or SOV.
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6">
                                        <h4 className="lend-box-headding">4. Buy SOV on Exchanges</h4>
                                        <div class="stake-text stake-top-30">
                                            <div class="p-1 lend-format">
                                                <div className="lend-format p-2"><p>
                                                    SOV is currently listed on XYZ, ABC & CDY and can be directly bought from these exchanges.
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>



                                <div className="row mt-5">
                                    <div className="col-md-4" id="div-desktop"></div>
                                    <div className="col-md-4">
                                        <div className="d-flex justify-content-center">
                                            <StyledButton text="buy sov" pageName="" />
                                        </div>
                                    </div>
                                    <div className="col-md-4" id="div-desktop"></div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
