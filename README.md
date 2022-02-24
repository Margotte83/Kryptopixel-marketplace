# Kryptopixel-marketplace 🖼💲
## Full stack NFT marketplace built with Polygon, Solidity, IPFS, & Next.js
## Principle
* A user puts an item for sale, the ownership of the item will be transferred from the creator to the marketplace.
* A user purchases an item, the purchase price will be transferred from the buyer to the seller and the item will be transferred from the marketplace to the buyer.
* The marketplace owner will be able to set a listing fee. This fee will be taken from the seller and transferred to the contract owner upon completion of any sale, enabling the owner of the marketplace to earn recurring revenue from any sale transacted in the marketplace.

### The marketplace logic will consist of two smart contracts
* <strong>NFT Contract</strong> - This contract allows users to mint unique digital assets.
* <strong>Marketplace Contract</strong> - This contract allows users to put their digital assets for sale on an open market.

## Main technologies used 🧰 
* Web application framework - <strong>Next.js</strong>
* Solidity development environment - <strong>Hardhat</strong>
* File Storage - <strong>IPFS</strong>
* Ethereum Web Client Library - <strong>Ethers.js</strong>

## Prerequisites
* Node.js installed on your machine
* Metamask wallet extension installed as a browser extension

## Configuring the network
Next, we need to switch from the local test network to the <strong>Mumbai Testnet</strong>

## About Polygon
"Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem."

#### Local setup

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/Margotte83/Kryptopixel-marketplace.git

cd polygon-ethereum-nextjs-marketplace

# install using NPM or Yarn
npm install

# or

yarn
```

2. Start the local Hardhat node

```sh
npx hardhat node
```

3. With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network localhost
```

4. Start the app

```
npm run dev
```
### Configuration

To deploy to Polygon test or main networks, update the configurations located in __hardhat.config.js__ to use a private key and, optionally, deploy to a private RPC like Infura.

```javascript
require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "";

// infuraId is optional if you are using Infura RPC
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
```

If using Infura, update __.infuraid__ with your [Infura](https://infura.io/) project ID.

🚨 Be sure to never commit any private keys to Git. To be extra safe, consider storing these values in temporary environment variables when working with wallets that contain real tokens. To omit from Git, add .secret to your .gitignore file.

<hr>

<p align="center">
<a href="https://www.linkedin.com/in/marjorie-ngoupende-dev/" target="_blank" >
  <img alt="Linkedin - Marjorie Ngoupende" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>
<a href="mailto:marjorie.ngoupende@gmail.com" target="_blank" >
  <img alt="Email - Marjorie Ngoupende" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 
<br/>
  Made with :coffee: and ❤️ by <b>Marjorie Ngoupende</b>.
<p/>


