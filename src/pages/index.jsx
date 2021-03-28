import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
 
export default () => {
 
    return (
        <>
            <DefaultLayout>
                <div className="row py-5">
                    <div className="col-md-12">
                        <img className="img-fluid" src="https://via.placeholder.com/1500x650" />
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-md-12">
                        <p>The rest of the components and content will go here</p>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}
