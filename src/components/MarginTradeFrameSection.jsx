import React from 'react';
import frameimg from "../static/margin-trade/frame-img.png";


export default function MarginTradeFrameSection() {
    return (
        <>
            <div className="row margin-trade-frame">
                <div className="col-md-12 col-lg-6 order-sm-last order-lg-first">
                    <div className="margin-trade-frame-left">
                        <h3 className="text-black-mob">The only thing better than bitcoin is more bitcoin</h3>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 order-sm-first order-lg-last">
                    <img src={frameimg} className="img-fluid" />
                </div>
            </div>
        </>
    )
}
