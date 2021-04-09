import React from "react";
import "../styles/blogarticle.scss";

export default function BlogArticleComponent() {
    return(
        <div className="container">
            <div className="row">
                    <div className="yellowrectangle d-flex">SUBHEADING IN THE ARTICLES</div>
                    <div className="white-rectangle">
                    <div className="heading font-weight-bold">Lorem Ipsum is simply dummy text</div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s
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