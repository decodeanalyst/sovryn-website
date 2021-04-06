---
title: What is Fast BTC and why is it important
date: 2021-03-17
description: "Your Funds, Your Control | Sovryn is the decentralized Bitcoin trading and lending platform"
image : "./blog-post-7.png"
images: ["./blog-post-7.png"]
imageAlt: Sovryn is the decentralized Bitcoin trading and lending platform.
---
Due to the decentralised nature of Sovryn, confirming a transaction should normally take more than just a few seconds. This waiting time can be a deal-breaker for many users who are used to the speed of centralised finance. If the DeFi ecosystem wants to remain competitive, the transaction speed is an issue that has to be addressed. Enter Fast BTC, with only 1 BTC blockchain transaction you can now get your Bitcoin into your Sovryn wallet within minutes.
<br />
<br />

**Tell me more!**
<br />
<br />

Sovryn is an RSK native project. In order to use the platform one needs pegged BTC, the RSK-mirrored projection of native BTC. While it is possible to swap BTC for rBTC, the process has previously been both lengthy and complicated, especially for newcomers. The RSK 2-way-peg (peg-in describes the process of converting BTC to RBTC and peg-out the process of converting RBTC to BTC) takes up to 24 hours to confirm a transaction as a big number of confirmations is required. Sovryn was keenly aware of this downside and are pleased to reveal the solution.
<br />
<br />

This is where FastBTC comes into place. With only 1 BTC blockchain confirmation required, it is possible to get up to 3 rBTC in minutes by relaying BTC to rBTC.
<br />
<br />

**How is this achieved?**
<br />
<br />

For every rBTC address provided by the user, a BTC deposit address is generated from a multi-sig wallet (bip32). A smart contract on RSK provides rBTC which can be withdrawn from an authorized admin wallet. Multiple watchers are listening 24/7 for incoming transactions on all created BTC deposit addresses. If a new transaction is detected a new network of nodes triggers a withdrawal from a multi-sig contract crediting the same amount on the users RSK wallet address minus a small provision.
<br />
<br />

**In simpler terms:**
<br />
<br />

When you ask to swap your BTC for rBTC, the Sovryn node registers your swapping transaction request with the multi-sig wallet. Your request will be processed after it receives confirmation from at least 2 nodes. And then, because of the above-mentioned layers, you get your rBTC into your wallet in no time.
<br />
<br />

Since there are a lot of malicious actors in the DeFi space, we have enforced some limits within the system for the first few days. The limits will be reconsidered when we are sure that everything is properly tuned.
<br />
<br />

And there you go, you are ready to trade.
You can find more documentation on how FastBTC works from the user’s perspective on our wiki at  [https://wiki.sovryn.app/en/sovryn-dapp/fast_btc]. Hopefully, that will clear out any doubts that you might still have.