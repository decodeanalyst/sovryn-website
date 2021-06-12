import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import LabeledFrame from "../components/LabeledFrame";
import TagCloud from '../components/TagCloud';
import MobTagCloud from '../components/MobTagCloud';
import SearchMenu from '../components/SearchMenu';

import "../styles/blogarticle.scss";
import "../styles/faq.scss";
import img1 from "../static/rectangle1779.png";
import FaqQuestionList from "../components/FaqQuestionList"
import FaqInfoBlock from "../components/FaqInfoBlock"
import FaqInfoBlockMobile from "../components/FaqInfoBlockMobile"



const faq = () => {
    const tags = [{ name: "All", color: "#F7F6E7", link: "#" },
    { name: "Get started", color: "#89AD9C", link: "#" },
    { name: "Trading", color: "#8493A5", link: "#" },
    { name: "Lending", color: "#B1BBB4", link: "#" },
    { name: "Borrowing", color: "#9F7D71", link: "#" },
    { name: "Governance", color: "#CBB464", link: "#" },
    { name: "Liquidity", color: "#C1B7A3", link: "#" },
    { name: "Document", color: "#E4C786", link: "#" },
    ]

    return (
        <>
            <DefaultLayout>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="/">HOME</a></li>
                        <li className="breadcrumb-item active" aria-current="page">FAQ</li>
                    </ol>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <LabeledFrame figtxt="FREQUENTLY asked questions" img={img1} banner={true} pageStyle="index" />
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg-5">
                            <div id="div-desktop">
                            <TagCloud tags={tags} />
                            </div>
                            <div id="div-mobile" className="mb-3">
                            <MobTagCloud tags={tags} />
                            </div>
                            
                        </div>
                        <div className="col-lg-7">
                            <div className="faq-searchmenu">
                                <SearchMenu />
                            </div>
                        </div>
                    </div>

                    <FaqQuestionList />
                    <div id="div-desktop">
                        <FaqInfoBlock />
                    </div>
                    <div id="div-mobile">
                        <FaqInfoBlockMobile />
                    </div>

                </div>
            </DefaultLayout>
        </>
    );
}

export default faq;