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
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            
            <div className="col-xs-12 col-sm-4 col-md-8">
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

            <div className="col-xs-12 col-sm-12 col-md-4">
                <SocialFooterLinks />
            </div>
          </div>

        </div>
      </section>
    )
}
