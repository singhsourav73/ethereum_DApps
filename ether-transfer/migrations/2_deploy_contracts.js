var ApprovalContract = artifacts.require("ApprovalContract");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ApprovalContract, {from : accounts[0]});
}