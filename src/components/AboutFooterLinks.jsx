import React from 'react';
 
export default function AboutFooterLinks() {
 
    return (
        <>
            <h5 className="d-flex" >About</h5>
                  <ul className="list-unstyled quick-links">
                    <li>
                      <a href="/aboutus">
                        About Sovryn
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/faq">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Press
                      </a>
                    </li>
                  </ul>
        </>
    );
}
