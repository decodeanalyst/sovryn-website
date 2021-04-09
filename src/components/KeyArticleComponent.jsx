import React from "react";
import "../styles/blogarticle.scss";

export default function KeyArticleComponent() {
    return(
        <div className="container">
            <div className="row">
                    <div className="tealrectangle d-flex">SUBHEADING IN THE ARTICLES</div>
                    <div className="lightbluerectangle">
                        <div className="heading font-weight-bold">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        </div>
                    </div>
            </div>
            <div className="row py-2">
                <div className="white-rectangle">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s
                </div>
            </div>
            
        </div>
    );
}