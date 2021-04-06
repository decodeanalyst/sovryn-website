import React from "react";
import "../styles/hero.scss";

import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";
import InfoLabel from "../components/InfoLabel";
import LabeledFrame from "../components/LabeledFrame";
import image from "../static/Index/index.png"

export default function HeroSection() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-12">
          <LabeledFrame figtxt="The Decentralized Bitcoin" figtxt1=" Trading and Lending Platform" img={image} banner={true} />
          <StyledButton text="trade now" pageName="" />
          <StyledButton1 text="faq" pageName="" />
        </div>
      </div>
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
    </div>
  )
}
