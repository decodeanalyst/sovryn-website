import React from "react";
import "../styles/BorrowPageInfoSection.scss";
import StyledButton from "../components/StyledButton";


export default function BorrowPageInfoSection() {
    return (
        <>
       <div className="container-fluid" id="div-desktop">
                <div className="row mt-5">
                <div className="col-md-12">
                <div className="col-md-6 float-left">
                <div className="frame-label">
                                    <h4>Avoid loosing long exposure to your crypto assets, 
                                        take a crypto loan for your daily liquidity</h4>
                                </div>
                            <div className="borrow-layer-env-hero mt-5">
                            </div>
                            <div class="float-left btn-width-50 mt-5">
                                <StyledButton text="BORROW CRYPTO" pageName="" />
                            </div>
                        </div>
                        <div className="col-md-6 float-left">
                            <div className="col-md-12">
                                   <div class="borrow-info-section-sidebox">
                                    <div class="p-3 borrowpage-us-hero-format">
                                    <div className="about-us-hero-text-format">
                                            <h4>WE PROVIDE LONG TERM CRYPTO LOANS, REALLY LONG!</h4>
                                            <p>
                                                Never loose long exposure to your underlying asset.
                                                Borrow for indefinite periods just keep your loan 
                                                health positive by maintaining the LTV
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">    
                                <div class="borrow-info-section-sidebox">
                                    <div class="p-3 borrowpage-us-hero-format">
                                        <div className="about-us-hero-text-format">
                                            <h4>partial liquidations to keep your collateral safe</h4>
                                            <p>
                                                Undercollateralized positions and minimally liquidated.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div class="borrow-info-section-sidebox">
                                    <div class="p-3 borrowpage-us-hero-format">
                                        <div className="about-us-hero-text-format">
                                            <h4>THE OG way to borrow</h4>
                                            <p>
                                            Borrow crypto without trusting a central party 
                                            with your funds. Your collateral is secured in an 
                                            autonomous smart contract which undergoes regular 
                                            security audits from multiple auditors, is open
                                            source and maintains a bug bounty. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div class="borrow-info-section-sidebox">
                                    <div class="p-3 borrowpage-us-hero-format">
                                    <div className="about-us-hero-text-format">
                                            <h4>bad credit? No problem!</h4>
                                            <p>
                                            Sovryn is a decentralised lending, borrowing and trading 
                                            platform. There is no KYC, AML verfification or credit checks
                                            ever. Preserve your pseudonymity.
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
                <div className="col-md-12">
                <div className="col-md-6 float-left">
                <div className="borrow-layer-env-hero mt-5 mb-5">
                            </div>

                <div>
                                    <h4>Avoid loosing long exposure to your crypto assets, 
                                        take a crypto loan for your daily liquidity</h4>
                                </div>
                           
                          
                        </div>
                        <div className="col-md-6 float-left mt-3">
                            <div className="col-md-12">
                                   <div className="borrow-info-section-sidebox-mob">
                                    <div className="p-3 borrowpage-us-hero-format">
                                    <div className="about-us-hero-text-format">
                                            <h4>WE PROVIDE LONG TERM CRYPTO LOANS, REALLY LONG!</h4>
                                            <p>
                                                Never loose long exposure to your underlying 
                                                asset. Borrow for indefinite periods just keep 
                                                your loan health positive by maintaining the LTV
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">    
                                <div className="borrow-info-section-sidebox-mob">
                                    <div className="p-3 borrowpage-us-hero-format">
                                        <div className="about-us-hero-text-format">
                                            <h4>partial liquidations to keep your collateral safe</h4>
                                            <p>
                                                Undercollateralized positions and minimally liquidated.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="borrow-info-section-sidebox-mob">
                                    <div className="p-3 borrowpage-us-hero-format">
                                        <div className="about-us-hero-text-format">
                                            <h4>THE OG way to borrow</h4>
                                            <p>
                                            Borrow crypto without trusting a central party 
                                            with your funds. Your collateral is secured in an 
                                            autonomous smart contract which undergoes regular 
                                            security audits from multiple auditors, is open
                                            source and maintains a bug bounty. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="borrow-info-section-sidebox-mob">
                                    <div className="p-3 borrowpage-us-hero-format">
                                    <div className="about-us-hero-text-format">
                                            <h4>bad credit? No problem!</h4>
                                            <p>
                                            Sovryn is a decentralised lending, borrowing and trading 
                                            platform. There is no KYC, AML verfification or credit checks
                                            ever. Preserve your pseudonymity.
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        
                            <div className="float-left btn-width-60-mob mt-5">
                                <StyledButton text="BORROW CRYPTO" pageName="" />
                            </div>
                        
                        </div>
                    </div>
                </div>
        </div>
       
        </>
    )
}
