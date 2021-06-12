import React from "react";
import "../styles/websiteinfo.scss";
import img from "../static/rectangle2744.png";
import MobLabeledFrame from "../components/MobLabeledFrame";
import Home from '../static/home-page/HOME_.png'
export default function WebsiteInfo() {
    return (
        <>
            <div className="container" id="div-desktop">
                <div className="row">
                    <div className="col-md-4">
                        <div className="rectangle2744">
                            {/* <img src={Home} /> */}
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div class="rectangle1700">
                            <div class="infolabel p-3">
                                Sovryn is a non-custodial and permissionless smart contract
                                            <br />
                                            based system for Bitcoin lending, borrowing and margin trading.
                                        </div>
                        </div>
                        {/* <div className="row d-flex d-inline-block"> */}
                        {/* <div className="d-flex">
                                <div className="col-lg-4 pr-3 pt-5">
                                    <div class="group5812">
                                        <div className="d-flex d-inline-block">
                                            <div class="x1">
                                                1.<span></span>
                                            </div>
                                            <div class="theCryptoExchangeThatSatoshiWouldUse">
                                                The crypto exchange <br />that satoshi would use
                                            </div>
                                        </div>
                                        <div className="rectangle-info">
                                            <div className="sovrynExpands p-2">
                                                Sovryn expands on Satoshi’s vision by providing OG bitcoiners with the non-custodial and permissionless, smart contract based Bitcoin-native system for Bitcoin lending, borrowing and margin trading.
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 pt-5">
                                    <div className="group5813">
                                        <div className="d-flex d-inline-block">
                                            <div className="x2">
                                                2.
                                            </div>
                                            <div className="yourKeysYourControl">
                                                Your keys, <br />your control
                                            </div>
                                        </div>
                                        <div class="rectangle-info">
                                            <div class="earnYield p-2">
                                                Earn yield on your Bitcoin, trade cryptocurrencies, borrow and lend on Sovryn’s open, fair and transparent financial system directly from your wallet.
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 pt-5">
                                    <div className="group5814">
                                    <div className="d-flex d-inline-block">
                                        <div className="x3">
                                            3.
                                        </div>
                                        <div className="escapeCentralisation P-3">
                                            Escape <br />centralisation
                                        </div>
                                        </div>
                                        <div className="rectangle-info">
                                            <div className="sovrynIs p-2">
                                                Sovryn is the next step in bitcoin’s evolution. Bitcoiners never have to give away their keys to a centralised service again. Every transaction on Sovryn is secured by the Bitcoin miners and every transaction is pseudonymous, giving you back your sovereignty.
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        <div className="row">
                            <div className="col-md-4">
                                <div class="group5812">
                                    <div className="d-flex d-inline-block">
                                        <div class="x1">
                                            1.<span></span>
                                        </div>
                                        <div class="theCryptoExchangeThatSatoshiWouldUse">
                                            The crypto exchange <br />that satoshi would use
                                            </div>
                                    </div>
                                    <div className="rectangle-info">
                                        <div className="sovrynExpands p-2">
                                            Sovryn expands on Satoshi’s vision by providing OG bitcoiners with the non-custodial and permissionless, smart contract based Bitcoin-native system for Bitcoin lending, borrowing and margin trading.
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="group5813">
                                    <div className="d-flex d-inline-block">
                                        <div className="x2">
                                            2.
                                            </div>
                                        <div className="yourKeysYourControl">
                                            Your keys, <br />your control
                                            </div>
                                    </div>
                                    <div class="rectangle-info">
                                        <div class="earnYield p-2">
                                            Earn yield on your Bitcoin, trade cryptocurrencies, borrow and lend on Sovryn’s open, fair and transparent financial system directly from your wallet.
                                                </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="group5814">
                                    <div className="d-flex d-inline-block">
                                        <div className="x3">
                                            3.
                                        </div>
                                        <div className="escapeCentralisation P-3">
                                            Escape <br />centralisation
                                        </div>
                                    </div>
                                    <div className="rectangle-info">
                                        <div className="sovrynIs p-2">
                                            Sovryn is the next step in bitcoin’s evolution. Bitcoiners never have to give away their keys to a centralised service again. Every transaction on Sovryn is secured by the Bitcoin miners and every transaction is pseudonymous, giving you back your sovereignty.
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* </div> */}
                    </div>
                </div>
            </div>


            <div id="div-mobile">
                <div className="col-xs-12 pt-3 justify-content-center pl-4 pr-3">
                    <MobLabeledFrame figtxt="" img={img} banner={false} pageStyle="blog" />
                </div>
                <div className="col-xs-12 pt-3 pl-3 pr-3">
                    <div className="textbox1-webinfo text-left p-2">
                        <h3>
                            Sovryn is a non-custodial and permissionless smart contract
                            based system for Bitcoin lending, borrowing and margin trading.
                            </h3>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12 pt-3 justify-content-center pl-3 pr-3">

                    <div className="col-md-12 col-sm-12 col-xs-4 col-lg-4 pr-3 pt-5">
                        <div class="group5812">
                            <div className="d-flex d-inline-block">
                                <div class="x1">
                                    1.<span></span>
                                </div>
                                <div class="theCryptoExchangeThatSatoshiWouldUse">
                                    The crypto exchange <br />that satoshi would use
                                            </div>
                            </div>
                            <div className="rectangle-info">
                                <div className="sovrynExpands p-2">
                                    Sovryn expands on Satoshi’s vision by providing OG bitcoiners with the non-custodial and permissionless, smart contract based Bitcoin-native system for Bitcoin lending, borrowing and margin trading.
                                        </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-4 col-lg-4 pt-5">
                        <div className="group5813">
                            <div className="d-flex d-inline-block">
                                <div className="x2">
                                    2.
                                            </div>
                                <div className="yourKeysYourControl">
                                    Your keys, <br />your control
                                            </div>
                            </div>
                            <div class="rectangle-info">
                                <div class="earnYield p-2">
                                    Earn yield on your Bitcoin, trade cryptocurrencies, borrow and lend on Sovryn’s open, fair and transparent financial system directly from your wallet.
                                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-4 col-lg-4 pt-5">
                        <div className="group5814">
                            <div className="d-flex d-inline-block">
                                <div className="x3">
                                    3.
                                        </div>
                                <div className="escapeCentralisation P-3">
                                    Escape <br />centralisation
                                        </div>
                            </div>
                            <div className="rectangle-info">
                                <div className="sovrynIs p-2">
                                    Sovryn is the next step in bitcoin’s evolution. Bitcoiners never have to give away their keys to a centralised service again. Every transaction on Sovryn is secured by the Bitcoin miners and every transaction is pseudonymous, giving you back your sovereignty.
                                    </div>
                            </div>
                        </div>
                    </div>



                    {/* <div className="d-flex d-inline-block">
                            <div class="x1-webinfo">
                                1.<span></span>
                            </div>
                            <div class="theCryptoExchangeThatSatoshiWouldUse-webinfo">
                                The crypto exchange <br />that satoshi would use
                            </div>
                        </div>
                        <div className="pt-3"></div>
                        <div className="rectangle2820-webinfo">
                            <div className="sovrynExpands-webinfo p-2">
                                Sovryn expands on Satoshi’s vision by providing OG bitcoiners with the non-custodial and permissionless, smart contract based Bitcoin-native system for Bitcoin lending, borrowing and margin trading.
                            </div>
                        </div>
                        
                        <div className="d-flex d-inline-block pt-3">
                            <div class="x1-webinfo">
                                2.<span></span>
                            </div>
                            <div class="theCryptoExchangeThatSatoshiWouldUse-webinfo">
                                Your Keys <br /> your control
                            </div>
                        </div>
                        <div className="pt-3"></div>
                        <div className="rectangle2820-webinfo">
                            <div className="sovrynExpands-webinfo p-2">
                            Earn yield on your Bitcoin, trade cryptocurrencies, borrow and lend on Sovryn’s open, fair and transparent financial system directly from your wallet.
                            </div>
                        </div>
                        
                        <div className="d-flex d-inline-block pt-3">
                            <div class="x1-webinfo">
                                3.<span></span>
                            </div>
                            <div class="theCryptoExchangeThatSatoshiWouldUse-webinfo">
                            Escape <br />centralisation
                            </div>
                        </div>
                        <div className="pt-3"></div>
                        <div className="rectangle2820-webinfo p-2">
                            <div className="sovrynExpands-webinfo p-2">
                                Sovryn is the next step in bitcoin’s evolution. Bitcoiners never have to give away their keys to a centralised service again. Every transaction on Sovryn is secured by the Bitcoin miners and every transaction is pseudonymous, giving you back your sovereignty.
                            </div>
                        </div> */}

                </div>
            </div>
        </>
    )
}
