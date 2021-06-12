import React from "react";
import "../styles/PositionHiringprocesssection.scss";
import arrow from "../static/arrow.jpeg"
import StyledButton from "../components/StyledButton";
import StyledButton1 from "../components/StyledButton1";
import InfoLabel from "../components/InfoLabel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PositionHiringprocesssection() {
    return (
        <>

            <div className="container" id="div-desktop">
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="d-flex">
                            <div className="position-slantedrectangle">
                                <p class="position-text-headding">
                                    Hiring process
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <h3>1. APPLICATION</h3>
                                <div class="group5812">
                                    <div className="position-rectangle-info">
                                        <div className="position-hiring-processs p-2">
                                            To apply, you send us your CV and any other supporting information (cover letter, portfolio, website links, etc) and we use that data to determine which candidates we should invite for assessment. At this stage we’re looking to see if you have relevant experience, a passion for blockchain technology, open-source software and cryptocurrencies and align with our principles.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h3>2. Assessment</h3>
                                <div class="group5812">
                                    <div className="position-rectangle-info">
                                        <div className="position-hiring-processs p-2">
                                            If we determine there’s a good match, we’ll invite you to have an initial interview. In the first initial call we’ll be looking to understand your background, skills, interests & motivation for joining Sovryn. We’ll also share more about life at Sovryn, answer any questions you have and describe the recruiting process in detail. If successful, from here you’ll start to meet more contributors to Sovryn via either interviews or assessments (depending on the role we are trying to fill).
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h3>3. Decision</h3>
                                <div class="group5812">
                                    <div className="position-rectangle-info">
                                        <div className="position-hiring-processs p-2">
                                            At this point, we’ll make a decision on whether we believe you’d be the right fit for Sovryn - we take into account all the information gathered from your application and assessment stages. If successful, we’ll make you an offer to join the team. We’ll offer you a salary in crypto, either with Stablecoins such as DAI or USDT, our own native token SOV, or a combination of both.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container" id="div-mobile">
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="d-flex">
                            <div className="position-slantedrectangle">
                                <p class="position-text-headding">
                                    Hiring process
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row mt-5">
                            <div className="col-md-4 mt-3">
                                <h3>1. APPLICATION</h3>
                                <div class="group5812">
                                    <div className="position-rectangle-info-mob">
                                        <div className="position-hiring-processs p-2">
                                            To apply, you send us your CV and any other supporting information (cover letter, portfolio, website links, etc) and we use that data to determine which candidates we should invite for assessment. At this stage we’re looking to see if you have relevant experience, a passion for blockchain technology, open-source software and cryptocurrencies and align with our principles.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <h3>2. Assessment</h3>
                                <div class="group5812">
                                    <div className="position-rectangle-info-mob">
                                        <div className="position-hiring-processs p-2">
                                            If we determine there’s a good match, we’ll invite you to have an initial interview. In the first initial call we’ll be looking to understand your background, skills, interests & motivation for joining Sovryn. We’ll also share more about life at Sovryn, answer any questions you have and describe the recruiting process in detail. If successful, from here you’ll start to meet more contributors to Sovryn via either interviews or assessments (depending on the role we are trying to fill).
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3 mb-5">
                                <h3>3. Decision</h3>
                                <div class="group5812">
                                    <div className="position-rectangle-info-mob">
                                        <div className="position-hiring-processs p-2">
                                            At this point, we’ll make a decision on whether we believe you’d be the right fit for Sovryn - we take into account all the information gathered from your application and assessment stages. If successful, we’ll make you an offer to join the team. We’ll offer you a salary in crypto, either with Stablecoins such as DAI or USDT, our own native token SOV, or a combination of both.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}