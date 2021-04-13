import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import InfoLabel from "../components/InfoLabel";
import SignupComponent from '../components/SignupComponent';
import SocialFooterLinks from '../components/SocialFooterLinks';
import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";
import '../styles/mobileindex.scss'


 
export default function mobileindex() {
 
    return (
        <>
            <DefaultLayout>
                <div className="row">
                    <div className="col-md-12">
                        {/* **hero frame** */}
                    </div>
                    <div className="col-md-6">
                        {/* **info label 1** */}
                    </div>
                    <div className="col-md-6">
                        {/* **info label 2** */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {/* **add frame component instead of frame1 class** */}
                        <div className="frame1"></div>
                    </div>
                    <div className="col-md-12 pt-2">
                        <div className="textbox1 p-3 text-left">
                            <h3>
                                Sovryn is a non-custodial and permissionless smart contract
                                based system for Bitcoin lending, borrowing and margin trading.
                            </h3>
                        </div>
                    </div>
                    <div className="col-md-12 pt-3 justify-content-center">
                        <div className="d-flex d-inline-block">
                            <div class="x1">
                                1.<span></span>
                            </div>
                            <div class="theCryptoExchangeThatSatoshiWouldUse">
                                The crypto exchange <br />that satoshi would use
                            </div>
                        </div>
                        <div className="pt-2"></div>
                        <div className="rectangle2820">
                            <div className="sovrynExpands p-2">
                                Sovryn expands on Satoshi’s vision by providing OG bitcoiners with the non-custodial and permissionless, smart contract based Bitcoin-native system for Bitcoin lending, borrowing and margin trading.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 pt-3 justify-content-center">
                        <div className="d-flex d-inline-block">
                            <div class="x1">
                                2.<span></span>
                            </div>
                            <div class="theCryptoExchangeThatSatoshiWouldUse">
                                Your Keys <br /> your control
                            </div>
                        </div>
                        <div className="pt-2"></div>
                        <div className="rectangle2820">
                            <div className="sovrynExpands p-2">
                            Earn yield on your Bitcoin, trade cryptocurrencies, borrow and lend on Sovryn’s open, fair and transparent financial system directly from your wallet.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 pt-3 justify-content-center">
                        <div className="d-flex d-inline-block">
                            <div class="x1">
                                3.<span></span>
                            </div>
                            <div class="theCryptoExchangeThatSatoshiWouldUse">
                            Escape <br />centralisation
                            </div>
                        </div>
                        <div className="pt-2"></div>
                        <div className="rectangle2820">
                            <div className="sovrynExpands p-2">
                            Sovryn is the next step in bitcoin’s evolution. Bitcoiners never have to give away their keys to a centralised service again. Every transaction on Sovryn is secured by the Bitcoin miners and every transaction is pseudonymous, giving you back your sovereignty.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                <div className="col-sm-12">
                    <div className="slantedrectangle-mob text-black-mob p-2">
                                Try SOVRYN’s Bitcoin native trading and lending platform
                    </div>
                </div>
                <div className="col-sm-12 pt-3">
                    <div className="rectangle1-mob">
                        <div className="rectangle-text-mob">
                            SWAP
                        </div>
                        </div>
                        <div className="p-2"></div>
                        <div className="whitebox-mob">
                            <div className="swapYourCryptoNearInstantlyWithoutAMiddleManAndWithoutGivingUpYourKeysLearnMore p-2"> 
                                Swap your crypto near instantly, without a middle man and without giving up your keys. <span className="text-warning btn-link">Learn more</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                <div className="col-sm-12">
                    <div className="rectangle2-mob">
                        <div className="rectangle-text-mob">
                            MARGIN TRADE
                        </div>
                        </div>
                        <div className="p-2"></div>
                        <div className="whitebox-mob">
                            <div className="swapYourCryptoNearInstantlyWithoutAMiddleManAndWithoutGivingUpYourKeysLearnMore p-2"> 
                                Swap your crypto near instantly, without a middle man and without giving up your keys. <span className="text-warning btn-link">Learn more</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                <div className="col-sm-12">
                    <div className="rectangle3-mob">
                        <div className="rectangle-text-mob">
                            STAKE
                        </div>
                        </div>
                        <div className="p-2"></div>
                        <div className="whitebox-mob">
                            <div className="swapYourCryptoNearInstantlyWithoutAMiddleManAndWithoutGivingUpYourKeysLearnMore p-2"> 
                                Swap your crypto near instantly, without a middle man and without giving up your keys. <span className="text-warning btn-link">Learn more</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                <div className="col-sm-12">
                    <div className="rectangle4-mob">
                        <div className="rectangle-text-mob">
                            BORROW
                        </div>
                        </div>
                        <div className="p-2"></div>
                        <div className="whitebox-mob">
                            <div className="swapYourCryptoNearInstantlyWithoutAMiddleManAndWithoutGivingUpYourKeysLearnMore p-2"> 
                                Swap your crypto near instantly, without a middle man and without giving up your keys. <span className="text-warning btn-link">Learn more</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                <div className="col-sm-12">
                    <div className="rectangle5-mob">
                        <div className="rectangle-text-mob">
                            LEND
                        </div>
                        </div>
                        <div className="p-2"></div>
                        <div className="whitebox-mob">
                            <div className="swapYourCryptoNearInstantlyWithoutAMiddleManAndWithoutGivingUpYourKeysLearnMore p-2"> 
                                Swap your crypto near instantly, without a middle man and without giving up your keys. <span className="text-warning btn-link">Learn more</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                <div className="col-sm-12">
                    <div className="rectangle6-mob">
                        <div className="rectangle-text-mob">
                            LIQUIDITY
                        </div>
                        </div>
                        <div className="p-2"></div>
                        <div className="whitebox-mob">
                            <div className="swapYourCryptoNearInstantlyWithoutAMiddleManAndWithoutGivingUpYourKeysLearnMore p-2"> 
                                Swap your crypto near instantly, without a middle man and without giving up your keys. <span className="text-warning btn-link">Learn more</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pl-5 pt-3">
                <StyledButton text="GO TO DAPP" pageName="" />
                </div>
                <div className="row pt-5">
                    <div className="col-md-5">
                            <div className="pl-3">
                                <div className="rectangle1687-mob"> 
                                    <div className="text-black-mob p-2">
                                        Participate in Sovryn Governance & earn fees
                                    </div>
                                </div>
                            </div>
                            <div className="whitebox2-mob p-3 text-left">
                                Sovryn is the first truly decentralised system where SOV token holders <br /> decide the free market. SOV token holders vote on how the first <br /> decentralised system built on Bitcoin will evolve and also earn fees for <br /> providing governance to the SOVRYN protocol.
                            </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-md-2">
                    <InfoLabel figtxt="50,000,000" exptxt="sov remaining" />
                    </div>
                    <div className="col-md-2">
                    <InfoLabel figtxt="1540" exptxt="VOTING ADDRESSES" />
                    </div>
                </div>
                <div className="row pt-2">
                <StyledButton text="buy sov" pageName="" />
                </div>
                <div className="row pt-2" >
                    <center>
                    <StyledButton1 text="how is sov governed?" pageName="" />
                    </center>
                </div>
                <div className="row pt-5">
                    {/* **insert frame for trending component** */}
                </div>
                <div className="row pt-2">
                    {/* **add trending component** */}
                </div>
                <div className="row pt-5 pl-4">
                    <h2 className="text-justify">
                        JOIN FOLLOW OG BITCOINERS AT SOVRYN
                    </h2>
                    <div className="col-md-2"></div>
                    <div className="brownbox-mob">
                        <div className="col-md-12">
                            <div className=" d-flex justify-content-center">
                                <div className="signUpboxText pt-3">
                                Sign up for ecosystem news and updates. Privacy is our policy and all Sovryn users are anonymous. 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 pt-3 pr-5">
                            <div className=" d-flex justify-content-center">
                            <div className="p-2"></div>
                            <SignupComponent />
                            </div>
                        </div>
                        <div className="col-md-12 pt-3 pr-5 pb-3">
                            <div className=" d-flex justify-content-center">
                                <div className="p-2"></div>
                                <SocialFooterLinks />
                          </div>
                          <div className="pb-3"></div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}
