import React from "react";
import "../styles/trading.scss";

import StyledButton from "../components/StyledButton";

export default function Trading() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="d-flex justify-content-center">
                        <div className="slantedrectangle text-center">
                            <h1 class="text-black">
                                Try SOVRYN’s Bitcoin native trading and lending platform
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-lg-4">
                    <div className="rectangle1">
                            <div className="swap">
                                SWAP
                            </div>
                    </div>
                    <div className="p-2"></div>
                    <div className="whitebox">
                        <div className="swapYourCryptoNearInstantlyWithoutAMiddleManAndWithoutGivingUpYourKeysLearnMore p-2"> 
                            Swap your crypto near instantly, without a middle man and without giving up your keys. <span className="text-warning btn-link">Learn more</span>
                        </div>
                    </div>
                    <div className="p-2"></div>
                    <StyledButton text="go to swap" pageName="" />
                </div>
                <div className="col-lg-4">
                    <div className="rectangle2">
                            <div className="swap">MARGIN TRADE</div>
                    </div>
                    <div className="p-2"></div>
                    <div className="whitebox">
                        <div className="swapYourCryptoNearInstantlyWithoutAMiddleManAndWithoutGivingUpYourKeysLearnMore p-2"> 
                            Swap your crypto near instantly, without a middle man and without giving up your keys. <span className="text-warning btn-link">Learn more</span>
                        </div>
                    </div>
                    <div className="p-2"></div>
                    <StyledButton text="go to margin trade" pageName="" />
                </div>
                <div className="col-lg-4">
                    <div className="rectangle3">
                            <div className="swap">STAKE</div>
                    </div>
                    <div className="p-2"></div>
                    <div className="whitebox">
                        <div className="swapYourCryptoNearInstantlyWithoutAMiddleManAndWithoutGivingUpYourKeysLearnMore p-2"> 
                        Swap your crypto near instantly, without a middle man and without giving up your keys. <span className="text-warning btn-link">Learn more</span>
                        </div>
                    </div>
                    <div className="p-2"></div>
                    <StyledButton text="go to stake" pageName="" />
                </div>
            </div>
            <div className="p-3"></div> 
            <div className="row">
                <div className="col-lg-4">
                    <div className="rectangle4">
                            <div className="swap">
                                BORROW
                            </div>
                    </div>
                    <div className="p-2"></div>
                    <div className="whitebox">
                        <div className="swapYourCryptoNearInstantlyWithoutAMiddleManAndWithoutGivingUpYourKeysLearnMore p-2"> 
                            Swap your crypto near instantly, without a middle man and without giving up your keys. <span className="text-warning btn-link">Learn more</span>
                        </div>
                    </div>
                    <div className="p-2"></div>
                    <StyledButton text="go to borrow" pageName="" />
                </div>
                <div className="col-lg-4">
                    <div className="rectangle5">
                            <div className="swap">LEND</div>
                    </div>
                    <div className="p-2"></div>
                    <div className="whitebox">
                        <div className="swapYourCryptoNearInstantlyWithoutAMiddleManAndWithoutGivingUpYourKeysLearnMore p-2"> 
                            Swap your crypto near instantly, without a middle man and without giving up your keys. <span className="text-warning btn-link">Learn more</span>
                        </div>
                    </div>
                    <div className="p-2"></div>
                    <StyledButton text="go to lend" pageName="" />
                </div>
                <div className="col-lg-4">
                    <div className="rectangle6">
                            <div className="swap">LIQUIDITY</div>
                    </div>
                    <div className="p-2"></div>
                    <div className="whitebox">
                        <div className="swapYourCryptoNearInstantlyWithoutAMiddleManAndWithoutGivingUpYourKeysLearnMore p-2"> 
                        Swap your crypto near instantly, without a middle man and without giving up your keys. <span className="text-warning btn-link">Learn more</span>
                        </div>
                    </div>
                    <div className="p-2"></div>
                    <StyledButton text="go to liquidity" pageName="" />
                </div>
            </div>
        </div>
    )
}
