import React from "react";
import "../styles/BorrowPageHeroSection.scss";
import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";
import InfoLabel from "../components/InfoLabel";

export default function BorrowPageHeroSection() {
    return (
        <>
        <div className="container-fluid" id="div-desktop">
                <div className="row mt-5">
                <div className="row col-md-12">
                    <div className="col-md-8 float-left">
                        <div className="borrowpage-hero-layer-env-hero">
                            <div className="borrowpage-hero-label">
                                <h3>Get Liquidity without<br/>loosing bitcoins</h3>
                            </div>
                           
                        </div>

<div className="row col-md-12 pt-5 d-inline-block d-flex brw">
                    <div className="col-md-3 py-4">
                            <InfoLabel figtxt="1.09%" exptxt="RBTC est. APR" />
                        </div>
                        <div className="col-md-3 py-4">
                            <InfoLabel figtxt="7.72%" exptxt="USD RBTC est. APR" />
                        </div>
                        <div className="col-md-6 py-4">
                            <InfoLabel figtxt="1,000,000 BTC" exptxt="Total loans disbursed" />
                        </div>
                   
                    </div>



                    <div className="row col-md-12 float-left mt-3">
                    <div className="col-md-6">
                        <div class="float-left btn-width-100">
                        <StyledButton text="TRADE NOW" pageName="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="float-right btn-width-100">
                        <StyledButton1 text="FAQ" pageName="" />
                        </div>
                    </div>
                    
                </div>


                    </div>
                    
                   


                    
                        <div className="col-md-4 float-right">
                       
                        
                                <div class="group5812">
                                        <div className="aborrowclr-layer-rectangle-info">
                                            <div className="sovrynExpands p-2">
                                            The Sovryn protocol provides an open-source infrastructure for a Bitcoin native DeFi (Decentralised Finance) layer that is strongly integrated with ethereum and other crypto assets and chains. The protocol is already providing Bitcoin-class financial tools, with many more in development.
                                        </div>
                                        </div>
                                    </div>


                          
                        </div>


                    


                    </div>
                </div>

        </div>


        <div className="container-fluid" id="div-mobile">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                <div className="borrowpage-hero-label-mob">
                                <h3> Get Liquidity without <br/> loosing bitcoins</h3>
                            </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-12 col-sm-12">
                <div className="float-right mt-3 mb-5">
                        <div class="group5812">
                                        <div className="aborrowclr-layer-rectangle-info-mob">
                                            <div className="borrow-sovrynExpands p-2">
                                            Borrow Bitcoin or stable coins with indefinite-term loans at a lucrative APR and go long on Bitcoin or to avoid loosing long exposure to Bitcoin. 
                                        </div>
                                        </div>
                                    </div>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="row">      
                    <div className="col-4 py-4 borrow-mob-btn borrowml-65">
                    <InfoLabel figtxt="1.28%" exptxt="RBTC"/>                
                    </div>
                    <div className="col-4 py-4 borrow-mob-btn">
                    <InfoLabel figtxt="7.72%" exptxt="USD" />
                    </div>
                </div>
            </div>

            <div className="row col-md-12 float-left mt-3">
                    <div className="col-md-6">
                        <div class="float-left btn-width-100">
                        <StyledButton text="LEND NOW" pageName="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="float-right btn-width-100">
                        <StyledButton1 text="FAQ" pageName="" />
                        </div>
                    </div>
                    
                </div>








        </div>



{/* 
        <div className="container-fluid" id="div-mobile">
                <div className="row mt-5">
                <div className="col-md-12">
                    <div className="col-md-5 float-left">
                    <div className="borrowpage-hero-label-mob">
                                <h3> Get Liquidity without <br/> loosing bitcoins</h3>
                            </div>
                        
                       <div className="container">
                           <div className="col-md-12">
                           <div className="row float-right mt-3 mb-5">
                        <div class="group5812">
                                        <div className="aborrowclr-layer-rectangle-info-mob">
                                            <div className="sovrynExpands p-2">
                                            Borrow Bitcoin or stable coins with indefinite-term loans at a lucrative APR and go long on Bitcoin or to avoid loosing long exposure to Bitcoin. 
                                        </div>
                                        </div>
                                    </div>

                          
                        </div>
                           </div>
                       </div>
                       
                      
                       
                       



<div className="container">
  <div className="row pt-3">
      
    <div className="col-4 py-4 borrow-mob-btn borrowml-65">
    <InfoLabel figtxt="1.28%" exptxt="RBTC"/>

    </div>
    <div className="col-4 py-4 borrow-mob-btn">
    <InfoLabel figtxt="7.72%" exptxt="USD" />
    </div>
  </div>
</div>

                    










                    

                    <div className="row col-md-12 float-left mt-3 ml-3">
                    <div className="col-md-6">
                        <div class="float-left btn-width-100">
                        <StyledButton text="LEND NOW" pageName="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="float-right btn-width-100">
                        <StyledButton1 text="FAQ" pageName="" />
                        </div>
                    </div>
                    
                </div>


                    </div>
                    
                   


                    
                        


                    


                    </div>
                </div>

        </div> */}


        </>
    )
}
