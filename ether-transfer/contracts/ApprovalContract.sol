// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ApprovalContract {
  address[] public sender;

  address payable[] public receiver;

  uint[] public amount;

  mapping

  // Store the address who deployed the contract
  address private approver;

  // event for EVM logging
  event ApproverSet(address indexed oldApprover, address indexed newApprover);

  // event for transfer of ether
  event etherTransfer(address indexed sender, address indexed receiver, uint amount);

  //modifier to check if caller is approver
  modifier isApprover() {
    require(msg.sender == approver, "Caller is not approver");
    _;
  }

  modifier hasMoney() {
    require(msg.value > 0, "Sender must send some appropriate ether");
    _;
  }

  constructor() {
    approver = msg.sender;
    emit ApproverSet(address(0), approver);
  }

  function transfer(address payable _receiver) external payable hasMoney {
    sender.push(msg.sender);
    receiver.push(_receiver);
    amount.push(msg.value);
  }

  function viewApprover() external view returns(address) {
    return(approver);
  }

  function approveAll() external payable isApprover {
    for (uint i = receiver.length - 1; i >= 0; i--) {
      receiver[i].transfer(amount[i]);
      emit etherTransfer(sender[i], receiver[i], amount[i]);
      receiver.pop();
      sender.pop();
      amount.pop();
    }
  }
}

/*
I accept the OpenSea Terms of Service: https://opensea.io/tos

Wallet address:
0xf8a4e0ad07fc79587ae74ad4c28b160321389e13

Nonce:
664338
*/

// https://mintable.app/gasless#


