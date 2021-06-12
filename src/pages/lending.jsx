import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import LendingHeroComponent from '../components/LendingHeroComponent';
import LendingLearningComponent from '../components/LendingLearningComponent';
import LendingInfoComponent from '../components/LendingInfoComponent';

export default function lending() {
    return ( 
        <>
            <DefaultLayout>
            <div className="container-fluid">
                    <div className="row">
                        {/* <div className="col-md-12"> */}
                            <LendingHeroComponent/>
                        {/* </div> */}
                    </div>
                    <div className="row">
                        {/* <div className="col-md-12"> */}
                        <LendingInfoComponent/>
                        {/* </div> */}
                    </div>

                    <div className="row">
                        {/* <div className="col-md-12"> */}
                        <LendingLearningComponent/>
                        {/* </dkiv> */}
                    </div>

                </div>               
            </DefaultLayout>
        </>
    );
}