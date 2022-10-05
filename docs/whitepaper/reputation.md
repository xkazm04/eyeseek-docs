---
sidebar_position: 8
---

# Reputation system

The user profile of Eyeseek will consist of dozens to hundreds of micro reputations to fulfill two goals:

1. **Determines autonomously between good and bad actors.**

Bad actors could be users reporting falsy information in the app just for trolling, undeservedly increasing expertise in a specific skill, or worse, creating harmful content.

Good actors are users enjoying the game, helping each other with quests, and engaging in entertaining content.

The total reputation model will be influenced by Stackoverflow's mechanisms with the already implemented [reputation model](https://stackoverflow.com/help/whats-reputation), [privilege model](https://stackoverflow.com/help/privileges) & [badges model](https://stackoverflow.com/help/badges) proven by years. Our architecture gives the models extended possibilities:

- **Reputation models** could be imported from 3rd party services thanks to the Eyeseek "layer 2" nature. We can synchronize reputations (if needed) with web2 services like Stackoverflow and web3 services like Chainlink oracles.
- Stackoverflow **privilege mode** l offers reliable users to create new tags; Eyeseek will grant the opportunity to develop subdomains from different areas (photo.stackexchange, scifi.stackexchange). The goal is to show users what kind of usage they would like to use actively.
- **Badges model will be transformed into soulbound NFTs as skill certificates (in the next point) or art NFTs exchangeable for real value in NFT marketplaces.**

1. **Generates proven expertise in a given skill**

Eyeseek will try to connect closer to the job market and contribution in solving issues on the internet. Models in Stackoverflow cannot afford that because its reputation model is wired up to user behavior and a complex system of badges wired up to a quantity of contribution and voting. Although the badges model will be a quality resource to adjust some of the Eyeseek's behavior, experts' determination in specific skills is ambiguous. For that, **a new dimension is needed to be introduced, the difficult** y.

Quest giver has to define the **difficulty** of given tasks to provide additional helpful background for "expert" scoring. There are two ways to determine the difficulty; one way is to design maturity models for each skill supported by the application - which is more precise but overkilling in the form of educating users and keeping models up to date. The second (less accurate but effective) is to **assign the difficulty level by** the spent **years in the skill of quest giver.**

Values between 1-5 will roughly differentiate between issues being solved by beginners and 5+ years of skilled veterans, even though everyone has unique learning curves based on daily spent time, talent, and previous experience from similar skills. With this scale:

- **Quest market can be optimized based on the skill level of users**
- **Quest givers can request experts** for a given problem by requiring a high-skill reputation for problem-solving
- **Experts in a specific skill can be united** naturallyand form solution groups for complex projects.

The weakness of the 1-5 scale model is in its upper limit; there are skills where 5-year experience is still calculated as a newbie. For that, parametrization of scale in each industry will be considered with the note that more levels are introduced, and more inaccurately could be evaluated.

#### Reputation API

If the system of micro reputation values proves effective, it could keep malicious users away from the application and reliably define users level of skill and expertise; there is a space to expose reputation scores via API or save it on-chain and expose them via smart contract. This score could serve as an additional deciding factor for other protocols in:

- Whitelisting process
- Defi lending collateralization
- Internal reputation scoring