import React from "react";
import "../styles/LayerEnvironment.scss";
import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";
import InfoLabel from "../components/InfoLabel";
import img from "../static/rectangle2744.png";
import MobLabeledFrame from "../components/MobLabeledFrame";

export default function LayerEnvironment() {
    return (
        <>
            <div className="container" id="div-desktop">
                <div className="row mt-5">
               

                <div className="col-lg-12">
                        <div className="d-flex justify-content-center">
                            <div className="layer-slantedrectangle text-center">
                                <p class="layer-text-headding">
                                SOVRYN HAS BEEN ARCHITECTED SPECIFICALLY FOR A LAYER-2 ENVIRONMENT
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-12">
                            <div className="row mt-5">
                                <div className="col-md-4">
                                <div class="group5812">
                                        <div className="layer-rectangle-info">
                                            <div className="sovrynExpands p-2">
                                            The Sovryn protocol provides an open-source infrastructure for a Bitcoin native DeFi (Decentralised Finance) layer that is strongly integrated with ethereum and other crypto assets and chains. The protocol is already providing Bitcoin-class financial tools, with many more in development.
                                        </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                <div className="group5813">
                                        <div class="layer-rectangle-info">
                                            <div class="earnYield p-2">
                                            Sovryn’s decentralized protocol extends the functionality of Bitcoin beyond permissionless, monetary sovereignty to include financial services such as trading, lending and provision of liquidity insurance, and many more other forms of trustless finance. 
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="group5814">
                                        <div className="layer-rectangle-info">
                                            <div className="sovrynIs p-2">
                                            By moving past our reliance on centralised services, Sovryn expands on Satoshi’s vision of monetary sovereignty to establish the economy for Bitcoin-native financial services. 
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                    </div>
                
                </div>
            
            
                <div className="row">
  <div className="col-md-4">
  <div className="col align-self-start py-5" id="infolabel1-mob">
          <InfoLabel figtxt="100 BTC" exptxt="24hr trading volume" />
        </div>
  </div>
  <div className="col-md-4">
  <div className="col align-self-center py-5">
        <InfoLabel figtxt="100,000" exptxt="Wallets connected" />
        </div>
  </div>
  <div className="col-md-4">
  <div className="col align-self-end py-5" id="optional">
        <InfoLabel figtxt="1,000,000 BTC" exptxt="Locked value" />
        </div>
  </div>
       
       
      </div>
            


      <div className="row">
                    <div className="col-md-3">
                        <div class="float-left btn-width-100">
                        <StyledButton text="SOV & Bitocracy" pageName="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="float-left btn-width-100">
                        <StyledButton text="Blackpaper" pageName="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="float-right btn-width-100">
                        <StyledButton1 text="Sovryn wiki" pageName="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="float-right btn-width-100">
                        <StyledButton1 text="Github" pageName="" />
                        </div>
                    </div>
                </div>

            </div>


            <div id="div-mobile">
            <div className="row mt-5">
               

               <div className="col-lg-12">
                       <div className="d-flex justify-content-center">
                           <div className="layer-slantedrectangle text-center">
                               <p class="layer-text-headding">
                               SOVRYN HAS BEEN ARCHITECTED SPECIFICALLY FOR A LAYER-2 ENVIRONMENT
                               </p>
                           </div>
                       </div>
                   </div>


                   <div className="col-md-12">
                           <div className="row mt-5">
                               <div className="col-md-4 mt-5">
                               <div class="group5812">
                                       <div className="layer-rectangle-info">
                                           <div className="sovrynExpands p-2">
                                           The Sovryn protocol provides an open-source infrastructure for a Bitcoin native DeFi (Decentralised Finance) layer that is strongly integrated with ethereum and other crypto assets and chains. The protocol is already providing Bitcoin-class financial tools, with many more in development.
                                       </div>
                                       </div>
                                   </div>

                               </div>
                               <div className="col-md-4 mt-5">
                               <div className="group5813">
                                       <div class="layer-rectangle-info">
                                           <div class="earnYield p-2">
                                           Sovryn’s decentralized protocol extends the functionality of Bitcoin beyond permissionless, monetary sovereignty to include financial services such as trading, lending and provision of liquidity insurance, and many more other forms of trustless finance. 
                                               </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-md-4 mt-5">
                               <div className="group5814">
                                       <div className="layer-rectangle-info">
                                           <div className="sovrynIs p-2">
                                           By moving past our reliance on centralised services, Sovryn expands on Satoshi’s vision of monetary sovereignty to establish the economy for Bitcoin-native financial services. 
                                   </div>
                                       </div>
                                   </div>
                               </div>
                           </div>


                   </div>
               
               </div>
           
               <div className="row">
                    <div className="col-md-12 btn-pl-85">
                        <div className="col-lg-3 col-xs-6">
                            <div className="row align-self-start py-5 btn-fixes" id="infolabel1-mob">
                                <InfoLabel figtxt="50,000,000" exptxt="SOV Remaining" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-6 mr-5">
                            <div className="row align-self-center py-5 btn-fixes">
                            <InfoLabel figtxt="1540" exptxt="Voting Addresses" />
                            </div>
                        </div>                        
                    </div>       
                 </div>
           


     <div className="row">
                   <div className="col-md-3">
                       <div class="float-left btn-width-100">
                       <StyledButton text="SOV & Bitocracy" pageName="" />
                       </div>
                   </div>
                   <div className="col-md-3">
                       <div class="float-left btn-width-100">
                       <StyledButton text="Blackpaper" pageName="" />
                       </div>
                   </div>
                   <div className="col-md-3">
                       <div class="float-right btn-width-100">
                       <StyledButton1 text="Sovryn wiki" pageName="" />
                       </div>
                   </div>
                   <div className="col-md-3">
                       <div class="float-right btn-width-100">
                       <StyledButton1 text="Github" pageName="" />
                       </div>
                   </div>
               </div>

            </div>
        </>
    )
}
