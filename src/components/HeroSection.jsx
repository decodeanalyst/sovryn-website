import React from "react";
import "../styles/hero.scss";

import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";
import InfoLabel from "../components/InfoLabel";
import LabeledFrame from "../components/LabeledFrame";
import indeximg from "../static/home-page/hero-image.png"

export default function HeroSection() {
  return (
    <>
    
      
      <div className="row headerimage pt-4">
          <div className="row">
            <LabeledFrame figtxt="The decentralized bitcoin trading and lending platform" img={ indeximg } banner={ true } pageStyle="index" />
          </div>
          <div className="container">
            <div className="btn-wrap">
              <div className="col-md-2">
                <StyledButton text="trade now" pageName="" />
              </div>
              <div className="col-md-2">
                <StyledButton1 text="faq" pageName="" />
              </div>
            </div>
          </div>
        </div>
      <div className="row">
        <div className="col align-self-start py-5">
          <InfoLabel figtxt="100 BTC" exptxt="24hr trading volume" />
        </div>
        <div className="col-md-1"></div>
        <div className="col align-self-center py-5">
        <InfoLabel figtxt="100,000" exptxt="total transactions" />
        </div>
        <div className="col-md-1"></div>
        <div className="col align-self-end py-5">
        <InfoLabel figtxt="1,000,000 BTC" exptxt="total transacted" />
        </div>

      </div>
    </>
  )
}
