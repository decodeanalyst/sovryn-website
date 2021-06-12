import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import BlogArticleComponent from '../components/BlogArticleComponent';
import KeyArticleComponent from '../components/KeyArticleComponent';
import LabeledFrame from "../components/LabeledFrame";
import pic from "../static/rectangle1680.png";
import HelpLinks from "../components/HelpLinks";
import SignupSection from '../components/SignupSection';
 
const Index = () => {
 
    return (
        <>
            <DefaultLayout>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row py-5">
                            <LabeledFrame figtxt="" img={pic} banner={false} pageStyle="blog" />
                        </div>
                        <div className="row py-5">
                            <BlogArticleComponent />
                        </div>
                        <div className="row py-5">
                            {/* <BlogArticleComponent /> */}
                        </div>
                        <div className="row py-5">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consete </li>
                            <li>eirmod tempor invidunt ut labore et </li>
                            <li>dolore magna aliquyam erat, sed </li>
                        </ul>
                        </div>
                        <div className="row py-5">
                            <BlogArticleComponent />
                        </div>
                        <div className="row py-5 lightbrown">
                        <div className="p-1">We are pleased to announce that we have teamed up with Liquality to bring you a new and seamless way to swap your crypto into RBTC, Sovryn’s native asset.</div>
                        </div>
                        <div className="row py-5">
                           <BlogArticleComponent /> 
                        </div>
                        <div className="row py-5">
                            <KeyArticleComponent />
                        </div>
                        <div className="row py-5">
                            <HelpLinks />
                        </div>
                    </div>

                    <div className="col-lg-4">
                    </div>
                    
                </div>
                <div className="py-5"></div>
                <div className="py-5"></div>

                <div className="py-5"></div>

                <div className="row py-5">
                    <SignupSection />
                </div>
            </DefaultLayout>
        </>
    );
}

export default Index;