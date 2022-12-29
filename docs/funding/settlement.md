---
sidebar_position: 5
---

# 📒 Settlement
Settlement is a process of rewarding backers and returning funds to the project owner. It is done by default after 30 days period

## 1. The process 
1. Project owner **creates a project** and sets the goal
2. During the 30 days, **backers can donate** to the project via direct donate or microfund deployment
3. Project owner incentivizes backers to donate by offering **rewards** (promises, ERC20, ERC1155)
4. After the period ends, **project is closed** and two scenarios could happen (success, failure)

### a) Project failed
Target goal was not reached. 
- All **funds are returned** to the original backers.
- Locked **rewards are returned** to the project owner.

### b) Project succeeded
Gathered amount from backers is higher than the target goal.
- Whole amount is **sent to the project owner**.
- **Uncharged balances of microfunds are returned** to the original backers.
- **Rewards are unlocked** and can be claimed by the eligible backers.
- Rest of rewards are returned back to the project owner (or creator of the reward)


## 2. Security
All settlement functions can be called only by the contract owner - Eyeseek team, to prevent any malicious activity in early stages of the project.
- No smart contract function can benefit the team in any way. Code is [open source](https://github.com/Eyeseek-org/diamond) and can be verified by anyone.

- TBD client-side process to explain

## 3. Fees 
**Platform fee 1%** is charged from all successful projects, this value is coded into the smart contract and so the amount is automatically charged during the settlement process. 
- Failed projects are not penalized in any way.

**Blockchain gas fees** are charged for all interactions with the blockchain, Eyeseek does not benefit from any of these operations:
- Create project
- Donate/Microfund
- Create reward
- Claim reward

Value of the fee is different for each blockchain based on the traffic and its performance. 




