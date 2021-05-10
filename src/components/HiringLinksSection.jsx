import React from "react";
import "../styles/HiringLinksSection.scss";
import arrow from "../static/arrow1.png"

export default function HiringLinksSection() {
    return (
        <>

<div className="container">
            <div className="workwithus-hiringbox">
                <div className="row">
                    <div className="workwithus-hiringbox-text">Solidity developer</div>
                </div>
                <div className="row">
                    <div className="float-right">
                        <img src={arrow} className="img-fluid" id="arrow" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}