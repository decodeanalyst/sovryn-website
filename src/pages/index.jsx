import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import HeroSection from '../components/HeroSection';
import WebsiteInfo from '../components/WebsiteInfo';
import Trading from '../components/Trading';
import SovDetails from '../components/SovDetails';
import Trending from '../components/Trending';
import SignupSection from '../components/SignupSection';
import MobSignUp from '../components/MobSignUp';

 
export default function Index() {
 
    return (
        <>
            <DefaultLayout>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <HeroSection />
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-md-12 pb-5">
                        <WebsiteInfo />
                    </div>
                </div>
                <div className="py-5" id="div-desktop"></div>
                <div className="row py-5">
                    <div className="col">
                        <Trading />
                    </div>
                </div>
                <div className="row py-5 pb-5">
                    <div className="col pb-5">
                        <SovDetails />
                    </div>
                </div>
                <div className="py-5"></div>
                <div className="row py-5">
                    <div className="col">
                        <Trending />
                    </div>
                </div>
                <div className="row" id="div-desktop">
                <div className="p-5"></div>
                <div className="p-5"></div>
                </div>
                <div className="row py-5">
                    <div className="col" id="div-desktop">
                        <SignupSection />
                    </div>
                    <div className="col" id="div-mobile">
                        <MobSignUp />
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}
