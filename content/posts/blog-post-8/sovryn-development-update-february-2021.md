---
title: Sovryn Development update feburary 2021
date: 2021-03-14
description: "Your Funds, Your Control | Sovryn is the decentralized Bitcoin trading and lending platform"
image : "./blog-post-8.png"
images: ["./blog-post-8.png"]
imageAlt: Sovryn is the decentralized Bitcoin trading and lending platform.
categories: ["News", "Roadmap"]

---

<b>Hello Sovryns!</b>
<br /><br />
In addition to our bi-weekly meetings and community update, we will be bringing you monthly development updates for the extra nerdy people out there, who like to delve in-depth.
<br /><br />
<b>TLDR;</b>
<br /><br />
A short summary of our development update are:
<br /><br />
<ul>
    <li>Token Generation Event (Yaaay!!!)</li>
    <li>Governance 2.0 (Bitocracy)</li>
    <li>Transfer started to Hardhat from Truffle & Brownie</li>
    <li>Arbitrum integration research and testing.</li>
    <li>Referral Mechanism Development.</li>
    <li>Different Sale Contract Development, Testing, and Deployment.</li>
    <li>Admin Panel enhancements.</li>
    <li>Analytics improvements.</li>
    <li>RSK Mainnet Service upgrades.</li>
    <li>New UI/UX in swaps, margin trades, staking, etc.</li>
    <li>Scalable RSK node clusters.</li>
    <li>FastBTC v3 development.</li>
    <li>Sovryn Node/Watcher upgrades.</li>
    <li>General refactoring and debugging.</li>
