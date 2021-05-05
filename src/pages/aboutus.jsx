import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import LayerEnvironment from '../components/LayerEnvironment';
import LayerEnvironmentHero from '../components/LayerEnvironmentHero';
import WorkatSovryn from '../components/WorkatSovryn';
import PressandMedia from '../components/PressandMedia';
import AboutUsHeroSection from '../components/AboutUsHeroSection';

export default function aboutus() {
 
    return ( 
        <>
            <DefaultLayout>
            <div className="container-fluid">
            <div className="row">
                        <div className="col-md-12">
                            <AboutUsHeroSection />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <LayerEnvironment />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <LayerEnvironmentHero />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <WorkatSovryn />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <PressandMedia />
                        </div>
                    </div>
                    
                    
                </div>


                
            </DefaultLayout>
        </>
    );
}
