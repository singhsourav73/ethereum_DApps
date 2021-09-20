const { default: BigNumber } = require("bignumber.js");

var ERC20SNKT = artifacts.require("ERC20SNKT");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ERC20SNKT, 'SANKET', 'SNKT', BigNumber(25000000000000000000000000000000000000000000000000000000000000000));
}