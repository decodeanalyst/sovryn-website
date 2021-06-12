import React, { useState } from 'react';
import arrow from "../static/arrow.jpeg"

export default function FaqQuestionList() {

    const dataItems = [{
        "title": "Get started",
        "color": "#CBB464",
        "content": [
            {
                "faqtitle": "What is Sovryn",
            },
            {
                "faqtitle": "Wallet setup guide",
            },
            {
                "faqtitle": "How to be Sovryn",
            }
        ]
    },
    {
        "title": "Trading",
        "color": "#8493A5",
        "content": [
            {
                "faqtitle": "What is trading?",
            },
            {
                "faqtitle": "Margin trading on Sovryn",
            },
            {
                "faqtitle": "Long and short trade",
            },
            {
                "faqtitle": "What is sovryn",
            },
            {
                "faqtitle": "What is sovryn",
            }
        ]
    },
    {
        "title": "Lending",
        "color": "#B1BBB4",
        "content": [
            {
                "faqtitle": "Lending guide",
            },
            {
                "faqtitle": "Redeem your loan",
            },
            {
                "faqtitle": "Lending fees",
            },
        ]
    },
    {
        "title": "Borrowing",
        "color": "#9F7D71",
        "content": [
            {
                "faqtitle": "Borrowing guide",
            },
            {
                "faqtitle": "Borrowing guide",
            },
        ]
    },
    {
        "title": "GovernancE",
        "color": "#CBB464",
        "content": [
            {
                "faqtitle": "What is SOV token",
            },
            {
                "faqtitle": "How Sovryn governance works",
            },
            {
                "faqtitle": "HOW to set up SOV in your wallet",
            },
            {
                "faqtitle": "Staking and voting",
            }
        ]
    },
]

    return (
        <>
            {dataItems.map((item, index, color) => (
                <div key={index} className="row pt-5">
                    <div className="col-lg-4">
                        <div className="tag-label tag-label-slanted tag-label-faq" style={{background:item.color}}>
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {item.content.map((c, i) => (
                            <a href="#" className="w-100" key={i}>
                                <div className="h-auto pb-2 pl-4 pr-4 pt-2 rectangle w-100 mb-3">
                                    <div className="align-items-center d-flex justify-content-between">
                                        <h4 className="font-weight-bold faq-question-title mb-0">{c.faqtitle}</h4>
                                        <div><img src={arrow} className="img-fluid" style={{ width: "40px" }} /></div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
