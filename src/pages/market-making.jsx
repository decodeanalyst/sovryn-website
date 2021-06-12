import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import "../styles/blogarticle.scss";
import "../styles/market-making.scss";
import MarketMakingHeroSection from "../components/MarketMakingHeroSection"
import MarketMakingLiquidityProvider from "../components/MarketMakingLiquidityProvider"
import MarketMakingLearnabout from "../components/MarketMakingLearnabout"
import MarketMakingEarnSingleTrade from "../components/MarketMakingEarnSingleTrade"
import MarketMakingRatioChart from "../components/MarketMakingRatioChart"


const MarketMaking = () => {


    return (
        <>
            <DefaultLayout>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="/">HOME</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Market Making</li>
                    </ol>
                </nav>
                <div className="container-fluid">
                    <MarketMakingHeroSection/>
                    <MarketMakingEarnSingleTrade/>
                    <MarketMakingLiquidityProvider/>
                    <MarketMakingRatioChart/>
                    <MarketMakingLearnabout/>
                    
                    
                </div>
            </DefaultLayout>
        </>
    );
}

export default MarketMaking;