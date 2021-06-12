import React from "react";
import "../styles/PositionpageHeroSection.scss";
import arrow from "../static/arrow.jpeg"
import StyledButton from "../components/StyledButton";
import PositionButton from "../components/PositionButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PositionpageHeroSection() {
    return (
        <>
            <div className="container-fluid" id="div-desktop">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="col-md-6 float-left">
                            <div className="position-hiring-layer-env-hero">
                            </div>
                        </div>
                        <div className="col-md-6 float-left mtp-90">
                            <div className="col-md-12 col-sm-12">
                                <div className="position-hiring-hero-section-headding align-items-start ml-3">
                                    <div className="position-headding align-items-start">
                                        <h3>Solidity Developer</h3>
                                    </div>
                                </div>
                            </div>


                            <div className="row col-md-12 col-sm-12">
                                <div className="col-md-6 col-sm-6 fltlft">
                                    <ul className="d-inline-block d-flex">
                                        <li className="list-inline-item li">
                                            <a className="icons ulico" href="https://t.me/SovrynBitcoin">
                                                <FontAwesomeIcon icon={['fab', 'telegram']} size="3x" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item li">
                                            <a className="icons ulico" href="https://twitter.com/SovrynBTC">
                                                <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" mask={['fas', 'circle']} transform="shrink-5" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="row col-md-12 col-sm-12">
                                <div className="col-md-6 col-sm-6">
                                    <PositionButton text="Full-time" pageName="" />
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <PositionButton text="Remote" pageName="" />
                                </div>
                            </div>


                            {/* <div class="position-hiring-hero-section-text">
                                <div class="p-3 position-hiring-hero-format">
                                    <div className="position-hiring-hero-text-format p-2 mt-3 ml-5">
                                        <p>
                                            We at Sovryn are agile, and driven by a strong sense of purpose and a deeply rooted sense of community that is collaborative, fast-growing and has to date raised $16 million from top drawer Investor groups and public presales of our native token, SOV.
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-12 col-sm-12">
                                <div class="stake-text">
                                    <div class="p-1 position-hiring-format">
                                        <div className="position-hiring-format p-2"><p>
                                            When you stake your funds in Sovryn smart contract to provide liquidity to the protocol, you can choose to earn interest in either the native token or SOV.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid" id="div-mobile">
                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12">
                        <div className="position-hiring-hero-section-headding align-items-start ml-3">
                            <div className="position-headding align-items-start">
                                <h3>SIP 0004 Outcome: DeFi Governance in Action</h3>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-3">
                    <div className="col-md-12 col-sm-12 mrglftmob">
                        <ul className="d-inline-block d-flex float-left">
                            <li className="list-inline-item li">
                                <a className="icons ulico" href="https://t.me/SovrynBitcoin">
                                    <FontAwesomeIcon icon={['fab', 'telegram']} size="3x" />
                                </a>
                            </li>
                            <li className="list-inline-item li">
                                <a className="icons ulico" href="https://twitter.com/SovrynBTC">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" mask={['fas', 'circle']} transform="shrink-5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="row">
                        <div className="col-6 py-4 lendpage-mob-btn">
                            <PositionButton text="Full-time" pageName="" />
                        </div>
                        <div className="col-6 py-4 lendpage-mob-btn">
                            <PositionButton text="Remote" pageName="" />
                        </div>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12">
                        <div className="position-hiring-hero-section-headding align-items-start ml-3">
                            <div className="position-hiring-layer-env-hero-mob">
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12">
                        <div class="stake-text-mob">
                            <div class="p-1 position-hiring-format">
                                <div className="position-hiring-format p-2"><p>
                                    We at Sovryn are agile, and driven by a strong sense of purpose and a deeply rooted sense of community that is collaborative, fast-growing and has to date raised $16 million from top drawer Investor groups and public presales of our native token, SOV.
                                            </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}