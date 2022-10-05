---
sidebar_position: 9
---


# Tokenomics

1. **Stable token supply table**

| **Type** | **%** | **EYE** | **Lock** | **Comment** |
| --- | --- | --- | --- | --- |
| **Team** | 10 | 300m | 1y | Bonus for team project commitment |
| **Treasury** | 5 | 150m |
 | Backup fund for flexible costs |
| **Investment** | 15 | 450m | 1y linear | Private and public investment rounds |
| **Marketing** | 10 | 300m |
 | Partnerships and public awareness |
| **Community\*** | 35 | 900m | 1y linear | Incentivization, community challenges |
| **Liquidity** | 25 | 750m | 2y linear | Liquidity incentivization in DEXes |

_\*Community as the largest fund portion will contain Airdrop for beta users (5%), Community Art Challenges (10%), Community App Challenges (10%), Community Management Rewards (10%)._

1. **Buy/Sell pressure**

The target is to create an attractive environment to balance sell pressure caused by rewarding factors and buy pressure caused by the need to use all application features, leveraging the interaction of the Eyeseek community.

TBD image

Users will be **motivated to buy** Eyeseek's token in order to:

- **Advertise** an idea, product or service in Shark Tank
- **Ask** for a help in Quest market
- **Donate** or create **microfund** in a crowdfunding event
- **Offer a reward** in app challenges in all modules
- Take share profit from **DAO Bounty**
- **Create a liquidity pair** to receive incentivization rewards

**Sell pressure** will be caused by:

- **Community rewards**
- **App rewards** cash out for completed quests
- **Liquidity rewards** offered to incentivize enough DEX liquidity
- **Vesting release** of initial supply to the investors, team and project partners

1. **Reward inflation**

Eyeseek will experiment with a flexible inflation design; similarly to [Bitcoin's difficulty adjustments](https://www.investopedia.com/bitcoin-mining-difficulty-6543217), **fewer quests will be completed on a daily basis,** and **higher rewards users get**.

The smart contract responsible for rewards distribution will collect daily usage inputs and set multipliers for completing each quest based on application activity. Eyeseek will set 5 initial thresholds, gather data from beta in the testnet, simulate larger user loads and calibrate the multipliers with **two** simple **goals** - **make the reward** system **attractive** for new users **in** an **early phas** e, and **prevent supply overflow in large-scale** situations.

_ **Initial thresholds** _

**q** = number of completed daily quests

**m** = reward multiplier

_Daily rewards = m \* q \* k; k \<= 1_

- _ **q \< 100 =\> m = 50** _ (if number of passed quests are less than 100, set quest reward multiplier to 50)
- _100 \< q \< 1000 =\> m = 20_
- _1000 \< q \< 10000 =\> m = 10_
- _10000 \< q \< 100000 =\> m = 5_
- _100 000 \< q \< 1 000 000 =\> m= 1_
- _q \>1 000 000 =\> m= 1 000 000/ q_

_This model will not allow inflation of more than 1mil/day (~12% year with traffic of tens of millions of active users), traffic around 50 000 quests will require hundreds of thousands of active users, causing inflation ~1-3$ per year without calculation of deflation effects._

If the app would ever process more than a million daily quest exchanges, the reward would no longer matter. Eyeseek would accomplish the gamification model works, and engagement outweighs the desire for rewards. In this scenario Shark Tank promotion module would take over with importance on scalable technical infrastructure and quality reputation model.

Another challenge would be to **set a fairly reward distribution across multiple task types** - for example review of an audio track with ~3-minute length could not be rewarded with the same amount as a review of an academic paper with 20 pages, which will probably be a more time demanding activity.

One way to handle this is to set up a table with constants and break down possible quest categories by length. This is an unsustainable approach if we consider an extreme situation, in which Eyeseek will maintain tasks across all industries and activities worldwide.

The second approach gives power to the Quest giver and lets him define task difficulty and satisfaction from the result. This approach requires high discipline guaranteed by the reputation system mentioned in previous chapter 4.

1. **Deflation**

The **deflation rate will depend** on the design success of the **Shark tank** module. The project's first year is expected to be highly inflationary to distribute initial supply locked in vesting. Based on a rough calculation in the previous point, **a very high amount of active users will swap the supply trend** from inflation in small percentage units to deflation in small percentage units.

Only extreme scenarios with millions of active ads daily would burn significantly more tokens than reward _(5 million burned, 1 million minted per 1 million quests, and 1 million ads)._ This scenario would require approximately 10-20m active users, which is more than [FTX app downloads](https://play.google.com/store/apps/details?id=com.ftxmobile.ftx) and therefore, less probable.

Even in extreme cases, a high burning rate will not damage the Eyeseek. The less liquid token would lead to the increased price, more attractive for Quest hunters and less for promoters in Shark Tanks. This effect would lead to an equilibrium of the number of ads and token price.

#### The home chain dilemma

An unresolved question impacting token liquidity and some of the features will be which blockchain will be picked as the home of Eyeseek. There [is no silver bullet](https://medium.com/web3-magazine/so-which-blockchain-to-pick-a4a571ee69fe) to satisfy all impactful aspects:

- **Investment opportunities**. Smaller chains will offer financial and business support key for the project development; larger chains are more convenient for token sales and options to address ecosystem partners. As Eyeseek starts from zero awareness and investments, the ecosystem offering help to boost the growth will be a probable winner.
- **Multichain vs. Single** deployment. The multichain strategy would create awareness in the userbase across various web3 projects but would also harm token health with higher volatility. Eyeseek will be forced to start single-chain for the Quests module and Shark tank module. The chain donation module is designed token-agnostic and should be deployed everywhere possible to open doors for new partners and users.
- **Security tooling**. Blockchains supported by [Gnosis safe](https://docs.gnosis-safe.io/contracts/gnosis-safe-on-other-evm-based-networks) are preferable to adopt multisig transactions, critical for easy and secure funds management.

- **Fiat on/off ramp** is a preferable feature the home chain will allow. The more bridges and steps in the cash out process there are, the more security risks and fees are introduced into the Chain funding processes.
