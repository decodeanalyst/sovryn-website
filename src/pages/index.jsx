import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import HeroSection from '../components/HeroSection'
import WebsiteInfo from '../components/WebsiteInfo'
import Trading from '../components/Trading'
import SovDetails from '../components/SovDetails'
import JoinSov from '../components/JoinSov'
import SignupSection from '../components/SignupSection';
 
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
                        <JoinSov />
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
