import React from 'react';
import Footer from './Footer';
import Header from './Header';
 
import "../sytles/main.scss"

export default function DefaultLayout(props) {

    return (
        <>
            <Header />
            <div className="container">
                { props.children }
            </div>
            <Footer />
        </>
    );
}
