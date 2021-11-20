require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy-ethers");
const fs = require('fs');
const privateKey = fs.readFileSync(".env").toString().trim() || "";
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    spark: {
      chainId: 123,
      url: "https://rpc.fusespark.io",
      accounts: [privateKey]
    },

    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      accounts: [privateKey]
    },
    // matic: {
    //   url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
    //   accounts: [privateKey]
    // }
    
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