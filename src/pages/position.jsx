import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import PositionHiringprocesssection from '../components/PositionHiringprocesssection';
import PositionpageHeroSection from '../components/PositionpageHeroSection';
import PositionpageJobdescriptionsection from '../components/PositionpageJobdescriptionsection';

export default function position() {
    return ( 
        <>
            <DefaultLayout>
            <div className="container-fluid">
            <div className="row">
                        <div className="col-md-12">
                           <PositionpageHeroSection/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <PositionpageJobdescriptionsection/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <PositionHiringprocesssection/>
                        </div>
                    </div>
                </div>               
            </DefaultLayout>
        </>
    );
}