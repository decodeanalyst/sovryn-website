import React from "react";
import "../styles/hiringcomponent.scss";
import arrow from "../static/arrow1.png"


export default function HiringComponent() {
    return (
        <div className="container">
            <div className="hiringbox">
                <div className="row">
                    <div className="hiringbox-text">QA ENGINEER</div>
                </div>
                <div className="row">
                    <div className="float-right">
                        <img src={arrow} className="img-fluid" id="arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}