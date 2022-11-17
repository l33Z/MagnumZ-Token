const MagnumToken = artifacts.require("MagnumToken");

module.exports = function (deployer) {
  deployer.deploy(MagnumToken);
};
