import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import SwapHerosection from '../components/SwapHerosection';
import SwapLearnMoresection from '../components/SwapLearnMoresection';
import SwapBrokenFrameSection from '../components/SwapBrokenFrameSection';
import SwapWalletssection from '../components/SwapWalletssection';
import SwapLiveNow from '../components/SwapLiveNow';

export default function swap() {
    return (
        <>
            <DefaultLayout>
                <div className="container-fluid">
                    <div className="row">
                        {/* <div className="col-md-12 col-sm-12"> */}
                        <SwapHerosection />
                        {/* </div> */}
                    </div>
                    <div className="row">
                        {/* <div className="col-md-12 col-sm-12"> */}
                        <SwapLiveNow />
                        {/* </div> */}
                    </div>
                    <div className="row">
                        {/* <div className="col-md-12 col-sm-12"> */}
                        <SwapWalletssection />
                        {/* </div> */}
                    </div>
                    <div className="row">
                        {/* <div className="col-md-12 col-sm-12"> */}
                        <SwapBrokenFrameSection />
                        {/* </div> */}
                    </div>
                    <div className="row">
                        {/* <div className="col-md-12 col-sm-12"> */}
                        <SwapLearnMoresection />
                        {/* </div> */}
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}