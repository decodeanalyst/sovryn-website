import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import HeroSection from '../components/HeroSection'
import WebsiteInfo from '../components/WebsiteInfo'
 
export default () => {
 
    return (
        <>
            <DefaultLayout>
                <div className="row py-5">
                    <div className="col">
                        <HeroSection />
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col">
                        <WebsiteInfo />
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}
