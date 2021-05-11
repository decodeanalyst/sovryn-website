import React from "react";
import "../styles/PressandMedia.scss";
import arrow from "../static/arrow.jpeg"
import StyledButton from "../components/StyledButton";
import PressAndMediaComponent from "./PressAndMediaComponent";

export default function PressandMedia() {
    return (
        <> 
        <div className="container-fluid" id="div-desktop">
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="d-flex  ">
                            <div className="press-media-slanted-rectangle text-center">
                                <h1 class="text-black">
                                Press and media
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-3">
                    <div className="col-md-12">
                    <PressAndMediaComponent/>
                    </div>
                </div>
        </div>
        </>
    )
}
