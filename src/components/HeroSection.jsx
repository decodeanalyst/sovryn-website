import React from "react";
import "../styles/hero.scss";

import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";
import InfoLabel from "../components/InfoLabel";
import LabeledFrame from "../components/LabeledFrame";
import indeximg from "../static/index/index.png"

export default function HeroSection() {
  return (
    <>
    
        <LabeledFrame figtxt="The decentralized bitcoin trading and lending platform" img={ indeximg } banner={ true } pageStyle="index" />
  
          <StyledButton text="trade now" pageName="" />
          <StyledButton1 text="faq" pageName="" />
      <div className="row">
        <div className="col-lg-4 py-5">
          <InfoLabel figtxt="100 BTC" exptxt="24hr trading volume" />
          <div className="p-3"></div>
        </div>
        <div className="col-lg-4 py-5">
        <InfoLabel figtxt="100,000" exptxt="total transactions" />
        </div>
        <div className="col-lg-4 py-5">
        <InfoLabel figtxt="1,000,000 BTC" exptxt="total transacted" />
        </div>

      </div>
    </>
  )
}
