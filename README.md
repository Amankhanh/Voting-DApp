# Voting DApp

A decentralized voting application built using **Solidity, Hardhat, React.js, and ethers.js**. The application allows users to connect their MetaMask wallet and vote for candidates through a smart contract deployed on the Ethereum blockchain.

## 🚀 Features

* Connect Ethereum wallet using MetaMask
* Display available candidates
* Cast votes through a Solidity smart contract
* Store voting data on the blockchain
* Display candidate names and vote counts
* React-based frontend
* Smart contract deployment using Hardhat

## 🛠️ Technologies Used

### Blockchain

* Solidity
* Ethereum
* Hardhat

### Frontend

* React.js
* JavaScript
* ethers.js
* HTML
* CSS

### Tools

* MetaMask
* Remix / Hardhat
* Git & GitHub

## 📁 Project Structure

```text
Voting_Daap/
│
├── contracts/
│   └── Voting.sol
│
├── frontend/
│   └── React application
│
├── scripts/
│   └── deploy.js
│
├── test/
│   └── Lock.js
│
├── hardhat.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Amankhanh/Voting-DApp.git
```

Go to the project directory:

```bash
cd Voting-DApp
```

Install the required dependencies:

```bash
npm install
```

## 🔗 Smart Contract

The voting logic is implemented in the `Voting.sol` smart contract.

The contract allows:

* Creating candidates
* Casting votes
* Tracking vote counts
* Retrieving candidate information

## ▶️ Running the Project

Start a local Hardhat blockchain:

```bash
npx hardhat node
```

In another terminal, deploy the smart contract:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

Then start the React frontend:

```bash
cd frontend
npm install
npm start
```

Connect your MetaMask wallet to the appropriate network and interact with the voting application.

## 🧠 How It Works

1. The user opens the Voting DApp.
2. The user connects their MetaMask wallet.
3. The frontend communicates with the deployed `Voting` smart contract using **ethers.js**.
4. The user selects a candidate and submits a vote.
5. The voting transaction is sent to the blockchain.
6. The smart contract records the vote.
7. The updated vote count is displayed in the frontend.

## 📌 Project Purpose

This project was built to understand how a **decentralized application (DApp)** connects a React frontend with an Ethereum smart contract.

It helped me practice:

* Solidity smart contract development
* Smart contract deployment with Hardhat
* Blockchain wallet integration
* ethers.js
* React frontend development
* Reading data from a smart contract
* Sending blockchain transactions

## 👨‍💻 Author

**Aman Khan**

GitHub: https://github.com/Amankhanh
