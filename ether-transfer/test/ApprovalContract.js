const ApprovalContract = artifacts.require('../contracts/ApprovalContract.sol');

contract('ApprovalContract', async function(accounts) {
  it('Initiate contracts', async function() {
    const contract = await ApprovalContract.deployed();
    const approver = await contract.viewApprover.call();
    assert.equal(approver, accounts[0], "approver don't match");
  });

  it('Takes a deposit', async function() {
    const contract = await ApprovalContract.deployed();
    let beforeBalance  = await web3.eth.getBalance(contract.address);
    await contract.transfer(accounts[8], {value: 1000000000000000000, from: accounts[7]});
    let afterBalance  = await web3.eth.getBalance(contract.address);
    assert.equal(parseInt(afterBalance) - parseInt(beforeBalance), 1000000000000000000, "amount did not match for transfer from " + accounts[1]);
  });

  it('Approve transfer', async function() {
    const contract = await ApprovalContract.deployed();
    await contract.transfer(accounts[9], {value: 1000000000000000000, from: accounts[7]});
    await contract.transfer(accounts[9], {value: 1000000000000000000, from: accounts[6]});
    await contract.approveAll({from: accounts[0]});
    assert.equal(accounts[1], accounts[1], "amount did not match after transfer");
  });
});