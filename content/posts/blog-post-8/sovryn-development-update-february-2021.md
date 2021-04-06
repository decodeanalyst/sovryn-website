---
title: Sovryn Development update feburary 2021
date: 2021-03-14
description: "Your Funds, Your Control | Sovryn is the decentralized Bitcoin trading and lending platform"
image : "./blog-post-8.png"
images: ["./blog-post-8.png"]
imageAlt: Sovryn is the decentralized Bitcoin trading and lending platform.
categories: ["News", "Roadmap"]

---

**Hello Sovryns!**
<br /><br />
In addition to our bi-weekly meetings and community update, we will be bringing you monthly development updates for the extra nerdy people out there, who like to delve in-depth.
<br /><br />
**TLDR;**
<br /><br />
A short summary of our development update are:
<br /><br />

* Token Generation Event (Yaaay!!!)
* Governance 2.0 (Bitocracy)
* Transfer started to Hardhat from Truffle & Brownie
* Arbitrum integration research and testing.
* Referral Mechanism Development.
* Different Sale Contract Development, Testing, and Deployment.
* Admin Panel enhancements.
* Analytics improvements.
* RSK Mainnet Service upgrades.
* New UI/UX in swaps, margin trades, staking, etc.
* Scalable RSK node clusters.
* FastBTC v3 development.
* Sovryn Node/Watcher upgrades.
* General refactoring and debugging.

<br /><br />

**Oh Boy, the long version ;)**
<br /><br />
Now let’s see the long version how the team moved forward in the month of February.
<br /><br />

**TGE:** We have launched our token SOV which will be used frequently in our system, rather than just being a speculative instrument.
<br /><br />

**Bitocracy:** We have also moved to our own Governance 2.0 or Bitocracy as we call it. In these early stages, we have separate mechanisms for critical and normal changes. Rest assured, as time passes this is going to be one of the most decentralized systems in the Blockchain World.
<br /><br />

**Hardhat:** Until now, we were using Truffle and Brownie for testing, and for that reason, our actual code coverage was difficult to understand. We also had a different mechanism for deployment using Brownie. Now, we are on the path to convert all our tests to JS thus getting a unified code coverage report and very quick response on the overall testing.
<br /><br />

**Arbitrum:** Although RSK is about 100x efficient in terms of Gas Price compared to Ethereum, it doesn’t mean it will be for long. We need to focus on presenting a near-instant, low, or gasless execution of transactions. For that, we are striding forward with Arbitrum Rollup technology, and hopefully working to integrate that into our system to provide our community with the best possible experience.
<br /><br />

**Referral Mechanism:** We were working on the development of an affiliate system for our products to earn that extra for our enthusiastic community members.
<br /><br />

**Token Pre-sales:** We completed our Genesis and Origin Token Pre-sales in record time. Our devs worked really hard to make sure everyone had an awesome and smooth experience.
<br /><br />

**UI & UX:** One of the most important feature any Blockchain product can offer to the community is a smooth user experience. Our developers are leaving no stone unturned to make that possible.
<br /><br />

**FastBTC:** We have been working on a new, improved, and much more decentralized version for pegging BTC into Sovryn effortlessly. FastBTC is in the works, which will bring a fast way to peg OUT of Sovryn.
<br /><br />

**Arbitrage:** We are working on a system to bring in more consistent pricing to other markets using our own node to keep the market at a balance.
<br /><br />
Here’s a list of short updates from the Dev teams:
<br /><br />

## Solidity:

The main work included:
<br /><br />

* Token Generation Event.
* Bitocracy Deployment.
* Proposal Script, Testing, and proposing to Mainnet.
<br /><br />

* Created the Development Fund Contract which is used for the Development Fund and Adoption Fund Tokens from Tokenomics.
* Completed the testing of the Development Fund Contract.
* Completed the initial review of the Forwarding Contract.
* Some new CI changes regarding formatting, testing, etc updated.
* Completed review of Governance 2.0 review of the script to be deployed.
* Verified all the Governance 2.0 contracts in the RSK Explorer.
* Started checking out Arbitrum.
* Made a review about the Hardhat integration with Governance.
* Reintroduced the Code Coverage in Hardhat.
<br /><br />

* Deployed L2 Rollup contracts on RSK Testnet.
* Working on deploying all the L2 Rollup Contracts on Kovan Testnet for Testing.
<br /><br />

* Test Transformation to Hardhat.
* Reintroducing whitelisting (under review).
* Developed Affiliates Module (referrals) (under review).
* Working on Origin investors claim contracts.
<br /><br />

* The pre-deposit contract for the homecoming sale.
* Add divergence check and minReturn.
* Add internalExpectedReturn to fix the position size calculation in Swaps.
* Complete and optimize the SOV handler smart contract, according to the comments from the auditor.
<br /><br />

* Supported CSOV deployment for reimbursement.
* Developing the smart contract for the DutchAuction for RSK Auction (canceled since pre-deposits exceeded cap).
* Developing ETH Auction.
* Frontend & Analytics:

**The main work included:**
<br /><br />

* Worked with the governance page redesign.
* Worked with the staking page redesign.
<br /><br />

* Launched new SOVRYN Bitocracy website.
* Launched website to verify staked tokens [https://verify.sovryn.app].
* Launched Origin Sale Website.
* Changed how whitelisting works.
* Various trading dApp design updates.
* Various trading dApp bug fixes.
<br /><br />

* Added all market-making / liquidity events to the database and API endpoint.
* Put together some initial statistics for the admin panel (user growth over time, users per day, trading volume, etc).
* Added all loan positions (and all events associated with each loan) and mint/burn events to the admin panel dashboard and API.
* Analytics of AMM fees (eg fees earned / pool / token / day).
<br /><br />

* Daily, Weekly & Monthly Active Users stats.
* New Users of the Day stats.
* Total Users & Total Active Users stats.
* Daily, Weekly & Monthly Active Traders stats.
* New Trader of the Day stats.
* Total Traders & Total Active Traders stats.

<br /><br />

**UX/UI:**
<br /><br />
The main work included:
<br /><br />

* Origin Pre-order UX & UI.
* New UX & UI for swap and margin trade.
* New fastBTC modal.
* Staking interface.
* CSOV redemption interface and flow.
* SOV redemption interface and flow.
* Creating design systems for the dapp and website.
* UX & UI of the new website.

**Backend, Infrastructure & DevOps:**

* The main work included:
* FastBTC v3 created: master/slave nodes for the RSK relay
* Genesis and origin sale backends created
<br /><br />

* Created autoscaling, load balancer, and replaced our RSK mainnet service.
* Integrating Sovryn bridge into the system, configuration, and deployment.
<br /><br />

* Fixing bugs related to the arbitrage and liquidation features in Sovryn Watcher. The main achievement was making it possible to swap back to your original currency after liquidation is completed (and thereby avoiding too much exposure in the collateral).
* Developing verification systems to verify BTC deposits in FastBTC.
* Fixing the telegram notifications, and other related bugs.

<br />
For more details about the Sovryn tech stack, its use cases, and the SOV token see the Sovryn Black Paper.
<br />
<br />

Follow Sovryn on Twitter
Join us on Discord
Stay Sovryn
