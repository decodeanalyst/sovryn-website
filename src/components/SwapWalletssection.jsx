import React from "react";
import "../styles/SwapWalletssection.scss";

export default function SwapWalletssection() {
    return (
        <>

            <div className="container-fluid" id="div-desktop">
                <div className="row mt-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="d-flex changeside">
                            <div className="swap-wallet-slanted-rectangle text-center">
                                <h1 class="swap-wallet-text-black">
                                    Supported wallets
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-11 mx-auto">
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="swap-group5812">
                                <div className="swaplearn-rectangle-info">
                                    <div className="swaplearn-sovrynExpands p-2">
                                        <div className="swapwallet-rectangle-info-1"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div class="swap-group5812">
                                <div className="swaplearn-rectangle-info">
                                    <div className="swaplearn-sovrynExpands p-2">
                                        <div className="swapwallet-rectangle-info-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="swap-group5812">
                                <div className="swaplearn-rectangle-info">
                                    <div className="swaplearn-sovrynExpands p-2">
                                        <div className="swapwallet-rectangle-info-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="col-md-11 mx-auto mt-5">
                    <div className="col-lg-5 col-md-5 col-sm-5 float-left">
                        <div className="swapwallet-slantedrectangle-small text-center">
                            <p class="swapwallet-text-headding-small">
                                Don’t see your wallet here?
                    </p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7 float-right">
                        <div className="swapwallet-slantedrectangle text-center">
                            <p class="swapwallet-text-headding">
                                No worries, every wallet that gives you access to the private keys can be connected with Sovryn. Just connect it to Metamask using the instructions here.
                    </p>
                        </div>
                    </div>
                </div>














            </div>



            <div className="container" id="div-mobile">

<div className="row mt-5">
    <div className="col-md-12 col-sm-12">
    <div className="d-flex changeside">
                            <div className="swap-wallet-slanted-rectangle-mob text-center">
                                <h1 class="swap-wallet-text-black-mob">
                                    Supported wallets
                                </h1>
                            </div>
                        </div>
    </div>
</div>


                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12">
                        <div class="swap-group5812">
                            <div className="swaplearn-rectangle-info-mob">
                                <div className="swaplearn-sovrynExpands-mob p-2">
                                    <div className="swapwallet-rectangle-info-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12">
                        <div class="swap-group5812">
                            <div className="swaplearn-rectangle-info-mob">
                                <div className="swaplearn-sovrynExpands-mob p-2">
                                    <div className="swapwallet-rectangle-info-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12">
                        <div class="swap-group5812">
                            <div className="swaplearn-rectangle-info-mob">
                                <div className="swaplearn-sovrynExpands-mob p-2">
                                    <div className="swapwallet-rectangle-info-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12 ">
                        <div className="swapwallet-slantedrectangle-small-mob text-center">
                            <p class="swapwallet-text-headding-small-mob">
                                Don’t see your wallet here?
                    </p>
                        </div>
                    </div>
                </div>



                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12">
                    <div className="swapwallet-slantedrectangle-mob text-center">
                            <p class="swapwallet-text-headding-mob">
                            No worries, every wallet that gives you access to the private keys can be connected with Sovryn. Just connect it to Metamask using the instructions here. 
                    </p>
                        </div>
                    </div>
                </div>


                

            </div>

        </>
    )
}
