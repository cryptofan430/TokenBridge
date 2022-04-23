// configuration for truffle project
// defines deployment and compilation settings

const dotenv = require('dotenv');
dotenv.config();

// const LedgerWalletProvider = require('@umaprotocol/truffle-ledger-provider');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = process.env.MNEMONIC_PHRASE.trim()

module.exports = {
  networks: {

    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
      
    },

    bscTestnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    ethTestnet: {
      provider : () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/${process.env.INFURA_KEY}`),
      networkCheckTimeout : 10000000,
      network_id : 42,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnet: {
      provider : () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`),
      networkCheckTimeout : 100000000,
      network_id : 1,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 10000
        }
      }
    },
  },

  mocha: {
    timeout: 5000
  },

  api_keys: {
    etherscan: process.env.ETHERSCAN_KEY
  },

  plugins: ['truffle-contract-size', 'truffle-plugin-verify']
};
