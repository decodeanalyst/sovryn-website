import React from 'react';
import img1 from "../static/market-making/img-1.png"


const Users = [
    {
        title: "50K SOV Loot DROP",
        subtitle: "USDT/RBTC",
        date: "01/04/21, 12.00 UTC - 01/05/21, 12.00 UTC",
        color: "#6063CC",
        img: "../static/market-making/img-1.png"
    },
    {
        title: "75K SOV Loot DROP",
        subtitle: "SOV/RBTC",
        date: "01/04/21, 12.00 UTC - 01/05/21, 12.00 UTC",
        color: "#F5E884",
        img: "img-2"
    },
    {
        title: "75K SOV Loot DROP",
        subtitle: "SOV/RBTC",
        date: "01/04/21, 12.00 UTC - 01/05/21, 12.00 UTC",
        color: "#6EAC6F",
        img: "img-3"
    },
    {
        title: "75K SOV Loot DROP",
        subtitle: "SOV/RBTC",
        date: "01/04/21, 12.00 UTC - 01/05/21, 12.00 UTC",
        color: "#D69B9B",
        img: "img-4"
    },
    {
        title: "75K SOV Loot DROP",
        subtitle: "SOV/RBTC",
        date: "01/04/21, 12.00 UTC - 01/05/21, 12.00 UTC",
        color: "#8EDBDB",
        img: "img-5"
    },
]

export default function MarketMakingEarnSingleTrade() {
    return (
        <>
            <div className="pt-60 pb-60">
                <h3 className="mt-3 mb-3">Earn from every single trade that takes place on Sovryn. </h3>
                <div className="row market-making-earn-trade">

                    {Users.map((e) => {
                        return (
                            <div className="col">
                                <div id="div-desktop">
                                    <div className="border-5">
                                        {/* <img className="img-fluid info-middle-img" src={require("./icons/"+names+".png")} /> */}

                                        <img className="img-fluid" src={img1} />
                                    </div>

                                </div>
                                <div className="earn-single-trade" style={{ borderTop: `5px solid ${e.color}` }}>

                                    <h3 className="w-100">{e.title}</h3>
                                    <h4 className="w-100">{e.subtitle}</h4>
                                    <p className="mb-0 w-100">{e.date}</p>
                                </div>
                            </div>
                        );
                    })}


                </div>
            </div>

        </>
    )
}