import React from 'react';
import AboutFooterLinks from './AboutFooterLinks';
import GovernanceFooterLinks from './GovernanceFooterLinks';
import LearnFooterLinks from './LearnFooterLinks';
import ProductFooterLinks from './ProductFooterLinks';
import SocialFooterLinks from './SocialFooterLinks';
 
import "../styles/footer.scss"


export default function Footer() {
 
    return (
      <section id="footer" className="footer-wrapper">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left position-sticky">
            
            <div className="col-sm-12 col-lg-8">
              <div id="div-desktop">
                <div className="row">
                  <div className="col">
                    <ProductFooterLinks />
                  </div>

                  <div className="col">
                  <GovernanceFooterLinks />
                  </div>

                  <div className="col-5">
                  <LearnFooterLinks />
                  </div>
            
                  <div className="col">
                  <AboutFooterLinks />
                  </div>
                </div>
              </div>
              <div id="div-mobile">
                <div className="col">
                <div className="row">
                  <div className="col-md">
                    <ProductFooterLinks />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md">
                  <GovernanceFooterLinks />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md">
                  <LearnFooterLinks />
                  </div>
                </div>
            
                <div className="row">
                  <div className="col-md">
                  <AboutFooterLinks />
                  </div>
                </div>

              </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-4 pt-5">
                <SocialFooterLinks />
            </div>
          </div>

        </div>
      </section>
    )
}
