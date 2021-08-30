const ApprovalContract = artifacts.require('../contracts/ApprovalContract.sol');

contract('ApprovalContract', function(accounts) {
  it('Initiate contracts', async function() {
    const contract = await ApprovalContract.deployed();
    const approver = await contract.approver.call();
    assert.equal(approver, 0x6Ed595159E3E7e660411dADa5e7485bA4eA7920C, "approver don't match");
  });

  it('Takes a deposit', async function() {
    const contract = await ApprovalContract.deployed();
    await contract.deposit(accounts[0], {value: 10000, from: accounts[1]});
    let balance  = await web3.eth.getBalance(contract.address);
    assert.equal(balance, 10000, "amount did not match");
  });
});

