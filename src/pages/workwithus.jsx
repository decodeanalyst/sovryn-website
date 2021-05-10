import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import WorkWithUsHeroSection from '../components/WorkWithUsHeroSection';
import WeAreHiring from '../components/WeAreHiring';
import HiringLinksSection from '../components/HiringLinksSection';
export default function workwithus() {
    return ( 
        <>
            <DefaultLayout>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <WorkWithUsHeroSection />
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-md-12">
                            <WeAreHiring />
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-md-12">
                            <HiringLinksSection />
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-md-12">
                            <HiringLinksSection />
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-md-12">
                            <HiringLinksSection />
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-md-12">
                            <HiringLinksSection />
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-md-12">
                            <HiringLinksSection />
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-md-12">
                            <HiringLinksSection />
                        </div>
                    </div>
                   
                    
                </div>


                
            </DefaultLayout>
        </>
    );
}
