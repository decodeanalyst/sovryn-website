import React from "react";
import "../styles/StakeHeroSection.scss";
import StyledButton from "../components/StyledButton";
import InfoLabel from "../components/InfoLabel";
import StyledButton1 from "../components/StyledButton1";
import image from "../static/dumy.png";
export default function StakeHeroSection() {
    return (
        <>
       <div className="container-fluid" id="div-desktop">


       <div className="row mt-5">
                <div className="row col-md-12">
                    <div className="col-md-5 float-left">
                        <div className="stake-layer-env-hero">
                            <div className="stake-label">
                                <h3>SOV: The protocol token of biggest DeFi on Bitcoin</h3>
                            </div>
                            <div className="stake-inner-text p-3 text-left stake-text-wrap-mob">
                            <h3>SOV IS A TOKEN WITH INTRISTIC VALUE</h3>
                            </div>
                        </div>

                        <div className="row col-md-12 margin-auto mt-4">
                        <h4 className="stake-box-headding">• SOV Is not another altcoin</h4>
                    </div>
                    <div className="row col-md-12 margin-auto mt-4">
                        <h4 className="stake-box-headding">• SOV stakers earn the fees from the sovryn protocol for providing decentralized governanve</h4>
                    </div>
                    <div className="row col-md-12 margin-auto mt-4">
                        <h4 className="stake-box-headding">• SOV stakers get right to vote on how the first decentralized system will evolve </h4>
                    </div>


                    <div className="row col-md-12 float-left mt-5">
                        <div className="col-md-8">
                            <div class="float-left btn-width-100">
                            <StyledButton text="SOV Tokenomics" pageName="" />
                            </div>
                        </div>                    
                     </div>


                    </div>
                    
                   


                    
                        <div className="col-md-7 float-right">
                        {/* <div className="stake-layer-hero-1 stakeframeheroimg">  
                        </div>      */}
                        <img className="img-fluid blog-feed-img" src={ image } />
                        </div>


                    


                    </div>
                </div>

                {/* <div className="row pt-5 d-inline-block">
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <div className="group5753">
                            <div className="stake-rectangle687"> 
                                <div className="stake-hero-token-bitcoin text-center p-2">
                                SOV: The protocol token of biggest DeFi on Bitcoin
                                </div>
                            </div>
                            <div className="rectangle1684">
                                <div className="stake-hero-rect-text p-3 text-left text-wrap">
                                    <p>
                                    SOV IS A TOKEN WITH intristic value
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex d-inline-block">
                    <div className="col-sm-5 py-4">
                            <InfoLabel figtxt="50,000,000" exptxt="sov remaining" />
                        </div>
                        <div className="col-sm-5 py-4">
                            <InfoLabel figtxt="1540" exptxt="VOTING ADDRESSES" />
                        </div>
                        <div className="col-sm-5 py-4">
                            <InfoLabel figtxt="2,428,211" exptxt="Votes delegated" />
                        </div>
                    </div>
                </div> */}
       </div> {/* div end */}

        <div className="container-fluid" id="div-mobile">

<div className="row mt-5">
    <div className="col-md-12">
    <div className="stake-label-mob">
                                <h3>SOV: The protocol token of biggest DeFi on Bitcoin</h3>
                            </div>
    </div>
</div>


<div className="row mt-5">
    <div className="col-md-12">
        <div className="stake-layer-hero-1-mob stakeframeheroimg-mob">  
        </div>
    </div>
</div>
<div className="row mt-5">
    <div className="col-md-12">
    <div className="stake-layer-env-hero-mob">
                            <div className="stake-inner-text p-3 text-left stake-text-wrap-mob">
                            <h4>SOV IS A TOKEN WITH<br/>INTRISTIC VALUE</h4>
                            </div>
                        </div>
    </div>
</div>

<div className="row mt-5">
    <div className="col-md-12">
        <div className="col-md-8">
                            <div class="float-left stack-btn-width-80">
                            <StyledButton text="SOV Tokenomics" pageName="" />
                            </div>
        </div>   
    </div>
</div>

<div className="row mt-5 mb-5">
    <div className="col-md-12">
    <div className="row col-md-12 margin-auto mt-4">
                        <h4 className="stake-box-headding">• SOV Is not another altcoin</h4>
                    </div>
                    <div className="row col-md-12 margin-auto mt-4">
                        <h4 className="stake-box-headding">• SOV stakers earn the fees from the sovryn protocol for providing decentralized governanve</h4>
                    </div>
                    <div className="row col-md-12 margin-auto mt-4">
                        <h4 className="stake-box-headding">• SOV stakers get right to vote on how the first decentralized system will evolve </h4>
                    </div>
    </div>
</div>



        
        </div>
       
        </>
    )
}
