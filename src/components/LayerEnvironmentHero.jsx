import React from "react";
import "../styles/LayerEnvironmentHero.scss";
import img from "../static/rectangle2744.png";
import MobLabeledFrame from "../components/MobLabeledFrame";

export default function LayerEnvironmentHero() {
    return (
        <>
            <div className="container" id="div-desktop">
                <div className="row mt-5">
                <div className="col-md-12">
                    <div className="col-md-8 float-left">
                            <div className="aboutus-layer-env-hero"></div>
                    </div>
                    <div className="col-md-4 float-left">
                            <div className="aboutus-layer-env-hero"></div>
                    </div>
                </div>
                </div>
            </div>


            <div id="div-mobile">
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="col-md-8">
                            <div className="aboutus-layer-env-hero"></div>
                    </div>
                    <div className="col-md-4 mt-5">
                            <div className="aboutus-layer-env-hero-sm"></div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
