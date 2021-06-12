import React from 'react';
 
export default function ProductFooterLinks() {
 
    return (
        <>
            <h5 className="d-flex" >Products</h5>
                  <ul className="list-unstyled quick-links">
                  <li>
                      <a href="/market-making">
                        Market Making
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Token Swap
                      </a>
                    </li>
                    <li>
                      <a href="/margin-trade">
                        Margin Trading
                      </a>
                    </li>
                    <li>
                      <a href="/lending">
                        Lending
                      </a>
                    </li>
                    <li>
                      <a href="/borrow">
                        Borrowing
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Liquidity
                      </a>
                    </li>
                    <li>
                      <a href="/stake">
                        Staking
                      </a>
                    </li>
                  </ul>
        </>
    );
}
