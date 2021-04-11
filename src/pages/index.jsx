import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import HeroSection from '../components/HeroSection';
import WebsiteInfo from '../components/WebsiteInfo';
import Trading from '../components/Trading';
import SovDetails from '../components/SovDetails';
import Trending from '../components/Trending';
import SignupSection from '../components/SignupSection';

 
const Index = () => {
 
    return (
        <>
            <DefaultLayout>
         
                <HeroSection />

                <div className="row py-5">
                    <div className="col-md-12">
                        {/* <WebsiteInfo /> */}
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col">
                        <Trading />
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col">
                        <SovDetails />
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col">
                        <Trending />
                    </div>
                </div>
                <div className="row">
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                </div>
                <div className="row py-5">
                    <div className="col">
                        <SignupSection />
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}

export default Index;