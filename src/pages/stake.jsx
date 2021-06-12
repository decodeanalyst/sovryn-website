import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import StakeExchnagessection from '../components/StakeExchnagessection';
import StakeInfoSection from '../components/StakeInfoSection';
import StakeFramesection from '../components/StakeFramesection';
import StakeLearnMoresection from '../components/StakeLearnMoresection';
import StakeHeroSection from '../components/StakeHeroSection';

export default function stake() {
    return ( 
        <>
            <DefaultLayout>
            <div className="container-fluid">

            <div className="row">
                        <div className="col-md-12">
                           <StakeHeroSection/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <StakeInfoSection/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <StakeExchnagessection/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                           <StakeFramesection/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                           <StakeLearnMoresection/>
                        </div>
                    </div>
                    
                </div>               
            </DefaultLayout>
        </>
    );
}