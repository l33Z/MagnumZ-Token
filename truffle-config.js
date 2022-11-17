const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },

    inf_magnum_goerli: {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(
        process.env.MENMONIC,
        `https://goerli.infura.io/v3/${process.env.API_KEY}`
      ),
    },
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.13",
    },
  },
};
