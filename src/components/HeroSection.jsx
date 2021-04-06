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
          <LabeledFrame figtxt="The Decentralized Bitcoin" figtxt1=" Trading and Lending Platform" img={image} banner="yes" />
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
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="framebutton2 btn btn-link" width="202" height="43" viewBox="0 0 202 43">
            <g id="Group_5544" data-name="Group 5544" transform="translate(-543 -627.002)">
              <g id="Group_5519" data-name="Group 5519" transform="translate(543 627.002)">
                <g id="Path_6523" data-name="Path 6523" transform="translate(202 43) rotate(180)" fill="none">
                  <path d="M0,43H195.372L202,0H6.628Z" stroke="none" />
                  <path d="M 192.7993621826172 40 L 198.5022125244141 3 L 9.200672149658203 3 L 3.497844457626343 40 L 192.7993621826172 40 M 195.3724060058594 43 L 1.52587890625e-05 43 L 6.627626419067383 0 L 202.0000457763672 0 L 195.3724060058594 43 Z" stroke="none" fill="#e8bb33" />
                </g>
                <text id="Faq" transform="translate(100.499 31.119)" fill="#e8bb33" font-size="26" font-family="Bangers-Regular, Bangers" letter-spacing="0.01em"><tspan x="-24.032" y="0">FAQ</tspan></text>
              </g>
            </g>
          </svg> */}
          <StyledButton1 text="faq" pageName="" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 py-5">
          <InfoLabel figtxt="100 BTC" exptxt="24hr trading volume" />
          {/* <svg id="Group_4476" data-name="Group 4476" xmlns="http://www.w3.org/2000/svg" width="300" height="140" viewBox="0 0 384 140">
            <g id="Path_4572" data-name="Path 4572" transform="translate(0 0.005)" fill="#b58f7f">
              <path d="M 365.3895263671875 134.9951171875 L 5.52843189239502 134.9951171875 L 18.61053657531738 4.995124816894531 L 378.4715576171875 4.995124816894531 L 365.3895263671875 134.9951171875 Z" stroke="none" />
              <path d="M 23.13262939453125 9.995132446289063 L 11.05682373046875 129.9951171875 L 360.8673706054688 129.9951171875 L 372.9431762695313 9.995132446289063 L 23.13262939453125 9.995132446289063 M 14.08840942382813 -0.0048675537109375 L 384 -0.0048675537109375 L 369.9115905761719 139.9951171875 L 0 139.9951171875 L 14.08840942382813 -0.0048675537109375 Z" stroke="none" fill="#f7f6e7" />
            </g><text id="_100_BTC" className="font-weight-bold" data-name="100 BTC" transform="translate(108 74)" fill="#1d1d1d" font-size="50" font-family="Bangers-Regular, Bangers" letter-spacing="0.01em"><tspan x="0" y="0">100 BTC</tspan></text>
            <text id="_24hr_trading_volume" data-name="24hr trading volume" transform="translate(74 115)" fill="#151515" font-size="25" font-family="Bangers-Regular, Bangers" letter-spacing="0.01em"><tspan x="0" y="0">24hr trading volume</tspan></text>
          </svg> */}
          <div className="p-3"></div>
        </div>
        <div className="col-lg-4 py-5">
        <InfoLabel figtxt="100,000" exptxt="total transactions" />
          {/* <svg id="Group_4476" data-name="Group 4476" xmlns="http://www.w3.org/2000/svg" width="300" height="140" viewBox="0 0 384 140">
            <g id="Path_4572" data-name="Path 4572" transform="translate(0 0.005)" fill="#b58f7f">
              <path d="M 365.3895263671875 134.9951171875 L 5.52843189239502 134.9951171875 L 18.61053657531738 4.995124816894531 L 378.4715576171875 4.995124816894531 L 365.3895263671875 134.9951171875 Z" stroke="none" />
              <path d="M 23.13262939453125 9.995132446289063 L 11.05682373046875 129.9951171875 L 360.8673706054688 129.9951171875 L 372.9431762695313 9.995132446289063 L 23.13262939453125 9.995132446289063 M 14.08840942382813 -0.0048675537109375 L 384 -0.0048675537109375 L 369.9115905761719 139.9951171875 L 0 139.9951171875 L 14.08840942382813 -0.0048675537109375 Z" stroke="none" fill="#f7f6e7" />
            </g><text id="_100_BTC" className="font-weight-bold" data-name="100 BTC" transform="translate(108 74)" fill="#1d1d1d" font-size="50" font-family="Bangers-Regular, Bangers" letter-spacing="0.01em"><tspan x="0" y="0">100,000</tspan></text>
            <text id="_24hr_trading_volume" data-name="24hr trading volume" transform="translate(74 115)" fill="#151515" font-size="25" font-family="Bangers-Regular, Bangers" letter-spacing="0.01em"><tspan x="0" y="0">Total transactions</tspan></text>
          </svg> */}
        </div>
        <div className="col-lg-4 py-5">
        <InfoLabel figtxt="1,000,000 BTC" exptxt="total transacted" />
          {/* <svg id="Group_4476" data-name="Group 4476" xmlns="http://www.w3.org/2000/svg" width="300" height="140" viewBox="0 0 384 140">
            <g id="Path_4572" data-name="Path 4572" transform="translate(0 0.005)" fill="#b58f7f">
              <path d="M 365.3895263671875 134.9951171875 L 5.52843189239502 134.9951171875 L 18.61053657531738 4.995124816894531 L 378.4715576171875 4.995124816894531 L 365.3895263671875 134.9951171875 Z" stroke="none" />
              <path d="M 23.13262939453125 9.995132446289063 L 11.05682373046875 129.9951171875 L 360.8673706054688 129.9951171875 L 372.9431762695313 9.995132446289063 L 23.13262939453125 9.995132446289063 M 14.08840942382813 -0.0048675537109375 L 384 -0.0048675537109375 L 369.9115905761719 139.9951171875 L 0 139.9951171875 L 14.08840942382813 -0.0048675537109375 Z" stroke="none" fill="#f7f6e7" />
            </g><text id="_100_BTC" className="font-weight-bold" data-name="1,000,000 BTC" transform="translate(108 74)" fill="#1d1d1d" font-size="50" align font-family="Bangers-Regular, Bangers" letter-spacing="0.01em"><tspan x="-50" y="0">1,000,000BTC </tspan></text>
            <text id="_24hr_trading_volume" data-name="24hr trading volume" transform="translate(74 115)" fill="#151515" font-size="25" font-family="Bangers-Regular, Bangers" letter-spacing="0.01em"><tspan x="0" y="0">Total Transacted</tspan></text>
          </svg> */}
        </div>

      </div>
      {/* 
            <div
                data-layer="bfb71efc-9a52-413e-97f7-643d49eb6cd6"
                className="maskGroup86"
            ></div>
            <div
                data-layer="160255d6-acab-42c3-bed7-4856f0e5e997"
                className="rectangle1680"
            ></div>
            <div
                data-layer="49c77b0d-bbd9-47c8-990a-480345430fcb"
                className="maskGroup87"
            ></div>
            <div
                data-layer="ccb10a0f-827c-4591-8edd-331938109a68"
                className="group4476"
            >
                {" "}
                <svg
                data-layer="3fd4cd71-5001-45c7-b380-be79248b9945"
                preserveAspectRatio="none"
                viewBox="-7.5 -7.5048828125 399 155"
                className="path4572ec0f3746"
                >
                <path d="M 14.08842945098877 -0.0048828125 L 384 -0.0048828125 L 369.91162109375 139.9951324462891 L 0 139.9951324462891 L 14.08842945098877 -0.0048828125 Z" />
                </svg>
            </div>
            <div
                data-layer="81f3fcdc-dec7-42eb-8aef-e653b96f3612"
                className="group5053"
            >
                {" "}
                <svg
                data-layer="d438ee5b-8909-4609-945f-24df4d1f9ec3"
                preserveAspectRatio="none"
                viewBox="-7.5 -7.5048828125 399 155"
                className="path45727febeb09"
                >
                <path d="M 14.08842945098877 -0.0048828125 L 384 -0.0048828125 L 369.91162109375 139.9951324462891 L 0 139.9951324462891 L 14.08842945098877 -0.0048828125 Z" />
                </svg>
            </div>
            <div
                data-layer="4593e790-f9e2-4eec-a78c-9e16ac9691dd"
                className="group5054"
            >
                {" "}
                <svg
                data-layer="43901e4f-7bd2-4c03-a8b8-8c39eded2b76"
                preserveAspectRatio="none"
                viewBox="-7.5 -7.5048828125 399 155"
                className="path4572ffc66049"
                >
                <path d="M 14.08842945098877 -0.0048828125 L 384 -0.0048828125 L 369.91162109375 139.9951171875 L 0 139.9951171875 L 14.08842945098877 -0.0048828125 Z" />
                </svg>
            </div> */}
    </div>
  )
}
