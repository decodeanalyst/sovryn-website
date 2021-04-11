import React from "react";
import "../styles/hero.scss";

import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";
import InfoLabel from "../components/InfoLabel";
import LabeledFrame from "../components/LabeledFrame";
import indeximg from "../static/index/index.png"

export default function HeroSection() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-12">
          <LabeledFrame figtxt="The decentralized bitcoin trading and lending platform" img={ indeximg } banner={ true } pageStyle="index" />
          {/* <svg id="H2_shape_2_lines" className="topleft" data-name="H2 shape 2 lines" xmlns="http://www.w3.org/2000/svg" width="909" height="136" viewBox="0 0 909 136">
            <g id="Group_4754" data-name="Group 4754" transform="translate(-143.436 -272.216)">
              <path id="Path_4572" data-name="Path 4572" d="M33.2,5.694H657.167l-21.036,122H12.167Z" transform="translate(131.269 276.521)" fill="#f7f6e8" />
            </g>
            <text id="THE_DECENTRALIZED_BITCOIN_TRADING_AND_LENDING_PLATFORM" data-name="THE DECENTRALIZED BITCOIN TRADING AND LENDING PLATFORM" transform="translate(45 61)" font-size="50" font-family="Bangers-Regular, Bangers" letter-spacing="0.01em"><tspan x="0" y="0">THE DECENTRALIZED BITCOIN</tspan><tspan x="0" y="55">TRADING AND LENDING PLATFORM</tspan></text>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1580 645">
            <defs>
              <linearGradient id="linear-gradient" x1="0.239" y1="-0.352" x2="0.419" y2="1.435" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#89aea2" />
                <stop offset="1" stop-color="#34252c" />
              </linearGradient>
            </defs>
            <g id="Path_6039" data-name="Path 6039" fill="url(#linear-gradient)">
              <path d="M 1575 640 L 5 640 L 5 5 L 1575 5 L 1575 640 Z" stroke="none" />
              <path d="M 10 10 L 10 635 L 1570 635 L 1570 10 L 10 10 M 0 0 L 1580 0 L 1580 645 L 0 645 L 0 0 Z" stroke="none" fill="#f7f6e7" />
            </g>
          </svg> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="framebutton1 btn btn-link" width="191" height="50" viewBox="0 0 191 50">
            <g id="Group_5501" data-name="Group 5501" transform="translate(-259.932 -5437.553)">
              <path id="Path_6521" data-name="Path 6521" class="cls-1" d="M6.147.743,14.762-6.1,181.8.743,184,37.475,175.654,43.9H0Z" transform="translate(259.932 5443.652)" />
              <g id="Group_4001" data-name="Group 4001" transform="translate(280.82 5435.472)">
                <path id="Path_6488" data-name="Path 6488" class="cls-2" d="M6.154.719H182l-6.154,43H0Z" transform="translate(-11.889 1.363)" />
                <text id="GO_TO_Swap" data-name="GO TO Swap" class="cls-3" transform="translate(78.111 33.081)"><tspan x="-50" y="0">TRADE NOW</tspan></text>
              </g>
            </g>
          </svg> */}
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
