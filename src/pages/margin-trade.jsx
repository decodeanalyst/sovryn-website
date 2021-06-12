import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import "../styles/blogarticle.scss";
import "../styles/margin-trade.scss";
import MarginTradeHeroSection from "../components/MarginTradeHeroSection"
import MarginTradeInfoSection from "../components/MarginTradeInfoSection"
import MarginTradeFrameSection from "../components/MarginTradeFrameSection"
import MarginTradeSovSection from "../components/MarginTradeSovSection";
import MarginTradeLearningSection from "../components/MarginTradeLearningSection";

const marginTrade = () => {


    return (
        <>
            <DefaultLayout>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="/">HOME</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Margin trade </li>
                    </ol>
                </nav>
                <div className="container-fluid">
                    <MarginTradeHeroSection/>
                    <MarginTradeInfoSection/>
                    <MarginTradeFrameSection/>
                    <MarginTradeSovSection/>
                    <MarginTradeLearningSection/>
                </div>
            </DefaultLayout>
        </>
    );
}

export default marginTrade;