</ul>   
<br /><br />
<b>Oh Boy, the long version ;)</b>
<br /><br />
Now let’s see the long version how the team moved forward in the month of February.
<br /><br />
<b>TGE:</b> We have launched our token SOV which will be used frequently in our system, rather than just being a speculative instrument.
<br /><br />
<b>Bitocracy:</b> We have also moved to our own Governance 2.0 or Bitocracy as we call it. In these early stages, we have separate mechanisms for critical and normal changes. Rest assured, as time passes this is going to be one of the most decentralized systems in the Blockchain World.
<br /><br />
<b>Hardhat:</b> Until now, we were using Truffle and Brownie for testing, and for that reason, our actual code coverage was difficult to understand. We also had a different mechanism for deployment using Brownie. Now, we are on the path to convert all our tests to JS thus getting a unified code coverage report and very quick response on the overall testing.
<br /><br />
<b>Arbitrum:</b> Although RSK is about 100x efficient in terms of Gas Price compared to Ethereum, it doesn’t mean it will be for long. We need to focus on presenting a near-instant, low, or gasless execution of transactions. For that, we are striding forward with Arbitrum Rollup technology, and hopefully working to integrate that into our system to provide our community with the best possible experience.
<br /><br />
<b>Referral Mechanism:</b> We were working on the development of an affiliate system for our products to earn that extra for our enthusiastic community members.
<br /><br />
<b>Token Pre-sales:</b> We completed our Genesis and Origin Token Pre-sales in record time. Our devs worked really hard to make sure everyone had an awesome and smooth experience.
<br /><br />
<b>UI & UX:</b> One of the most important feature any Blockchain product can offer to the community is a smooth user experience. Our developers are leaving no stone unturned to make that possible.
<br /><br />
<b>FastBTC:</b> We have been working on a new, improved, and much more decentralized version for pegging BTC into Sovryn effortlessly. FastBTC is in the works, which will bring a fast way to peg OUT of Sovryn.
<br /><br />
<b>Arbitrage:</b> We are working on a system to bring in more consistent pricing to other markets using our own node to keep the market at a balance.
<br /><br />
Here’s a list of short updates from the Dev teams:
<br /><br />
<h2>Solidity:</h2>
The main work included:
<ul>
<li>Token Generation Event.</li>
<li>Bitocracy Deployment.</li>
<li>Proposal Script, Testing, and proposing to Mainnet.</li>
<br /><br />
<li>Created the Development Fund Contract which is used for the Development Fund and Adoption Fund Tokens from Tokenomics.</li>
<li>Completed the testing of the Development Fund Contract.</li>
<li>Completed the initial review of the Forwarding Contract.</li>
<li>Some new CI changes regarding formatting, testing, etc updated.</li>
<li>Completed review of Governance 2.0 review of the script to be deployed.</li>
<li>Verified all the Governance 2.0 contracts in the RSK Explorer.</li>
<li>Started checking out Arbitrum.</li>
<li>Made a review about the Hardhat integration with Governance.</li>
<li>Reintroduced the Code Coverage in Hardhat.</li>
<br /><br />
<li>Deployed L2 Rollup contracts on RSK Testnet.</li>
<li>Working on deploying all the L2 Rollup Contracts on Kovan Testnet for Testing.</li>
<br /><br />
<li>Test Transformation to Hardhat.</li>
<li>Reintroducing whitelisting (under review).</li>
<li>Developed Affiliates Module (referrals) (under review).</li>
<li>Working on Origin investors claim contracts.</li>
<br /><br />
<li>The pre-deposit contract for the homecoming sale.</li>
<li>Add divergence check and minReturn.</li>
<li>Add internalExpectedReturn to fix the position size calculation in Swaps.</li>
<li>Complete and optimize the SOV handler smart contract, according to the comments from the auditor.</li>
<br /><br />
<li>Supported CSOV deployment for reimbursement.</li>
<li>Developing the smart contract for the DutchAuction for RSK Auction (canceled since pre-deposits exceeded cap).</li>
<li>Developing ETH Auction.</li>
<li>Frontend & Analytics:</li>
<b>The main work included:</b>
<br /><br />
<li>Worked with the governance page redesign.</li>
<li>Worked with the staking page redesign.</li>
<br /><br />
<li>Launched new SOVRYN Bitocracy website.</li>
<li>Launched website to verify staked tokens (https://verify.sovryn.app).</li>
<li>Launched Origin Sale Website.</li>
<li>Changed how whitelisting works.</li>
<li>Various trading dApp design updates.</li>
<li>Various trading dApp bug fixes.</li>
<br /><br />
<li>Added all market-making / liquidity events to the database and API endpoint.</li>
<li>Put together some initial statistics for the admin panel (user growth over time, users per day, trading volume, etc).</li>
<li>Added all loan positions (and all events associated with each loan) and mint/burn events to the admin panel dashboard and API.</li>
<li>Analytics of AMM fees (eg fees earned / pool / token / day).</li>
<br /><br />
<li>Daily, Weekly & Monthly Active Users stats.</li>
<li>New Users of the Day stats.</li>
<li>Total Users & Total Active Users stats.</li>
<li>Daily, Weekly & Monthly Active Traders stats.</li>
<li>New Trader of the Day stats.</li>
<li>Total Traders & Total Active Traders stats.</li>
<ul>
<br /><br />
<b>UX/UI:</b>
<br /><br />
The main work included:
<br /><br />
<ul>
<li>Origin Pre-order UX & UI.</li>
<li>New UX & UI for swap and margin trade.</li>
<li>New fastBTC modal.</li>
<li>Staking interface.</li>
<li>CSOV redemption interface and flow.</li>
<li>SOV redemption interface and flow.</li>
<li>Creating design systems for the dapp and website.</li>
<li>UX & UI of the new website.</li>
</ul>
<b>Backend, Infrastructure & DevOps:</b>
<ul>
<li>The main work included:</li>
<li>FastBTC v3 created: master/slave nodes for the RSK relay</li>
<li>Genesis and origin sale backends created</li>
<br /><br />
<li>Created autoscaling, load balancer, and replaced our RSK mainnet service.</li>
<li>Integrating Sovryn bridge into the system, configuration, and deployment.</li>
<br /><br />
<li>Fixing bugs related to the arbitrage and liquidation features in Sovryn Watcher. The main achievement was making it possible to swap back to your original currency after liquidation is completed (and thereby avoiding too much exposure in the collateral).</li>
<li>Developing verification systems to verify BTC deposits in FastBTC.</li>
<li>Fixing the telegram notifications, and other related bugs.</li>
</ul>
<br />
For more details about the Sovryn tech stack, its use cases, and the SOV token see the Sovryn Black Paper.
<br />
<br />
Follow Sovryn on <a href="#" className="btn-link">Twitter</a>
Join us on <a href="#" className="btn-link">Discord</a>
Stay <a href="#" className="btn-link">Sovryn</a>
