import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import BorrowPageInfoSection from '../components/BorrowPageInfoSection';
import BorrowPageLearnSection from '../components/BorrowPageLearnSection';
import BorrowPageHeroSection from '../components/BorrowPageHeroSection';
export default function borrow() {
    return ( 
        <>
            <DefaultLayout>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <BorrowPageHeroSection/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <BorrowPageInfoSection/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <BorrowPageLearnSection/>
                        </div>
                    </div>

                </div>               
            </DefaultLayout>
        </>
    );
}