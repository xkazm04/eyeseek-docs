---
sidebar_position: 5
---

# 4. Chain Funding

Eyseek's third module incentivizes users to spend tokens received in the Quest module on **crowdfunding** projects specialized in common good like **educational** projects, **science** projects or **charity**.

The magic of gamified crowdfunding rests in the combination of blockchain capability to settle payments in any cryptocurrency and smart contracts' ability to let anyone write bank-like services. With smart contracts, even newbies can practically write in a few hours with 200 lines of code services like payment orders, time limit orders, or **collections**.

Our smart contract will alternate today's crowdfunding method by mixing two funding methods:

1. **Direct payment** - The user can simply send any amount of tokens to a project, if the project achieves funding goals, the amount will be accounted to the project's address. If not, tokens will be returned back to the original backer.
2. **Microfunds** - Users can create a structure similar to bank collection, called _ **microfund** _. Microfund is charged by any amount sent by the user and activates following rule guaranteed by smart contract code: _If any following user directly donates, charge the same amount to funded project from the Microfund until the limit is exceeded."_

The idea is very similar to the Quadratic funding mechanism (QF) implemented in Gitcoin grants. With the key difference QF pushes math to spread funding decentralization and eliminate whales to achieve democracy. Eyeseek offers tools to gamefi cooperation between whales and regs. To differentiate that, let’s call our solution **Chain funding**.

TBD image

The **more microfunds are created, the more impactful small donations are** at the end of the funding cycle, causing a chain reaction with a multiplier of dozens, hundreds and event thousands in case the funding project gains popularity.

Let's define two groups of potential backers in categories per their financial engagement in a project:

- **Engaged user** = strongly motivated backer, the wealthy user or impacted in some way by project's success
- **Holiday user** = most typical type of user, enjoying features in Eyeseek and does not seek proactively crowdfunding opportunities

The goal of this game for "engaged" users is to accumulate the most resources for a given project to accomplish the funding goal. "Engaged" users create microfunds a psychological tool to motivate both "holiday" users and other "engaged" users to join and optimize theirs donates. "Holiday" users not participating under usual circumstances now have a practical tool to drain most of "engaged" users resources for a good cause.

_60 deployed microfunds for a project ensures that $1 donation after will drain additional $60 dollars from microfund owners, leading to total donation of $61._

[Kickstarter reports](https://www.kickstarter.com/help/stats) that over 60% of funded projects ended unsuccessfully, either by lack of awareness (10% projects zero funded), project quality or ambitious goals (40% met 1%-20% goals. Chain funding concept will help beginning projects to show up thanks to the push notifications and blockchain hype around new ideas. Microfund strategy will also support 80-90% backed projects to complete the goal by involving "holiday" donors.

Application of Chain funding in traditional investment could become counterproductive in some cases where chain network reaction could lose some of the early investor privileges.

#### Project verification process

Our team will contact charities in the fields of humanity, environment, and religion to find the first partners willing to cooperate with us. We will **offer** institutions from the beginning:

- Account **onboarding** on chain
- **Guidance** howto provide details about the funding project
- **Support** to **cash out** cryptocurrencies to fiat

If the idea turns out to be working and service demand increases, the team role changes from "requestors" to "verifiers", where charity requests will be evaluated together with the community. The final step in the evolution of the process would be to automate the verification process and set DAO as verifying entity

**Under consideration** to run part of the module for _ **non-verified entities** _as an alternative service to Kickstarter to crowdfund regular businesses outside common good topics. Projects marked as non-verified would lose some functional features and be marked as non-verified to separate them from core verified projects. Against this idea are two handicaps we wouldn't like to be responsible for:

1. _Guarantee of crowdfunding rewards_ and customer support to settle complaints
2. Risks of _low-quality project_ income could discourage partnerships with serious institutions in science and education domains.

The ideal state is to present Chain funding module with a clean sheet to attract genuine and helpful projects to participate in and at the same time, support smart contract implementation for 3rd party services similar to Kickstarter to let them handle customers with higher quality than Eyseek would be able to support.

#### Funding gamification aspects

Outside this little game between "engaged" and "holiday" users, the app introduces two more concepts known more from games than crowdfunding.

1. **Real-time stats** (push notifications, statistic tables)

Statistics from Sports/Bets environment to compare funding projects in similar categories or geographical locality and race between each other. Users will be informed how the project's funding was successful, how impactful his activity was on others, and what precisely the project did with all the financing after the successful round. One reason why people don't engage in charity is often the transparency issue - rarely do donors get information on how much percentage was spent on the actual cause and become rightfully skeptical.

1. Combination of **Bounties** and **Microfunds**

Our team or users could challenge the community with token rewards for completing extraordinary milestones in a specific industry, locality or service category.

_Example:_

"_I'll give $1000 to a user closing most amount of wealth this month in all microfunds related to projects in Astrophysics science discipline."_

Our community management's task is to show paths to how the app can become more effective than traditional services, incentivize the most effective ways and create an environment to let the community take the lead by pushing imagination further.

#### Crowdfunding fees

Chain funding will follow two pricing models based on the chosen payment currency:

- **Eyseek token payments** will requirea **0% platform fee** and the ability to pay directly from uncollected app rewards to avoid gas fees with blockchain native token.
- Using **stablecoins** or **blockchain native tokens** will cost a **0.1% fee** if the project achieves backing goals and the total amount is distributed to the wallet address.

Payment with currencies available in major exchanges will make the settlement process and cashout process easier but without any benefit for the team and token holders. We'll use 0.1% of successful donations to buy back the Eyeseek token and spend it in the ecosystem by creating in-game challenges like bounties, adding liquidity, and spending time to attract new partnered projects.

_Example: Minimum funding amount of 1000USD would lead to Eyeseek's profit of 1$_

Although the rate of 0.1% might not seem very profitable compared with [Kickstarter's 5+%](https://www.kickstarter.com/help/fees), [Crowdcube 7%](https://help.crowdcube.com/hc/en-us/articles/206232464-What-fees-does-Crowdcube-charge-for-raising-finance-on-the-platform-), taking profits from good deeds is against the core values mentioned in the introduction. Maintenance costs are close to zero as a public blockchain drives technical infrastructure. Only service cost is given by helping traditional projects cash out from crypto to fiat.

Later-staged DAO will be granted possibilities to add other payment currencies, change fee rates based on pubic proposals, and pass voting.

#### Feature modularization

**Chain funding**** module **will be designed to work as a** self-sufficient package integrable into other application**s to improve the possibility of more extensive outreach. Package will contain a set of UI components in multiple frontend frameworks integrated with deployed Eyeseek smart contracts on various blockchains, possibly to bend to custom contracts. Anyone should be able to pass code components into their own project and utilize it.

Each of the chains could support a different set of tokens as a payment currency, usually primary blockchain assets (USDC/MATIC on Polygon, BUSD/USDT/BNB on BNB chain, etc.).

Eyeseek token's payments will be supported initially only on the home chain due to the liquidity concerns of managing across multiple chains.


