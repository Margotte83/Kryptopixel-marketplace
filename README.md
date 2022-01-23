# Kryptopixel-marketplace 🖼💲
## Principle
* A user puts an item for sale, the ownership of the item will be transferred from the creator to the marketplace.
* A user purchases an item, the purchase price will be transferred from the buyer to the seller and the item will be transferred from the marketplace to the buyer.
* The marketplace owner will be able to set a listing fee. This fee will be taken from the seller and transferred to the contract owner upon completion of any sale, enabling the owner of the marketplace to earn recurring revenue from any sale transacted in the marketplace.

### The marketplace logic will consist of two smart contracts
* NFT Contract - This contract allows users to mint unique digital assets.
* Marketplace Contract - This contract allows users to put their digital assets for sale on an open market.

## Main technologies used 🧰 
* Web application framework - Next.js
* Solidity development environment - Hardhat
* File Storage - IPFS
* Ethereum Web Client Library - Ethers.js

## Prerequisites
* Node.js installed on your machine
* Metamask wallet extension installed as a browser extension

## About Polygon
"Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem."

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

