import React from "react";
import "../styles/wearehiring.scss";
import TagCloud from './TagCloud';

export default function WeAreHiring({ onSearchChanged }) {
    // const tags = [{name: "All", link: "#", color: "#F7F6E7"},
    //             {name: "IT", link: "#", color: "#88B8BC"},
    //             {name: "FINANCE", link: "#", color: "#99948A"},
    //             {name: "CREATIVE", link: "#", color: "#D1B1A4"},
    //             {name: "MARKETING", link: "#", color: "#CBB464"},
    //             {name: "GENIUSES", link: "#", color: "#8493A5"}]

    return (
        <>

            <div className="container-fluid check" >
                <div className="row mt-5">
                    {/* <div className="col-md-12 maybe">
                        <div class="d-flex justify-content-center">
                            <div class="text-center">
                                <h1>We are hiring!</h1>
                            </div>
                        </div>
                    
                    </div> */}

                    <div className="row col-12">
                        <div class="d-flex workwithus-center mt-5">
                            <div class="text-center">
                                <div className="d-flex d-inline-block">
                                    <input type="text"
                                        className="workwithus-searchmenu"
                                        placeholder="Search..."
                                        onChange={e => onSearchChanged(e.target.value)}
                                    />
                                    <div className="pr-2"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="workwithus-search" width="42" height="42" viewBox="0 0 42.475 42.475">
                                        <g id="Group_5844" data-name="Group 5844" transform="translate(-1710 -346)">
                                            <g id="Ellipse_21" data-name="Ellipse 21" transform="translate(1710 346)" fill="none" stroke="#99bcb1" stroke-width="3">
                                                <ellipse cx="18.319" cy="18.294" rx="18.319" ry="18.294" stroke="none" />
                                                <ellipse cx="18.319" cy="18.294" rx="16.819" ry="16.794" fill="none" />
                                            </g>
                                            <line id="Line_68" data-name="Line 68" x1="8.283" y1="8.283" transform="translate(1741.717 377.717)" fill="none" stroke="#99bcb1" stroke-linecap="round" stroke-width="3.5" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}
